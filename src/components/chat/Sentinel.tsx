"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Send, Minimize2 } from "lucide-react";

type Message = {
    role: "agent" | "user";
    content: string;
};

export default function Sentinel() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [hasInitialized, setHasInitialized] = useState(false);
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Initialize chat with greeting ONCE when first opened
    useEffect(() => {
        if (isOpen && !hasInitialized) {
            setHasInitialized(true);
            // Add initial greeting directly without API call
            setMessages([{ role: "agent", content: "Hi! I'm WhizAI, your WhizCrow assistant. How can I help you today?" }]);
        }
    }, [isOpen, hasInitialized]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: "user", content: userMsg }]);
        setInput("");
        setIsTyping(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMsg, history: messages })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.reply) {
                setMessages(prev => [...prev, { role: "agent", content: data.reply }]);
            } else {
                setMessages(prev => [...prev, { role: "agent", content: "I'm having trouble connecting. Please try again." }]);
            }

        } catch (error) {
            setMessages(prev => [...prev, { role: "agent", content: "Connection error. Please refresh and try again." }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans flex flex-col items-end gap-3">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="w-[350px] md:w-[400px] h-[500px] bg-onyx/95 backdrop-blur-md border border-primary/30 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/10"
                    >
                        {/* Header */}
                        <div className="bg-onyx-light p-6 border-b border-white/10 flex items-center justify-between shadow-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#98e600]" />
                                <span className="text-white font-sans font-bold text-sm">WhizAI Assistant</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-stone-400 hover:text-white transition-colors"
                                aria-label="Minimize Chat"
                            >
                                <Minimize2 size={16} />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 p-6 overflow-y-auto space-y-4 font-mono text-sm scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div
                                        className={`max-w-[85%] p-4 rounded-2xl shadow-sm ${msg.role === "user"
                                            ? "bg-primary/10 text-primary border border-primary/20"
                                            : "bg-white/5 text-stone-300 border border-white/5"
                                            }`}
                                    >
                                        <p className="leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex gap-1 items-center h-10">
                                        <span className="w-1.5 h-1.5 bg-stone-500 rounded-full animate-bounce" />
                                        <span className="w-1.5 h-1.5 bg-stone-500 rounded-full animate-bounce delay-75" />
                                        <span className="w-1.5 h-1.5 bg-stone-500 rounded-full animate-bounce delay-150" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-6 bg-onyx text-white border-t border-white/10">
                            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 focus-within:border-primary/50 transition-colors">
                                <input
                                    type="text"
                                    id="chat-input"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Ask WhizAI about your reputation..."
                                    className="flex-1 bg-transparent text-white text-sm focus:outline-none placeholder:text-stone-500"
                                    aria-label="Chat input"
                                />
                                <button
                                    onClick={handleSend}
                                    className="text-primary hover:text-white transition-colors"
                                    aria-label="Send message"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {!isOpen && (
                <div className="relative group">
                    {/* Pulsating Tooltip */}
                    <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-onyx px-3 py-1.5 rounded-lg shadow-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        Chat with WhizAI
                        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45" />
                    </div>

                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(true)}
                        className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(152,230,0,0.5)] hover:shadow-[0_0_40px_rgba(152,230,0,0.7)] transition-shadow relative"
                        aria-label="Open Chat with WhizAI"
                    >
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-50 duration-[3s]" />
                        <Terminal size={28} className="text-white relative z-10" />
                        <div className="absolute top-0 right-0 w-4 h-4 bg-orange-500 rounded-full border-2 border-onyx animate-bounce" />
                    </motion.button>
                </div>
            )}
        </div>
    );
}
