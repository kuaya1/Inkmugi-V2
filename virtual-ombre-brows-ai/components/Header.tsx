import React from 'react';
import { SparklesIcon } from './icons';

export const Header: React.FC = () => {
    return (
        <header className="text-center">
            <div className="inline-flex items-center justify-center bg-[#F5E9E8] text-[#D8AFA8] p-3 rounded-full mb-4">
                <SparklesIcon className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Virtual Ombre Powder Brows
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Try on your perfect brows before you book. Upload a clear, front-facing photo to start.
            </p>
        </header>
    );
};