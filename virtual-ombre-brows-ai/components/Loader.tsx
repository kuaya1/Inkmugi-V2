import React from 'react';

export const Loader: React.FC = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-12 h-12 border-4 border-[#F5E9E8] border-t-[#D8AFA8] rounded-full animate-spin"></div>
        </div>
    );
};