import React, { useState, useCallback } from 'react';
import { AppView } from './types';
import Header from './components/Header';
import ChatInterface from './components/ChatInterface';
import Quiz from './components/Quiz';
import VirtualTryOn from './components/VirtualTryOn';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.CHAT);

  const renderView = useCallback(() => {
    switch (currentView) {
      case AppView.QUIZ:
        return <Quiz />;
      case AppView.VIRTUAL_TRY_ON:
        return <VirtualTryOn />;
      case AppView.CHAT:
      default:
        return <ChatInterface />;
    }
  }, [currentView]);

  return (
    <div className="bg-[#F9F7F5] text-[#4F4A45] min-h-screen flex flex-col antialiased">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      <main className="flex-grow flex flex-col items-center justify-center p-4 w-full">
        <div className="w-full max-w-4xl h-full flex flex-col bg-white rounded-lg border border-[#EBE3DD] shadow-lg shadow-gray-200/40">
            {renderView()}
        </div>
      </main>
      <footer className="text-center p-4 text-xs text-[#8A817C]">
        <p>InkMugi AI PMU Expert &copy; 2024. All information is for demonstrative purposes.</p>
        <p>This is an AI-powered assistant. For official bookings and medical advice, please consult <a href="https://inkmugi.com" target="_blank" rel="noopener noreferrer" className="text-[#4F4A45] font-medium hover:underline">inkmugi.com</a>.</p>
      </footer>
    </div>
  );
};

export default App;