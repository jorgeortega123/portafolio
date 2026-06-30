import { useState, useEffect, useCallback } from "react";

const API_BASE = "https://jorge-server.llampukaq.workers.dev/ia";

export interface MemoryMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: number;
  image?: string;
}

export interface ChatSession {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number;
}

const LOCAL_SESSION_IDS_KEY = "chatbot_session_ids";
const CURRENT_SESSION_KEY = "chatbot_current_session";

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function getLocalSessionIds(): string[] {
  if (!isBrowser()) return [];
  const raw = localStorage.getItem(LOCAL_SESSION_IDS_KEY);
  if (!raw) return [];
  try { return JSON.parse(raw); } catch { return []; }
}

function saveLocalSessionIds(ids: string[]): void {
  if (!isBrowser()) return;
  localStorage.setItem(LOCAL_SESSION_IDS_KEY, JSON.stringify(ids));
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
}

function toMemoryMessages(raw: { role: string; content: string }[]): MemoryMessage[] {
  return raw.map((m, i) => ({
    id: `kv-${i}-${Date.now()}`,
    role: m.role as MemoryMessage["role"],
    content: m.content,
    timestamp: Date.now() - (raw.length - i) * 1000,
  }));
}

export function useChatMemory() {
  const [messages, setMessages] = useState<MemoryMessage[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [initialized, setInitialized] = useState(false);

  // Load sessions from backend on mount
  useEffect(() => {
    if (!isBrowser() || initialized) return;

    const init = async () => {
      const savedCurrent = localStorage.getItem(CURRENT_SESSION_KEY);
      const localIds = getLocalSessionIds();

      if (localIds.length > 0) {
        try {
          const res = await fetch(`${API_BASE}/chat/sessions?ids=${localIds.join(",")}`);
          if (res.ok) {
            const data = await res.json();
            setSessions(data.sessions || []);
          }
        } catch {
          // Backend unreachable, continue with empty sessions
        }
      }

      if (savedCurrent && localIds.includes(savedCurrent)) {
        setCurrentSessionId(savedCurrent);
        try {
          const res = await fetch(`${API_BASE}/chat/sessions/${savedCurrent}`);
          if (res.ok) {
            const data = await res.json();
            setMessages(toMemoryMessages(data.messages || []));
          }
        } catch {
          // Continue with empty messages
        }
      }

      setInitialized(true);
    };

    init();
  }, [initialized]);

  const syncSessionsFromBackend = useCallback(async () => {
    const localIds = getLocalSessionIds();
    if (localIds.length === 0) {
      setSessions([]);
      return;
    }
    try {
      const res = await fetch(`${API_BASE}/chat/sessions?ids=${localIds.join(",")}`);
      if (res.ok) {
        const data = await res.json();
        setSessions(data.sessions || []);

        // Remove local IDs that no longer exist in KV
        const kvIds = (data.sessions || []).map((s: ChatSession) => s.id);
        const validIds = localIds.filter((id) => kvIds.includes(id));
        saveLocalSessionIds(validIds);
      }
    } catch {
      // Keep local state
    }
  }, []);

  const saveMessage = useCallback(
    (message: MemoryMessage) => {
      setMessages((prev) => [...prev, message]);
    },
    []
  );

  const createNewSession = useCallback(async () => {
    const id = generateId();
    try {
      const res = await fetch(`${API_BASE}/chat/sessions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        const data = await res.json();
        const newSession = data.session as ChatSession;

        const localIds = getLocalSessionIds();
        localIds.unshift(id);
        saveLocalSessionIds(localIds);

        if (isBrowser()) {
          localStorage.setItem(CURRENT_SESSION_KEY, id);
        }
        setCurrentSessionId(id);
        setMessages([]);
        setSessions((prev) => [newSession, ...prev]);
        return id;
      }
    } catch {
      // Fallback: still create locally
    }

    const localIds = getLocalSessionIds();
    localIds.unshift(id);
    saveLocalSessionIds(localIds);
    if (isBrowser()) {
      localStorage.setItem(CURRENT_SESSION_KEY, id);
    }
    setCurrentSessionId(id);
    setMessages([]);
    return id;
  }, []);

  const switchSession = useCallback(async (sessionId: string) => {
    if (isBrowser()) {
      localStorage.setItem(CURRENT_SESSION_KEY, sessionId);
    }
    setCurrentSessionId(sessionId);
    setMessages([]);

    try {
      const res = await fetch(`${API_BASE}/chat/sessions/${sessionId}`);
      if (res.ok) {
        const data = await res.json();
        setMessages(toMemoryMessages(data.messages || []));
      }
    } catch {
      // Keep empty messages
    }
  }, []);

  const clearHistory = useCallback(async () => {
    if (currentSessionId) {
      try {
        await fetch(`${API_BASE}/chat/sessions/${currentSessionId}`, { method: "DELETE" });
      } catch {
        // Continue anyway
      }
      const localIds = getLocalSessionIds().filter((id) => id !== currentSessionId);
      saveLocalSessionIds(localIds);
    }
    setMessages([]);
    await createNewSession();
  }, [currentSessionId, createNewSession]);

  const deleteSession = useCallback(
    async (sessionId: string) => {
      try {
        await fetch(`${API_BASE}/chat/sessions/${sessionId}`, { method: "DELETE" });
      } catch {
        // Continue anyway
      }

      const localIds = getLocalSessionIds().filter((id) => id !== sessionId);
      saveLocalSessionIds(localIds);

      const remaining = sessions.filter((s) => s.id !== sessionId);
      setSessions(remaining);

      if (sessionId === currentSessionId) {
        if (remaining.length > 0) {
          await switchSession(remaining[0].id);
        } else {
          await createNewSession();
        }
      }
    },
    [currentSessionId, sessions, switchSession, createNewSession]
  );

  const refreshSessions = useCallback(async () => {
    await syncSessionsFromBackend();
  }, [syncSessionsFromBackend]);

  return {
    messages,
    saveMessage,
    currentSessionId,
    sessions,
    createNewSession,
    switchSession,
    clearHistory,
    deleteSession,
    refreshSessions,
  };
}
