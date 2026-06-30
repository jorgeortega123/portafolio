# Chatbot del Portfolio - Documentación Frontend

Este documento explica cómo funciona el chatbot **solo desde el lado del frontend** (carpeta `jorgeCv/`). La lógica del backend (Cloudflare Workers) se menciona solo cuando es necesario para entender el flujo, pero no se documenta aquí.

---

## 1. Archivos involucrados

| Archivo | Rol |
|---|---|
| `components/Ai/ChatBot.tsx` | Componente principal. Renderiza la UI, maneja el estado del chat, drag, streaming y sesiones. |
| `hooks/useChatMemory.ts` | Hook que gestiona mensajes, sesiones y la sincronización con el backend. |
| `hooks/useIntentDetection.ts` | Hook que detecta la intención del usuario a partir del texto. |
| `context/ChatActionContext.tsx` | Contexto que expone acciones del portfolio (cambiar fondo, hacer scroll a contacto) para que el bot las ejecute. |

El API base con la que habla el frontend es:
```
https://jorge-server.llampukaq.workers.dev/ia
```

---

## 2. Visión general del flujo

```
Usuario escribe mensaje
        │
        ▼
┌─────────────────────────────┐
│ 1. detectIntent()           │  → clasifica en 9 intenciones
│    (useIntentDetection)     │  → hace scroll a una sección si aplica
└─────────────────────────────┘
        │
        ▼
┌─────────────────────────────┐
│ 2. saveMessage()            │  → agrega el mensaje al estado local
│    (useChatMemory)          │
└─────────────────────────────┘
        │
        ▼
┌─────────────────────────────┐
│ 3. POST /ia/chat/memory     │  → envía { sessionId, message, intent }
│    con AbortController       │
└─────────────────────────────┘
        │
        ▼
┌─────────────────────────────┐
│ 4. Lectura del stream       │  → reader.read() en bucle
│    actualiza streamingContent│  → render progresivo
└─────────────────────────────┘
        │
        ▼
┌─────────────────────────────┐
│ 5. saveMessage(assistant)   │  → guarda respuesta final
│ 6. executeActions(texto)    │  → parsea [ACTION:...] y ejecuta
└─────────────────────────────┘
```

---

## 3. `useIntentDetection.ts` — Detección de intención

### Tipos de intención

```ts
type IntentType =
  | "contact" | "email" | "hire" | "skills"
  | "experience" | "projects" | "wallpaper"
  | "contact-form" | "general";
```

### Cómo puntúa

`INTENT_PATTERNS` es un arreglo donde cada intención tiene:
- `keywords`: palabras clave (cada coincidencia suma **+0.3**).
- `patterns`: expresiones regulares (cada coincidencia suma **+0.5**).
- `suggestedActions`: acciones sugeridas para esa intención.

El algoritmo:
1. Normaliza el texto a minúsculas.
2. Recorre todas las intenciones acumulando puntaje (máximo 1.0).
3. Se queda con la intención de mayor puntaje.
4. Si el puntaje ganador es **menor a 0.2**, se devuelve `"general"`.

### Para qué sirve la intención

Tiene dos usos en `ChatBot.tsx`:

**a) Scroll automático a secciones del portfolio:**
```ts
const scrollMap = {
  contact: "contacto",
  "contact-form": "contacto",
  email: "contacto",
  experience: "timeline",
  skills: "tarjetas",
  projects: "tarjetas",
};
```

**b) Enviarse al backend** dentro del body para que el backend añada instrucciones específicas al system prompt.

**c) Mostrar un badge visual** con el color y label correspondiente (definido en `INTENT_LABELS`).

---

## 4. `useChatMemory.ts` — Estado y persistencia

### Tipos

```ts
interface MemoryMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: number;
}

interface ChatSession {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number;
}
```

### Almacenamiento dual

El hook usa **dos capas** de almacenamiento:

**localStorage (navegador):**
- `chatbot_session_ids` → arreglo con todos los IDs de sesión del usuario.
- `chatbot_current_session` → ID de la sesión activa.

**Backend (KV vía API):**
- Metadata de cada sesión (`/ia/sessions`).
- Mensajes de cada sesión (`/ia/sessions/:id`).

> El **backend es la fuente de verdad**. localStorage solo guarda los IDs para saber qué sesiones pertenecen a este navegador.

### Estado interno

```ts
const [messages, setMessages]           // mensajes de la sesión actual
const [currentSessionId, setCurrentSessionId]
const [sessions, setSessions]           // lista de sesiones del usuario
const [initialized, setInitialized]
```

### Inicialización (al montar)

1. Lee `chatbot_session_ids` y `chatbot_current_session` de localStorage.
2. Si hay IDs locales, hace `GET /ia/sessions?ids=...` para poblar la lista.
3. Si hay sesión actual válida, hace `GET /ia/sessions/:id` para cargar sus mensajes.
4. Marca `initialized = true`.

### Funciones que expone

| Función | Qué hace |
|---|---|
| `saveMessage(msg)` | Agrega un mensaje al estado local **(no toca el backend directamente)**. El backend persiste cuando responde al stream. |
| `createNewSession()` | `POST /ia/sessions` con un ID generado, lo guarda en localStorage y en el estado. |
| `switchSession(id)` | Cambia la sesión actual, limpia mensajes y los recarga del backend. |
| `clearHistory()` | `DELETE /ia/sessions/:id`, remueve el ID local y crea una sesión nueva. |
| `deleteSession(id)` | `DELETE /ia/sessions/:id`, reorganiza la lista y la sesión activa. |
| `refreshSessions()` | Vuelve a sincronizar la lista de sesiones desde el backend. |

> **Nota importante sobre `saveMessage`:** solo actualiza el estado React. La persistencia real en el backend ocurre cuando el stream del backend termina (el backend guarda tanto el mensaje del usuario como la respuesta del assistant en su callback `onFinish`).

---

## 5. `ChatActionContext.tsx` — Acciones del portfolio

Es un puente **desacoplado** entre el bot y otros componentes del portfolio (Hero, Contact).

```tsx
interface ChatActionContextType {
  generateBackground: ((prompt: string) => void) | null;
  scrollToContact: (() => void) | null;
  setGenerateBackground: (fn) => void;
  setScrollToContact: (fn) => void;
}
```

### Cómo funciona

- Componentes externos (por ejemplo el Hero) registran sus funciones mediante `setGenerateBackground` y `setScrollToContact` al montarse.
- El chatbot **consume** esas funciones con `useChatAction()` y las ejecuta cuando el usuario lo pide o cuando la respuesta del bot contiene un marcador `[ACTION:...]`.
- Si ningún componente registró la función, el bot simplemente no ejecuta nada (los valores por defecto son `null`).

Esto evita acoplar el chatbot a componentes específicos del portfolio.

---

## 6. `ChatBot.tsx` — El componente principal

### Estado

```ts
isOpen            // botón flotante vs ventana abierta
input             // texto del input
isLoading         // esperando respuesta del backend
error             // mensaje de error
detectedIntent    // intención del último mensaje
showSessions      // panel de sesiones visible
streamingContent  // texto acumulado del stream en curso
isChangingBg      // generando fondo con IA
tipIndex          // índice del tip rotativo (botón flotante)
position          // { x, y } de la ventana (drag)
```

### Refs

```ts
messagesEndRef     // para auto-scroll
inputRef           // foco del input
abortRef           // AbortController para cancelar el stream
dragRef            // estado del drag actual
chatRef            // referencia a la ventana (para medir bounds)
velocityRef        // velocidad del drag (para momentum)
momentumRef        // animationFrame del momentum
```

### Ciclo de vida (useEffect principales)

1. **Crear sesión si no existe:** si `currentSessionId` es null al montar, llama a `createNewSession()`.
2. **Auto-scroll:** cuando llegan mensajes nuevos o cambia `streamingContent`, hace scroll al final.
3. **Foco del input:** cuando se abre la ventana.
4. **Tips rotativos:** cuando la ventana está cerrada, rota un tip cada 3.5s (`TIPS`).

### Drag con física de momentum

`onDragStart` es el corazón del comportamiento arrastrable:

1. En `mousedown` guarda la posición inicial y la posición del cursor.
2. En `mousemove` calcula `dx, dy`, clampea a los bounds de la ventana y actualiza `position`.
3. Calcula la **velocidad** instante a instante (`vx, vy`).
4. En `mouseup` aplica **momentum**:
   - Fricción `0.92` por frame.
   - Rebota en los bordes con factor `-0.4`.
   - Se detiene cuando la velocidad baja de `0.01`.

### `sendMessage(content)` — La función central

Es el flujo completo de un mensaje (ver diagrama de la sección 2). Detalles importantes:

- **AbortController:** se crea uno nuevo por mensaje y se guarda en `abortRef`. Permite cancelar el stream si el usuario cierra o envía otro.
- **Lectura del stream:** el backend responde con `toTextStreamResponse()` (texto plano). El frontend lo lee con:
  ```ts
  const reader = response.body?.getReader();
  const decoder = new TextDecoder();
  let fullText = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    fullText += decoder.decode(value, { stream: true });
    setStreamingContent(fullText);
  }
  ```
  Esto permite render progresivo (el usuario ve cómo se escribe la respuesta).
- **Finalización:** cuando termina el stream, se guarda el mensaje del assistant y se llama a `executeActions(fullText)`.
- **AbortError:** si se cancela, se ignora silenciosamente.

### `handleQuickAction(action)` — Acciones rápidas

Hay dos tipos:

**a) Acciones reales (ejecutan funciones del frontend, no pasan por el backend):**
- `"Cambiar fondo"` → llama a `generateBackground()` con un prompt aleatorio y muestra mensajes informativos.
- `"Abrir contacto"` → llama a `scrollToContact()` y muestra un mensaje.

**b) Acciones que disparan un mensaje al bot** (`actionMessages`): traducen la acción a una frase en el idioma actual y la envían con `sendMessage()`.

### `executeActions(text)` — Parseo de marcadores

Después de cada respuesta del bot, se buscan marcadores embebidos:

```ts
const wallpaperMatch = text.match(/\[ACTION:wallpaper:([^\]]+)\]/);
if (wallpaperMatch) generateBackground(wallpaperMatch[1]);

if (/\[ACTION:contact\]/.test(text)) scrollToContact();
```

Estos marcadores permiten que el backend (la IA) **dispare efectos visuales** en el frontend sin que el bot sepa cómo están implementados.

### `renderText(text)` — Render seguro

Antes de mostrar cualquier texto del bot:
1. **Quita** los marcadores `[ACTION:...]` con una regex.
2. **Convierte URLs en links clicables**.

Así el usuario nunca ve los marcadores crudos.

### Estados de la UI

1. **Botón flotante** (`!isOpen`): ícono + tip rotativo + animación `ping`.
2. **Ventana abierta** (`isOpen`): cabecera arrastrable, panel de sesiones opcional, badge de intención, lista de mensajes, input.

### Estados de carga (en la lista de mensajes)

- `streamingContent` → muestra la respuesta en tiempo real.
- `isChangingBg` → spinner cyan "Generando fondo con IA...".
- `isLoading && !streamingContent` → tres puntos animados.

---

## 7. Diccionarios y constantes relevantes

**`INTENT_LABELS`** — define color (Tailwind) y label (ES/EN) para cada intención. Se usa en el badge visual bajo la cabecera.

**`TIPS`** — 6 mensajes rotativos que aparecen junto al botón flotante cuando el chat está cerrado.

**`quickStartActions`** — 3 botones que aparecen en el mensaje de bienvenida cuando la sesión está vacía.

---

## 8. Internacionalización

Todo el texto visible al usuario es bilingüe. El idioma se obtiene de:

```ts
const locale = router.locale || "es";
const isSpanish = locale.startsWith("es");
```

Y se aplica con el patrón:
```ts
isSpanish ? "texto en español" : "english text"
```

Soportado en: cabecera, placeholder del input, mensajes de error, tips, acciones rápidas, badges de intención, mensajes informativos del bot.

---

## 9. Resumen de responsabilidades

```
┌──────────────────────────────────────────────────────────┐
│ ChatBot.tsx                                              │
│  • UI completa (botón flotante, ventana, drag, sesiones) │
│  • Orquesta el envío de mensajes y el streaming          │
│  • Parsea [ACTION:...] y renderiza texto seguro          │
└──────────────────────────────────────────────────────────┘
            │ usa                │ usa
            ▼                    ▼
┌─────────────────────┐  ┌──────────────────────┐
│ useChatMemory       │  │ useIntentDetection   │
│  • mensajes         │  │  • clasifica texto   │
│  • sesiones (KV+LS) │  │  • sugiere acciones  │
└─────────────────────┘  └──────────────────────┘
            │
            │ consume (useChatAction)
            ▼
┌──────────────────────────────────────────────────────────┐
│ ChatActionContext                                       │
│  • generateBackground()  ← registrado por Hero          │
│  • scrollToContact()     ← registrado por Contact        │
└──────────────────────────────────────────────────────────┘
```

Cada pieza tiene una responsabilidad única y se comunican por props, hooks y context — no hay acoplamiento directo entre el bot y los componentes del portfolio.
