import React from 'react';

interface ResultDisplayProps {
    originalImage: string;
    editedImage: string;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ originalImage, editedImage }) => {
    return (
        <div className="mt-12 md:mt-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Your Virtual Makeover</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-white p-4 rounded-xl shadow-xl shadow-gray-200/50">
                    <h3 className="text-xl font-semibold text-center mb-4 text-gray-700">Before</h3>
                    <img src={originalImage} alt="Original user" className="w-full h-auto rounded-lg object-contain" />
                </div>
                <div className="bg-[#F5E9E8]/50 p-4 rounded-xl shadow-xl shadow-gray-200/50 border-2 border-[#D8AFA8]">
                    <h3 className="text-xl font-semibold text-center mb-4 text-[#C89F97]">AI-Enhanced</h3>
                    <img src={editedImage} alt="AI Edited" className="w-full h-auto rounded-lg object-contain" />
                </div>
            </div>
        </div>
    );
};