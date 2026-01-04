
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { sendMessageToGemini, initializeChat } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Rostom's AI assistant. Ask me anything about his skills or projects!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize chat on mount
  useEffect(() => {
    initializeChat();
  }, []);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMessage.text);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, something went wrong." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  // Helper to format text with bold tags and handle newlines
  const renderMessageText = (text: string) => {
    return text.split('\n').map((line, i) => (
      <p key={i} className="min-h-[1em] mb-1 last:mb-0 break-words">
        {line.split(/(\*\*.*?\*\*)/g).map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j} className="text-accent font-semibold">{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
      </p>
    ));
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-sans pointer-events-none">
      {/* Chat Window */}
      {isOpen && (
        <div 
          className="pointer-events-auto mb-4 w-[calc(100vw-2rem)] sm:w-96 bg-secondary/95 backdrop-blur-md border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 animate-in fade-in slide-in-from-bottom-10 origin-bottom-right"
          style={{ 
            height: 'min(600px, 70vh)', // Responsive height: Max 600px, but never more than 70% of viewport
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-accent p-3 sm:p-4 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2 text-white">
              <div className="p-1.5 bg-white/10 rounded-lg">
                <Bot size={20} />
              </div>
              <div className="flex flex-col">
                 <span className="font-bold text-sm leading-tight">Rostom AI</span>
                 <span className="text-[10px] text-white/80 leading-tight">Portfolio Assistant</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-white/10 rounded-full text-white/90 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50 custom-scrollbar scroll-smooth overscroll-contain">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm break-words ${
                    msg.role === 'user' 
                      ? 'bg-accent text-primary rounded-tr-none font-medium' 
                      : 'bg-slate-700/80 border border-slate-600/50 text-slate-100 rounded-tl-none'
                  }`}
                >
                  {renderMessageText(msg.text)}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-700/50 p-4 rounded-2xl rounded-tl-none flex items-center gap-3 border border-slate-700/50">
                  <Loader2 size={16} className="animate-spin text-accent" />
                  <span className="text-xs text-slate-400 font-medium">Processing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-slate-800 border-t border-slate-700 shrink-0">
            <div className="flex gap-2 relative">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about Rostom..."
                className="flex-1 bg-slate-900 border border-slate-700 rounded-xl pl-4 pr-12 py-3 text-sm text-slate-200 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-slate-500"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-1.5 top-1.5 p-1.5 bg-accent text-primary rounded-lg hover:bg-highlight disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-accent/20"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="text-[10px] text-center text-slate-500 mt-2">
              AI can make mistakes. Please verify info.
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto transition-all duration-300 bg-gradient-to-r from-accent to-blue-500 hover:from-highlight hover:to-blue-400 text-primary p-4 rounded-full shadow-xl shadow-accent/20 hover:scale-110 active:scale-95 border-2 border-white/10 ${isOpen ? 'opacity-0 scale-50 pointer-events-none absolute' : 'opacity-100 scale-100'}`}
        aria-label="Open chat"
      >
        <MessageSquare size={26} fill="currentColor" />
      </button>
    </div>
  );
};

export default AIChatBot;
