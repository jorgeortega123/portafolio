"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface ChatActionContextType {
  generateBackground: ((prompt: string) => Promise<string | null>) | null;
  scrollToContact: (() => void) | null;
  setGenerateBackground: (fn: (prompt: string) => Promise<string | null>) => void;
  setScrollToContact: (fn: () => void) => void;
}

const ChatActionContext = createContext<ChatActionContextType>({
  generateBackground: null,
  scrollToContact: null,
  setGenerateBackground: () => {},
  setScrollToContact: () => {},
});

export function ChatActionProvider({ children }: { children: ReactNode }) {
  const [generateBackground, setGenerateBackground] = useState<((prompt: string) => Promise<string | null>) | null>(null);
  const [scrollToContact, setScrollToContact] = useState<(() => void) | null>(null);

  const stableSetGenerate = useCallback((fn: (prompt: string) => Promise<string | null>) => setGenerateBackground(() => fn), []);
  const stableSetScroll = useCallback((fn: () => void) => setScrollToContact(() => fn), []);

  return (
    <ChatActionContext.Provider
      value={{
        generateBackground,
        scrollToContact,
        setGenerateBackground: stableSetGenerate,
        setScrollToContact: stableSetScroll,
      }}
    >
      {children}
    </ChatActionContext.Provider>
  );
}

export function useChatAction() {
  return useContext(ChatActionContext);
}
