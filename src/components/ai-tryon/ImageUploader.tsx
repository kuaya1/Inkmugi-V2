import React, { useRef } from 'react';
import { UploadIcon } from './icons';

interface ImageUploaderProps {
    onImageUpload: (file: File) => void;
    imagePreviewUrl: string | null;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, imagePreviewUrl }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            onImageUpload(file);
        }
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        const file = event.dataTransfer.files?.[0];
        if (file && file.type.startsWith('image/')) {
            onImageUpload(file);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div 
            className="w-full border-2 border-dashed border-gray-200 rounded-xl p-6 text-center cursor-pointer hover:border-[#D8AFA8] transition-colors duration-300 bg-gray-50/50"
            onClick={handleClick}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/png, image/jpeg, image/webp"
                className="hidden"
            />
            {imagePreviewUrl ? (
                <div className="relative group">
                    <img src={imagePreviewUrl} alt="User upload preview" className="max-h-72 mx-auto rounded-lg shadow-md" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                        <p className="text-white text-lg font-semibold">Change Photo</p>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center text-gray-500 py-8">
                    <UploadIcon className="w-12 h-12 mb-3 text-gray-400" />
                    <p className="font-semibold text-gray-700">Click to upload or drag and drop</p>
                    <p className="text-sm mt-1">PNG, JPG, or WEBP</p>
                </div>
            )}
        </div>
    );
};
