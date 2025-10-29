import React from 'react';
import { AppView } from '../types';

interface HeaderProps {
    currentView: AppView;
    setCurrentView: (view: AppView) => void;
}

const NavButton: React.FC<{
  label: string;
  view: AppView;
  currentView: AppView;
  onClick: (view: AppView) => void;
}> = ({ label, view, currentView, onClick }) => {
  const isActive = view === currentView;
  return (
    <button
      onClick={() => onClick(view)}
      className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
        isActive
          ? 'bg-[#4F4A45] text-white'
          : 'bg-transparent text-[#4F4A45] hover:bg-[#EBE3DD]'
      }`}
    >
      {label}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView }) => {
  return (
    <header className="w-full p-4 border-b border-[#EBE3DD] bg-[#F9F7F5]/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-[#4F4A45]"
          >
            <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.032z" />
          </svg>
          <h1 className="text-xl font-bold text-[#4F4A45] tracking-tight font-serif">
            InkMugi <span className="text-[#8A817C] font-sans font-normal">AI Expert</span>
          </h1>
        </div>
        <nav className="flex items-center bg-[#F9F7F5] rounded-lg p-1 space-x-1">
            <NavButton label="AI Chat" view={AppView.CHAT} currentView={currentView} onClick={setCurrentView} />
            <NavButton label="PMU Quiz" view={AppView.QUIZ} currentView={currentView} onClick={setCurrentView} />
            <NavButton label="Virtual Try-On" view={AppView.VIRTUAL_TRY_ON} currentView={currentView} onClick={setCurrentView} />
        </nav>
      </div>
    </header>
  );
};

export default Header;