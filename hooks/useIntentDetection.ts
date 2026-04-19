import { useMemo } from "react";

export type IntentType =
  | "contact"
  | "email"
  | "hire"
  | "skills"
  | "experience"
  | "projects"
  | "general";

export interface DetectedIntent {
  type: IntentType;
  confidence: number;
  suggestedActions: string[];
}

interface IntentPattern {
  type: IntentType;
  keywords: string[];
  patterns: RegExp[];
  suggestedActions: { es: string; en: string }[];
}

const INTENT_PATTERNS: IntentPattern[] = [
  {
    type: "contact",
    keywords: [
      "contactar", "hablar", "llamar", "telefono", "contact",
      "reach", "call", "phone", "talk", "comunicar", "conectar",
      "donde ubicar", "donde encontrar", "where find",
    ],
    patterns: [
      /quiero\s+(contactar|hablar|comunicar)/i,
      /como\s+(puedo\s+)?(contactar|llamar|hablar)/i,
      /(?:pasale|pasa)\s+(el\s+)?(?:numero|tel|telefono|contacto)/i,
      /how\s+can\s+i\s+(contact|reach|call)/i,
      /i\s+want\s+to\s+(contact|talk|reach)/i,
      /necesito\s+(hablar|contactar)/i,
    ],
    suggestedActions: [
      { es: "Ver contacto", en: "View contact" },
      { es: "Enviar email", en: "Send email" },
    ],
  },
  {
    type: "email",
    keywords: [
      "correo", "email", "enviar", "mensaje", "mail", "send",
      "escribir", "write", "e-mail",
    ],
    patterns: [
      /envia[rs]?\s+(un\s+)?(correo|email|mensaje)/i,
      /como\s+(le\s+)?(escribo|envio)/i,
      /send\s+(an?\s+)?(email|message)/i,
      /what'?s?\s+(his\s+)?(email|correo)/i,
      /cual\s+es\s+(su|el)\s+(correo|email)/i,
    ],
    suggestedActions: [
      { es: "Ver email", en: "View email" },
      { es: "Ir a contacto", en: "Go to contact" },
    ],
  },
  {
    type: "hire",
    keywords: [
      "contratar", "trabajar", "proyecto", "hire", "work",
      "freelance", "colaborar", "collaborate", "disponible",
      "available", "servicio", "service", "cotizar", "presupuesto",
      "budget", "cotization",
    ],
    patterns: [
      /quiero\s+(contratar|trabajar|un\s+proyecto)/i,
      /esta\s+(disponible|libre)/i,
      /i\s+(want|need)\s+to\s+(hire|work)/i,
      /is\s+he\s+(available|free)/i,
      /necesito\s+(un\s+)?(desarrollador|programador|dev)/i,
      /cuanto\s+(cobra|cobra|cobra)/i,
    ],
    suggestedActions: [
      { es: "Ver experiencia", en: "View experience" },
      { es: "Contactar", en: "Contact" },
    ],
  },
  {
    type: "skills",
    keywords: [
      "tecnologias", "stack", "sabe", "conoce", "skills",
      "tech", "lenguajes", "languages", "framework", "herramientas",
      "tools", "usa", "tecnologia", "technology", "sabe usar",
      "conoce de", "programming",
    ],
    patterns: [
      /que\s+(tecnologias|lenguajes|frameworks|herramientas)/i,
      /what\s+(tech|technologies|stack|skills)/i,
      /sabe\s+(usar|de|programar)/i,
      /conoce\s+(de|sobre)/i,
    ],
    suggestedActions: [
      { es: "Ver skills", en: "View skills" },
      { es: "Ver proyectos", en: "View projects" },
    ],
  },
  {
    type: "experience",
    keywords: [
      "experiencia", "trabajo", "empresa", "empleo", "experience",
      "work", "company", "employment", "trayectoria", "career",
      "historial", "history", "donde ha trabajado", "puestos",
      "positions", "roles",
    ],
    patterns: [
      /que\s+experiencia\s+(tiene|tiene|hay)/i,
      /donde\s+(ha\s+)?trabajado/i,
      /cuentame\s+(de\s+)?su\s+experiencia/i,
      /tell\s+me\s+about\s+(his|the)\s+experience/i,
      /where\s+(has\s+)?he\s+worked/i,
    ],
    suggestedActions: [
      { es: "Ver trayectoria", en: "View experience" },
      { es: "Ver LinkedIn", en: "View LinkedIn" },
    ],
  },
  {
    type: "projects",
    keywords: [
      "proyectos", "portfolio", "trabajos", "projects",
      "portfolio", "works", "que ha hecho", "built", "creado",
      "created", "desarrollado", "developed", "showcase",
    ],
    patterns: [
      /que\s+proyectos\s+(ha|tiene|hay)/i,
      /muestra(me)?\s+(los?\s+)?proyectos/i,
      /what\s+projects/i,
      /show\s+(me\s+)?(the\s+)?projects/i,
    ],
    suggestedActions: [
      { es: "Ver proyectos", en: "View projects" },
      { es: "Ver portfolio", en: "View portfolio" },
    ],
  },
];

function detectIntent(text: string, locale: string = "es"): DetectedIntent {
  const normalizedText = text.toLowerCase().trim();

  let bestMatch: DetectedIntent = {
    type: "general",
    confidence: 0,
    suggestedActions: [],
  };

  for (const pattern of INTENT_PATTERNS) {
    let score = 0;

    for (const keyword of pattern.keywords) {
      if (normalizedText.includes(keyword.toLowerCase())) {
        score += 0.3;
      }
    }

    for (const regex of pattern.patterns) {
      if (regex.test(normalizedText)) {
        score += 0.5;
      }
    }

    score = Math.min(score, 1);

    if (score > bestMatch.confidence) {
      bestMatch = {
        type: pattern.type,
        confidence: score,
        suggestedActions: pattern.suggestedActions.map((a) =>
          locale.startsWith("es") ? a.es : a.en
        ),
      };
    }
  }

  if (bestMatch.confidence < 0.2) {
    return {
      type: "general",
      confidence: 0,
      suggestedActions: [],
    };
  }

  return bestMatch;
}

export function useIntentDetection() {
  return useMemo(() => ({ detectIntent }), []);
}
