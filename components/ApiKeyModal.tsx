import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Key } from "lucide-react";
import { Button } from "./ui/Button";

interface ApiKeyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onApiKeySaved: () => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ 
  open, 
  onOpenChange, 
  onApiKeySaved 
}) => {
  const [apiKey, setApiKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    if (!apiKey.trim()) return;
    
    setIsLoading(true);
    try {
      localStorage.setItem('gemini_api_key', apiKey.trim());
      onApiKeySaved();
      onOpenChange(false);
    } catch (error) {
      console.error('Error saving API key:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 border border-gray-700 rounded-lg p-6 w-full max-w-md z-50">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-lg font-semibold text-gray-100 flex items-center">
              <Key className="h-5 w-5 mr-2 text-yellow-400" />
              Configurar API Key de Gemini
            </Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <X className="h-4 w-4" />
              </Button>
            </Dialog.Close>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-300">
                Para usar PixJorge Editor, necesitas proporcionar tu API key de Google Gemini.
              </p>
              <p className="text-xs text-gray-400">
                Puedes obtener tu API key en{" "}
                <a 
                  href="https://ai.google.dev/gemini-api/docs/api-key" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 underline"
                >
                  Google AI Studio
                </a>
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="apiKey" className="text-sm font-medium text-gray-200">
                API Key
              </label>
              <input
                id="apiKey"
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ingresa tu API key de Gemini..."
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                autoFocus
              />
            </div>

            <div className="flex justify-end space-x-2 pt-2">
              <Button
                variant="ghost"
                onClick={() => onOpenChange(false)}
                disabled={isLoading}
              >
                Cancelar
              </Button>
              <Button
                onClick={handleSave}
                disabled={!apiKey.trim() || isLoading}
                className="bg-yellow-600 hover:bg-yellow-500 text-white"
              >
                {isLoading ? "Guardando..." : "Guardar"}
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};