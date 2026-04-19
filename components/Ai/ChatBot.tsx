"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Send,
  Bot,
  User,
  Loader2,
  X,
  MessageCircle,
  Trash2,
  Plus,
  Zap,
} from "lucide-react";
import { useChatMemory, MemoryMessage } from "@/hooks/useChatMemory";
import { useIntentDetection, IntentType, DetectedIntent } from "@/hooks/useIntentDetection";
import { useRouter } from "next/router";

const API_BASE = "https://jorge-server.llampukaq.workers.dev/ia";

const INTENT_LABELS: Record<IntentType, { es: string; en: string; color: string }> = {
  contact: { es: "Contacto", en: "Contact", color: "bg-green-500/20 text-green-400 border-green-500/30" },
  email: { es: "Email", en: "Email", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  hire: { es: "Contratar", en: "Hire", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
  skills: { es: "Skills", en: "Skills", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  experience: { es: "Experiencia", en: "Experience", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  projects: { es: "Proyectos", en: "Projects", color: "bg-pink-500/20 text-pink-400 border-pink-500/30" },
  general: { es: "General", en: "General", color: "bg-gray-500/20 text-gray-400 border-gray-500/30" },
};

export default function ChatBot() {
  const router = useRouter();
  const locale = router.locale || "es";
  const isSpanish = locale.startsWith("es");
  const { detectIntent } = useIntentDetection();

  const {
    messages,
    saveMessage,
    currentSessionId,
    sessions,
    createNewSession,
    switchSession,
    clearHistory,
    deleteSession,
  } = useChatMemory();

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [detectedIntent, setDetectedIntent] = useState<DetectedIntent | null>(null);
  const [showSessions, setShowSessions] = useState(false);
  const [streamingContent, setStreamingContent] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!currentSessionId) {
      createNewSession();
    }
  }, [currentSessionId, createNewSession]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingContent]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const generateId = () =>
    Date.now().toString(36) + Math.random().toString(36).substring(2, 9);

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || isLoading || !currentSessionId) return;

      const intent = detectIntent(content, locale);
      setDetectedIntent(intent);

      const userMessage: MemoryMessage = {
        id: generateId(),
        role: "user",
        content: content.trim(),
        timestamp: Date.now(),
      };

      saveMessage(userMessage);
      setInput("");
      setIsLoading(true);
      setError(null);
      setStreamingContent("");

      const assistantId = generateId();

      try {
        abortRef.current = new AbortController();

        const response = await fetch(`${API_BASE}/chat/memory`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId: currentSessionId,
            message: content.trim(),
            intent: { type: intent.type, confidence: intent.confidence },
          }),
          signal: abortRef.current.signal,
        });

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.error || `Error: ${response.status}`);
        }

        // Read text stream (toTextStreamResponse sends raw text)
        const reader = response.body?.getReader();
        if (!reader) throw new Error("No stream available");

        const decoder = new TextDecoder();
        let fullText = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          fullText += decoder.decode(value, { stream: true });
          // Remove closed <think...</think blocks, then if there's an unclosed <think, hide everything from it
          let cleaned = fullText.replace(/<think[\s\S]*?<\/think>/g, "");
          if (/<think[\s\S]*$/.test(cleaned) && !/<\/think/.test(cleaned.slice(cleaned.lastIndexOf("<think")))) {
            cleaned = cleaned.slice(0, cleaned.lastIndexOf("<think"));
          }
          setStreamingContent(cleaned.trim());
        }

        let finalCleaned = fullText.replace(/<think[\s\S]*?<\/think>/g, "").trim();
        const assistantMessage: MemoryMessage = {
          id: assistantId,
          role: "assistant",
          content: finalCleaned || "Sin respuesta del asistente.",
          timestamp: Date.now(),
        };

        setStreamingContent("");
        saveMessage(assistantMessage);
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        setStreamingContent("");
        setError(
          err instanceof Error ? err.message : isSpanish ? "Error desconocido" : "Unknown error"
        );
      } finally {
        setIsLoading(false);
        abortRef.current = null;
      }
    },
    [isLoading, currentSessionId, saveMessage, detectIntent, locale, isSpanish]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const handleQuickAction = (action: string) => {
    const actionMessages: Record<string, { es: string; en: string }> = {
      "Ver contacto": { es: "Como puedo contactar a Jorge?", en: "How can I contact Jorge?" },
      "Enviar email": { es: "Cual es el email de Jorge?", en: "What is Jorge's email?" },
      "Ver skills": { es: "Que tecnologias maneja Jorge?", en: "What technologies does Jorge know?" },
      "Ver proyectos": { es: "Que proyectos ha hecho Jorge?", en: "What projects has Jorge built?" },
      "Ver experiencia": { es: "Cuentame de la experiencia de Jorge", en: "Tell me about Jorge's experience" },
      "Contactar": { es: "Quiero contratar a Jorge", en: "I want to hire Jorge" },
      "Ver trayectoria": { es: "Cuentame de la trayectoria profesional de Jorge", en: "Tell me about Jorge's career" },
      "Ver LinkedIn": { es: "Como puedo ver el LinkedIn de Jorge?", en: "How can I see Jorge's LinkedIn?" },
      "Ver portfolio": { es: "Donde puedo ver los proyectos de Jorge?", en: "Where can I see Jorge's projects?" },
      "Ver email": { es: "Cual es el correo de Jorge?", en: "What is Jorge's email?" },
      "Ir a contacto": { es: "Quiero enviar un mensaje a Jorge", en: "I want to send a message to Jorge" },
    };
    const msg = actionMessages[action];
    if (msg) {
      sendMessage(isSpanish ? msg.es : msg.en);
    }
  };

  const quickStartActions = isSpanish
    ? ["Que tecnologias sabe?", "Como lo contacto?", "Que experiencia tiene?"]
    : ["What's his tech stack?", "How to contact him?", "What's his experience?"];

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-50 bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg transition-all hover:scale-105 group"
        aria-label="Abrir chat"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900 text-gray-100 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-700">
          {isSpanish ? "Chatea conmigo" : "Chat with me"}
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 w-80 sm:w-96 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl flex flex-col max-h-[550px]">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <Bot className="h-4 w-4 text-blue-400" />
          <h3 className="text-sm font-semibold text-gray-100">
            {isSpanish ? "Asistente de Jorge" : "Jorge's Assistant"}
          </h3>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setShowSessions(!showSessions)}
            className="text-gray-400 hover:text-gray-200 p-1 transition-colors"
            title={isSpanish ? "Sesiones" : "Sessions"}
          >
            <MessageCircle className="h-4 w-4" />
          </button>
          <button
            onClick={clearHistory}
            className="text-gray-400 hover:text-red-400 p-1 transition-colors"
            title={isSpanish ? "Limpiar historial" : "Clear history"}
          >
            <Trash2 className="h-4 w-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-200 p-1 transition-colors"
            aria-label="Cerrar chat"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Session list */}
      {showSessions && (
        <div className="border-b border-gray-700 max-h-32 overflow-y-auto">
          <div className="p-2">
            <button
              onClick={() => {
                createNewSession();
                setShowSessions(false);
              }}
              className="flex items-center gap-2 w-full text-left text-xs text-gray-300 hover:text-white hover:bg-gray-800 p-2 rounded transition-colors"
            >
              <Plus className="h-3 w-3" />
              {isSpanish ? "Nueva sesion" : "New session"}
            </button>
            {sessions.map((s) => (
              <div
                key={s.id}
                className={`flex items-center justify-between text-xs p-2 rounded cursor-pointer transition-colors ${
                  s.id === currentSessionId
                    ? "bg-blue-600/20 text-blue-300"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                <span
                  className="truncate flex-1"
                  onClick={() => {
                    switchSession(s.id);
                    setShowSessions(false);
                  }}
                >
                  {s.title}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteSession(s.id);
                  }}
                  className="text-gray-500 hover:text-red-400 ml-2"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Intent indicator */}
      {detectedIntent && detectedIntent.type !== "general" && (
        <div className="px-3 py-1.5 border-b border-gray-700/50 flex items-center gap-2">
          <Zap className="h-3 w-3 text-yellow-400" />
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full border ${
              INTENT_LABELS[detectedIntent.type]?.color || INTENT_LABELS.general.color
            }`}
          >
            {INTENT_LABELS[detectedIntent.type]?.[isSpanish ? "es" : "en"] ||
              detectedIntent.type}
          </span>
          {detectedIntent.suggestedActions.length > 0 && (
            <div className="flex gap-1 ml-auto">
              {detectedIntent.suggestedActions.slice(0, 2).map((action) => (
                <button
                  key={action}
                  onClick={() => handleQuickAction(action)}
                  className="text-[10px] text-blue-400 hover:text-blue-300 underline"
                >
                  {action}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[250px]">
        {messages.length === 0 && !streamingContent && (
          <div className="text-center text-gray-400 text-sm py-6">
            <Bot className="h-10 w-10 mx-auto mb-3 text-gray-600" />
            <p className="font-medium">
              {isSpanish
                ? "Hola! Soy el asistente de Jorge Ortega."
                : "Hi! I'm Jorge Ortega's assistant."}
            </p>
            <p className="mt-1 text-gray-500 text-xs">
              {isSpanish
                ? "Puedo contarte sobre su experiencia, habilidades o ayudarte a contactarlo."
                : "I can tell you about his experience, skills, or help you contact him."}
            </p>
            <div className="flex flex-wrap gap-2 justify-center mt-3">
              {quickStartActions.map((action) => (
                <button
                  key={action}
                  onClick={() => sendMessage(action)}
                  className="text-xs px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-full text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-2 ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {message.role === "assistant" && (
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center">
                <Bot className="h-3.5 w-3.5 text-white" />
              </div>
            )}

            <div
              className={`max-w-[78%] rounded-lg px-3 py-2 ${
                message.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-100"
              }`}
            >
              <p className="text-xs leading-relaxed whitespace-pre-wrap">{message.content}</p>
            </div>

            {message.role === "user" && (
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center">
                <User className="h-3.5 w-3.5 text-gray-300" />
              </div>
            )}
          </div>
        ))}

        {/* Streaming message */}
        {streamingContent && (
          <div className="flex gap-2 justify-start">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center">
              <Bot className="h-3.5 w-3.5 text-white" />
            </div>
            <div className="max-w-[78%] bg-gray-800 text-gray-100 rounded-lg px-3 py-2">
              <p className="text-xs leading-relaxed whitespace-pre-wrap">{streamingContent}</p>
            </div>
          </div>
        )}

        {/* Loading dots (only when no streaming content yet) */}
        {isLoading && !streamingContent && (
          <div className="flex gap-2 justify-start">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center">
              <Bot className="h-3.5 w-3.5 text-white" />
            </div>
            <div className="bg-gray-800 rounded-lg px-3 py-2">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-900/50 border border-red-700 rounded-lg p-2 text-xs text-red-200">
            {error}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-3 border-t border-gray-700">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={isSpanish ? "Escribe tu mensaje..." : "Type your message..."}
            className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Enviar mensaje"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
