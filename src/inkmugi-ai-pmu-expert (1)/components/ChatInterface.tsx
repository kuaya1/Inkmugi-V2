import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChatMessage, MessageRole } from '../types';
import { getChatResponseStream } from '../services/geminiService';
import Message from './Message';
import { GenerateContentResponse } from '@google/genai';

const QuickResponses = ({ onSelect }: { onSelect: (text: string) => void }) => {
    const prompts = [
        "What is Ombre Powder Brows?",
        "Tell me about pre-care.",
        "Is it painful?",
        "Compare Ombre vs Microblading."
    ];

    return (
        <div className="flex flex-wrap gap-2 justify-center px-4 py-2">
            {prompts.map(prompt => (
                <button
                    key={prompt}
                    onClick={() => onSelect(prompt)}
                    className="px-3 py-1.5 bg-white border border-[#EBE3DD] text-[#4F4A45] text-sm rounded-full hover:bg-[#F9F7F5] hover:border-[#D3C5BC] transition-colors duration-200"
                >
                    {prompt}
                </button>
            ))}
        </div>
    );
};


const ChatInterface: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: MessageRole.MODEL, text: "Welcome to InkMugi! I'm your personal AI expert for Permanent Makeup. How can I assist you today?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = useCallback(async (messageText: string) => {
        if (!messageText.trim() || isLoading) return;

        const userMessage: ChatMessage = { role: MessageRole.USER, text: messageText };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        // Add a placeholder for the model's response
        setMessages(prev => [...prev, { role: MessageRole.MODEL, text: "" }]);

        try {
            const stream = await getChatResponseStream(messageText);
            
            for await (const chunk of stream) {
                const chunkText = chunk.text;
                setMessages(prev => {
                    const lastMessage = prev[prev.length - 1];
                    if (lastMessage.role === MessageRole.MODEL) {
                        const updatedMessages = [...prev];
                        updatedMessages[prev.length - 1] = { ...lastMessage, text: lastMessage.text + chunkText };
                        return updatedMessages;
                    }
                    return prev;
                });
            }
        } catch (error) {
            console.error(error);
            setMessages(prev => {
                const updatedMessages = [...prev];
                updatedMessages[prev.length-1] = { role: MessageRole.MODEL, text: "I'm sorry, I encountered an issue. Please try again." };
                return updatedMessages;
            });
        } finally {
            setIsLoading(false);
        }
    }, [isLoading]);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSend(input);
    }

    const handleQuickResponse = (text: string) => {
        setInput(text);
        handleSend(text);
    }

    return (
        <div className="flex flex-col h-full w-full">
            <div ref={chatContainerRef} className="flex-grow p-6 overflow-y-auto space-y-6 bg-[#F9F7F5]/50">
                {messages.map((msg, index) => (
                    <Message key={index} message={msg} />
                ))}
                 {isLoading && messages[messages.length-1].role === MessageRole.MODEL && messages[messages.length-1].text === "" && (
                    <div className="flex justify-start">
                         <div className="flex items-center space-x-2">
                           <div className="w-2 h-2 bg-[#D3C5BC] rounded-full animate-pulse delay-0"></div>
                           <div className="w-2 h-2 bg-[#D3C5BC] rounded-full animate-pulse delay-150"></div>
                           <div className="w-2 h-2 bg-[#D3C5BC] rounded-full animate-pulse delay-300"></div>
                        </div>
                    </div>
                )}
            </div>
            <div className="border-t border-[#EBE3DD] p-4 bg-white/70">
                 {!isLoading && messages.length <= 1 && <QuickResponses onSelect={handleQuickResponse} />}
                <form onSubmit={handleSubmit} className="flex items-center space-x-3">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about our PMU services..."
                        disabled={isLoading}
                        className="w-full bg-white text-[#4F4A45] rounded-lg px-4 py-3 placeholder-[#8A817C] focus:outline-none focus:ring-2 focus:ring-[#D3C5BC] border border-[#EBE3DD] disabled:opacity-50 transition-shadow"
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="bg-[#4F4A45] text-white font-bold rounded-lg px-5 py-3 hover:bg-[#6b625c] disabled:bg-[#D3C5BC] disabled:cursor-not-allowed transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                          <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatInterface;