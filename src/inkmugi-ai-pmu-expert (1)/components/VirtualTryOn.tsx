import React, { useState, useCallback } from 'react';
import { analyzeUserImage, generateSingleBrowStyle } from '../services/geminiService';

const BROW_STYLES = ['Hair Strokes', 'Hybrid Brows', 'Combo Brows', 'Powder Brows'];

const StyleCard: React.FC<{
    style: string;
    imageUrl: string | null;
    isLoading: boolean;
}> = ({ style, imageUrl, isLoading }) => {
    
    const handleDownload = () => {
        if (!imageUrl) return;

        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = imageUrl;

        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            // Add a gradient overlay for text readability
            const gradient = ctx.createLinearGradient(0, canvas.height, 0, canvas.height - 80);
            gradient.addColorStop(0, 'rgba(0, 0, 0, 0.7)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, canvas.height - 80, canvas.width, 80);

            // Style and draw the text
            ctx.fillStyle = 'white';
            const fontSize = Math.max(24, Math.round(canvas.width / 18));
            ctx.font = `bold ${fontSize}px Inter, sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            ctx.shadowColor = 'black';
            ctx.shadowBlur = 6;
            ctx.fillText(style, canvas.width / 2, canvas.height - 15);

            // Trigger download
            const link = document.createElement('a');
            link.download = `inkmugi-${style.toLowerCase().replace(/ /g, '-')}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        };
        
        img.onerror = (err) => {
            console.error("Failed to load image for canvas processing.", err);
        };
    };

    return (
        <div className="relative aspect-square bg-[#F9F7F5]/50 rounded-lg flex flex-col items-center justify-center border border-[#EBE3DD] overflow-hidden">
            {isLoading && !imageUrl && (
                 <div className="flex justify-center items-center space-x-2">
                    <div className="w-2 h-2 bg-[#D3C5BC] rounded-full animate-pulse delay-0"></div>
                    <div className="w-2 h-2 bg-[#D3C5BC] rounded-full animate-pulse delay-150"></div>
                    <div className="w-2 h-2 bg-[#D3C5BC] rounded-full animate-pulse delay-300"></div>
                </div>
            )}
            {imageUrl && <img src={imageUrl} alt={`${style} example`} className="object-cover w-full h-full" />}
            
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/50 to-transparent">
                <p className="text-white text-center font-semibold text-sm drop-shadow-md">{style}</p>
            </div>

            {imageUrl && (
                <button
                    onClick={handleDownload}
                    className="absolute top-2 right-2 bg-white/80 text-[#4F4A45] p-2 rounded-full hover:bg-white transition-all shadow-md"
                    aria-label={`Download ${style} image`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                </button>
            )}
        </div>
    );
};

const VirtualTryOn: React.FC = () => {
    const [image, setImage] = useState<string | null>(null);
    const [resultImages, setResultImages] = useState<Record<string, string | null>>({});
    const [file, setFile] = useState<File | null>(null);
    const [prompt, setPrompt] = useState<string>("Show me how different brow styles would look on me.");
    const [analysis, setAnalysis] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('');
    const [error, setError] = useState<string>('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(selectedFile);
            setAnalysis('');
            setResultImages({});
            setError('');
        }
    };

    const handleSubmit = useCallback(async () => {
        if (!file || !prompt) return;

        setIsLoading(true);
        setAnalysis('');
        setResultImages({});
        setError('');

        try {
            const base64Image = image?.split(',')[1];
            if (!base64Image) {
                throw new Error("Could not read image data.");
            }

            setLoadingMessage("Analyzing facial features...");
            const analysisResult = await analyzeUserImage(base64Image, file.type, prompt);
            setAnalysis(analysisResult);
            
            for (const style of BROW_STYLES) {
                setLoadingMessage(`Generating ${style}...`);
                try {
                    const styleImage = await generateSingleBrowStyle(base64Image, file.type, analysisResult, style);
                    setResultImages(prev => ({ ...prev, [style]: styleImage }));
                } catch (styleErr) {
                    console.error(`Failed to generate ${style}:`, styleErr);
                    setResultImages(prev => ({ ...prev, [style]: null })); // Mark as failed
                }
            }

        } catch (err) {
            setError("Sorry, I couldn't process your request. Please try another image.");
            console.error(err);
        } finally {
            setIsLoading(false);
            setLoadingMessage('');
        }
    }, [file, image, prompt]);

    const handleReset = () => {
        setImage(null);
        setResultImages({});
        setFile(null);
        setAnalysis('');
        setError('');
        const fileInput = document.getElementById('imageUpload') as HTMLInputElement;
        if (fileInput) {
            fileInput.value = '';
        }
    };
    
    const hasResults = Object.keys(resultImages).length > 0;

    return (
        <div className="p-8 flex flex-col h-full overflow-y-auto">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#4F4A45] font-serif">Brow Style Visualizer</h2>
                <p className="text-[#8A817C] mt-2 max-w-2xl mx-auto">Upload a clear photo to see a realistic simulation of different PMU brow styles, personalized for you.</p>
            </div>
            
            {hasResults && image ? (
                // Results View
                <div className="flex flex-col gap-8 flex-grow">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="flex flex-col items-center">
                            <p className="text-lg font-semibold mb-3 text-[#8A817C]">Your Photo (Before)</p>
                            <img src={image} alt="User upload" className="object-contain w-full max-w-md h-auto rounded-lg border border-[#EBE3DD]" />
                        </div>
                         <div className="bg-[#F9F7F5]/50 rounded-lg p-6 border border-[#EBE3DD] self-start">
                            <h3 className="text-lg font-semibold mb-4 text-[#4F4A45]">AI Analysis:</h3>
                            <div className="max-h-80 overflow-y-auto text-[#4F4A45] space-y-4">
                                <p className="whitespace-pre-wrap">{analysis}</p>
                            </div>
                        </div>
                    </div>
                    <hr className="border-[#EBE3DD]"/>
                     <div className="text-center flex flex-col items-center">
                        <h3 className="text-lg font-semibold mb-4 text-[#4F4A45]">Your Personalized Brow Styles</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
                            {BROW_STYLES.map(style => (
                                <StyleCard 
                                    key={style}
                                    style={style}
                                    imageUrl={resultImages[style]}
                                    isLoading={isLoading}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center pt-4">
                        <button
                            onClick={handleReset}
                            className="w-full max-w-xs px-6 py-4 bg-[#4F4A45] text-white font-bold rounded-lg hover:bg-[#6b625c] transition-colors"
                        >
                            Start Over With A New Photo
                        </button>
                    </div>
                </div>
            ) : (
                 // Upload View
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
                    <div className="flex flex-col space-y-4">
                        <div className="aspect-square bg-[#F9F7F5]/50 rounded-lg flex items-center justify-center border-2 border-dashed border-[#D3C5BC]">
                            {image ? (
                                <img src={image} alt="User upload" className="object-cover w-full h-full rounded-lg" />
                            ) : (
                                <div className="text-center text-[#D3C5BC]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    <p className="mt-2 text-[#8A817C]">Your photo will appear here</p>
                                </div>
                            )}
                        </div>

                        <input
                            type="file"
                            id="imageUpload"
                            accept="image/png, image/jpeg, image/webp"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                        <label htmlFor="imageUpload" className="w-full text-center px-6 py-3 bg-white border border-[#EBE3DD] text-[#4F4A45] font-semibold rounded-lg hover:bg-[#F9F7F5] transition-colors cursor-pointer">
                            Choose Photo
                        </label>
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="e.g., I want something natural but defined."
                            rows={3}
                            className="w-full bg-white text-[#4F4A45] rounded-lg px-4 py-3 placeholder-[#8A817C] focus:outline-none focus:ring-2 focus:ring-[#D3C5BC] border border-[#EBE3DD]"
                        />
                        <button
                            onClick={handleSubmit}
                            disabled={!image || isLoading}
                            className="w-full px-6 py-4 bg-[#4F4A45] text-white font-bold rounded-lg hover:bg-[#6b625c] disabled:bg-[#D3C5BC] disabled:cursor-not-allowed transition-colors"
                        >
                            {isLoading ? "Processing..." : "Generate Brow Styles"}
                        </button>
                    </div>
                    
                    <div className="bg-[#F9F7F5]/50 rounded-lg p-6 flex flex-col border border-[#EBE3DD]">
                        <h3 className="text-lg font-semibold mb-4 text-[#4F4A45]">Process & Analysis:</h3>
                        <div className="flex-grow overflow-y-auto text-[#4F4A45] space-y-4">
                            {isLoading && (
                                <div className="flex items-center justify-center h-full">
                                <div className="text-center">
                                        <div className="flex justify-center items-center space-x-2">
                                        <div className="w-3 h-3 bg-[#D3C5BC] rounded-full animate-pulse delay-0"></div>
                                        <div className="w-3 h-3 bg-[#D3C5BC] rounded-full animate-pulse delay-150"></div>
                                        <div className="w-3 h-3 bg-[#D3C5BC] rounded-full animate-pulse delay-300"></div>
                                        </div>
                                        <p className="mt-4 text-[#8A817C]">{loadingMessage}</p>
                                    </div>
                            </div>
                            )}
                            {error && <p className="text-[#9d442a]">{error}</p>}
                            {analysis && <p className="whitespace-pre-wrap">{analysis}</p>}
                            {!isLoading && !analysis && !error && <p className="text-[#8A817C]">Your personalized brow recommendation and style visualizer will appear here.</p>}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VirtualTryOn;