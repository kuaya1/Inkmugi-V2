import React from 'react';

type IconProps = {
  className?: string;
};

export const SparklesIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
    <path d="M22 2L20 6" />
    <path d="M2 22L6 20" />
  </svg>
);

export const UploadIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

export const MagicWandIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M12.5 2.5a1.5 1.5 0 0 0-3 0m.43 3.53a1.5 1.5 0 0 0-2.12 0l-5.66 5.66a1.5 1.5 0 0 0 0 2.12l5.66 5.66a1.5 1.5 0 0 0 2.12 0l5.66-5.66a1.5 1.5 0 0 0 0-2.12z"/>
        <path d="M18 12h2"/>
        <path d="M22 8.5v-2h-2"/>
        <path d="M16 2l-2 2"/>
    </svg>
);

export const FaceIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <path d="M9 9h.01"/>
        <path d="M15 9h.01"/>
    </svg>
);
