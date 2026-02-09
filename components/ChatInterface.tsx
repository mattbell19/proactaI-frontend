
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Mic, Paperclip, MoreVertical, ShieldCheck } from 'lucide-react';
import { LindyAgent, Message } from '../types';
import { chatWithLindy } from '../services/geminiService';

interface ChatInterfaceProps {
  agent: LindyAgent;
  messages: Message[];
  onSendMessage: (agentId: string, content: string, role: 'user' | 'model') => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ agent, messages, onSendMessage }) => {
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    onSendMessage(agent.id, userMessage, 'user');

    setIsTyping(true);
    try {
      const history = messages.map(m => ({ role: m.role, content: m.content }));
      const response = await chatWithLindy(agent.systemInstruction, history, userMessage);
      onSendMessage(agent.id, response || "I encountered a processing error.", 'model');
    } catch (error) {
      console.error(error);
      onSendMessage(agent.id, "Connection interrupted.", 'model');
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-10rem)] bg-[#0d0d0d] rounded-3xl border border-white/5 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
      {/* Header */}
      <header className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-black/40 backdrop-blur-md z-10">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden border border-white/10">
            <img src={agent.avatar} alt={agent.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-white leading-tight">{agent.name}</h3>
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{agent.role}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="hidden md:flex items-center space-x-1.5 px-3 py-1 bg-white/5 text-zinc-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/5">
            <ShieldCheck size={12} />
            <span>Encrypted</span>
          </div>
          <button className="p-2 hover:bg-white/5 rounded-xl text-zinc-500">
            <MoreVertical size={20} />
          </button>
        </div>
      </header>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 bg-black/20">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center max-w-sm mx-auto space-y-6">
            <div className="w-20 h-20 bg-indigo-600/10 rounded-3xl flex items-center justify-center border border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.1)]">
              <Sparkles className="text-indigo-400" size={32} />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-white">Initialize {agent.name}</h4>
              <p className="text-zinc-500 text-sm">
                Describe the task you want {agent.name} to perform. You can speak naturally or use commands.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {["Run prospecting report", "Schedule sync", "Draft email"].map(hint => (
                <button
                  key={hint}
                  onClick={() => setInput(hint)}
                  className="text-[11px] font-bold uppercase tracking-wider px-4 py-2 bg-white/5 border border-white/5 rounded-full hover:bg-white hover:text-black transition-all"
                >
                  {hint}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[75%] flex ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end gap-3`}>
              <div className={`p-5 rounded-3xl ${msg.role === 'user'
                  ? 'bg-indigo-600 text-white rounded-br-none shadow-[0_4px_15px_rgba(99,102,241,0.2)]'
                  : 'bg-zinc-900 border border-white/5 text-zinc-100 rounded-bl-none shadow-xl'
                }`}>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                <div className={`text-[9px] mt-3 font-bold opacity-40 uppercase tracking-widest ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-zinc-900 border border-white/5 p-4 rounded-2xl rounded-bl-none shadow-xl flex space-x-1.5">
              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <footer className="p-6 bg-black/40 border-t border-white/5 backdrop-blur-md">
        <form onSubmit={handleSubmit} className="relative flex items-end gap-3">
          <div className="flex-1 bg-white/5 border border-white/5 rounded-2xl p-1 focus-within:ring-1 focus-within:ring-white/20 transition-all">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              placeholder={`Communicate with ${agent.name}...`}
              className="w-full bg-transparent border-none focus:ring-0 text-sm p-4 max-h-32 min-h-[56px] resize-none text-white placeholder-zinc-600"
              rows={1}
            />
            <div className="flex items-center justify-between px-3 pb-2 text-zinc-600">
              <div className="flex space-x-1">
                <button type="button" className="p-2 hover:bg-white/5 hover:text-white rounded-xl transition-colors">
                  <Paperclip size={18} />
                </button>
                <button type="button" className="p-2 hover:bg-white/5 hover:text-white rounded-xl transition-colors">
                  <Mic size={18} />
                </button>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">Auxio Secure Mode</span>
            </div>
          </div>
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className={`p-4 rounded-2xl transition-all shadow-xl ${input.trim() && !isTyping
                ? 'bg-white text-black hover:scale-105 active:scale-95'
                : 'bg-zinc-900 text-zinc-700 cursor-not-allowed'
              }`}
          >
            <Send size={22} />
          </button>
        </form>
      </footer>
    </div>
  );
};

export default ChatInterface;
