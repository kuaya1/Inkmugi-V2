import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { ImageUploader } from './components/ImageUploader';
import { ResultDisplay } from './components/ResultDisplay';
import { ControlPanel } from './components/ControlPanel';
import { Loader } from './components/Loader';
import { fileToBase64 } from './utils/fileUtils';
import { editImage, analyzeFaceShape } from './services/geminiService';

const App: React.FC = () => {
    const [originalImage, setOriginalImage] = useState<File | null>(null);
    const [originalImagePreview, setOriginalImagePreview] = useState<string | null>(null);
    const [editedImage, setEditedImage] = useState<string | null>(null);
    const [prompt, setPrompt] = useState<string>('Give me beautiful, natural-looking ombre powder brows that perfectly suit my face shape.');
    const [faceShapeAnalysis, setFaceShapeAnalysis] = useState<string | null>(null);

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleImageUpload = (file: File) => {
        setOriginalImage(file);
        setEditedImage(null);
        setFaceShapeAnalysis(null);
        setError(null);
        const previewUrl = URL.createObjectURL(file);
        setOriginalImagePreview(previewUrl);
    };

    const handleEditImage = useCallback(async () => {
        if (!originalImage) {
            setError('Please upload an image first.');
            return;
        }

        setIsEditing(true);
        setError(null);
        setEditedImage(null);

        try {
            const { base64, mimeType } = await fileToBase64(originalImage);
            const generatedImage = await editImage(base64, mimeType, prompt);
            setEditedImage(`data:${mimeType};base64,${generatedImage}`);
        } catch (e: unknown) {
            const err = e as Error;
            setError(`Failed to edit image. ${err.message}`);
            console.error(e);
        } finally {
            setIsEditing(false);
        }
    }, [originalImage, prompt]);

    const handleAnalyzeFace = useCallback(async () => {
        if (!originalImage) {
            setError('Please upload an image to analyze your face shape.');
            return;
        }

        setIsAnalyzing(true);
        setError(null);
        setFaceShapeAnalysis(null);

        try {
            const { base64, mimeType } = await fileToBase64(originalImage);
            const analysis = await analyzeFaceShape(base64, mimeType);
            setFaceShapeAnalysis(analysis);
        } catch (e: unknown) {
            const err = e as Error;
            setError(`Failed to analyze face shape. ${err.message}`);
            console.error(e);
        } finally {
            setIsAnalyzing(false);
        }
    }, [originalImage]);

    return (
        <div className="bg-[#F9FAFB] min-h-screen font-sans text-gray-800">
            <main className="container mx-auto px-4 py-10 md:py-16">
                <Header />
                
                <div className="max-w-3xl mx-auto mt-10 p-6 md:p-8 bg-white rounded-2xl shadow-xl shadow-gray-200/50">
                    <ImageUploader onImageUpload={handleImageUpload} imagePreviewUrl={originalImagePreview} />

                    {error && (
                        <div className="mt-6 p-3 bg-red-100 text-red-800 rounded-lg text-center font-medium">
                            {error}
                        </div>
                    )}
                    
                    {originalImage && (
                        <ControlPanel
                            prompt={prompt}
                            setPrompt={setPrompt}
                            onEdit={handleEditImage}
                            isEditing={isEditing}
                            onAnalyze={handleAnalyzeFace}
                            isAnalyzing={isAnalyzing}
                            analysisResult={faceShapeAnalysis}
                        />
                    )}
                </div>

                {isEditing && (
                    <div className="text-center mt-12">
                        <Loader />
                        <p className="mt-4 text-lg text-gray-600 animate-pulse">Crafting your perfect look...</p>
                    </div>
                )}

                {editedImage && originalImagePreview && (
                     <ResultDisplay 
                        originalImage={originalImagePreview}
                        editedImage={editedImage}
                    />
                )}
            </main>
        </div>
    );
};

export default App;