import React from 'react';
import { MagicWandIcon, FaceIcon, SparklesIcon } from './icons';

interface ControlPanelProps {
    prompt: string;
    setPrompt: (prompt: string) => void;
    onEdit: () => void;
    isEditing: boolean;
    onAnalyze: () => void;
    isAnalyzing: boolean;
    analysisResult: string | null;
}

const stylePresets = [
    { 
        name: "Natural Look", 
        description: "Softly enhances your natural features." 
    },
    { 
        name: "Bold Arch", 
        description: "A dramatic, high-arch statement look." 
    },
    { 
        name: "Soft Gradient", 
        description: "A delicate and blended color transition." 
    },
    { 
        name: "Defined Shape", 
        description: "Clean, crisp edges for a polished finish." 
    },
    { 
        name: "Classic Ombre", 
        description: "A defined tail with a soft, faded front." 
    },
];

const fullPrompts: { [key: string]: string } = {
    "Natural Look": "Give me very natural-looking ombre powder brows that softly enhance my features.",
    "Bold Arch": "Create a bold, high-arch ombre powder brow look for me.",
    "Soft Gradient": "Create a soft, blended ombre powder brow with a delicate and natural-looking gradient. Ensure the color transitions gradually from light at the front to a slightly darker tail, avoiding any harsh lines.",
    "Defined Shape": "Give me sharply defined ombre powder brows with clear, crisp edges for a clean, polished look.",
    "Classic Ombre": "Create classic ombre powder brows with a defined lower line, a soft powdered finish, and a crisp, tapered tail. The brows should have a gentle gradient, fading from light at the front to a richer color at the tail."
}

export const ControlPanel: React.FC<ControlPanelProps> = ({ 
    prompt, setPrompt, onEdit, isEditing, onAnalyze, isAnalyzing, analysisResult 
}) => {
    
    const renderAnalysisResult = () => {
        if (!analysisResult) return null;
        
        const parts = analysisResult.split('###').filter(p => p.trim() !== '');

        return (
             <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200 space-y-3">
                {parts.map((part, index) => {
                    const [title, ...content] = part.trim().split('\n');
                    return (
                        <div key={index}>
                            <h4 className="font-semibold text-gray-800">{title}</h4>
                            <p className="text-gray-600 whitespace-pre-wrap">{content.join('\n').trim()}</p>
                        </div>
                    )
                })}
            </div>
        )
    };
    
    return (
        <div className="mt-6 space-y-6">
            {/* Virtual Try-On Section */}
            <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="flex items-center mb-4">
                    <MagicWandIcon className="w-6 h-6 mr-3 text-gray-600" />
                    <h3 className="text-lg font-semibold text-gray-800">Virtual Try-On</h3>
                </div>
                
                <div className="mb-4">
                    <h4 className="text-md font-semibold text-gray-700 mb-3">Choose a Style Preset</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {stylePresets.map(preset => (
                            <button
                                key={preset.name}
                                onClick={() => setPrompt(fullPrompts[preset.name])}
                                className="p-3 text-left bg-white border border-gray-200 rounded-lg hover:border-[#D8AFA8] hover:bg-[#F5E9E8]/50 focus:outline-none focus:ring-2 focus:ring-[#D8AFA8] transition-colors duration-200"
                            >
                                <p className="font-semibold text-gray-800 text-sm">{preset.name}</p>
                                <p className="text-xs text-gray-500 mt-1">{preset.description}</p>
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-md font-semibold text-gray-700 mb-2">Or describe your own look</h4>
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="e.g., Give me natural-looking ombre powder brows."
                        className="w-full p-2 bg-white text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D8AFA8] focus:border-[#D8AFA8] transition mb-4 resize-none"
                        rows={3}
                    />
                </div>

                <button
                    onClick={onEdit}
                    disabled={isEditing || isAnalyzing}
                    className="w-full flex items-center justify-center px-4 py-2.5 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                    {isEditing ? 'Generating...' : (
                        <>
                            <MagicWandIcon className="w-5 h-5 mr-2"/>
                            Generate Brows
                        </>
                    )}
                </button>
            </div>

            {/* AI Face Shape Analysis Section */}
            <div className="p-5 bg-[#F5E9E8]/50 border border-[#D8AFA8]/30 rounded-lg">
                 <div className="flex items-center mb-3">
                    <FaceIcon className="w-6 h-6 mr-3 text-[#D8AFA8]" />
                    <h3 className="text-lg font-semibold text-gray-800">AI Face Shape Analysis</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                    Let our AI recommend the perfect brow style to enhance your natural beauty.
                </p>
                 <button
                    onClick={onAnalyze}
                    disabled={isAnalyzing || isEditing}
                    className="w-full flex items-center justify-center px-4 py-2.5 bg-[#D8AFA8] text-white font-semibold rounded-lg shadow-md hover:bg-[#c99f96] focus:outline-none focus:ring-2 focus:ring-[#D8AFA8] focus:ring-opacity-75 disabled:bg-[#e4c7c2] disabled:cursor-not-allowed transition-colors"
                >
                    {isAnalyzing ? 'Analyzing...' : (
                        <>
                            <SparklesIcon className="w-5 h-5 mr-2"/>
                            Analyze My Face Shape
                        </>
                    )}
                </button>
                {renderAnalysisResult()}
            </div>
        </div>
    );
};