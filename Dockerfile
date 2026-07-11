# syntax=docker/dockerfile:1

####################################################################
# 1) Dependencias — instala node_modules (cacheable)
####################################################################
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json .npmrc ./
RUN npm ci --legacy-peer-deps

####################################################################
# 2) Builder — compila la app Next.js (output: standalone)
####################################################################
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Variables NEXT_PUBLIC_* se inlinean en el bundle en tiempo de build.
# Llegan como ARG desde docker-compose (archivo .env).
ARG NEXT_PUBLIC_APPLICATION_ID
ARG NEXT_PUBLIC_JS_KEY
ARG NEXT_PUBLIC_MASTER_KEY
ARG NEXT_PUBLIC_GEMINI_API_KEY
ENV NEXT_PUBLIC_APPLICATION_ID=$NEXT_PUBLIC_APPLICATION_ID \
    NEXT_PUBLIC_JS_KEY=$NEXT_PUBLIC_JS_KEY \
    NEXT_PUBLIC_MASTER_KEY=$NEXT_PUBLIC_MASTER_KEY \
    NEXT_PUBLIC_GEMINI_API_KEY=$NEXT_PUBLIC_GEMINI_API_KEY \
    NEXT_TELEMETRY_DISABLED=1 \
    NEXT_DOCKER_STANDALONE=true

RUN npm run build

####################################################################
# 3) Runner — imagen final mínima (~120-150 MB)
####################################################################
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# Usuario no-root
RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

# Salida standalone: copia server + static + public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
