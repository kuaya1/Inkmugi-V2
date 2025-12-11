import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Shield, Zap, Lock, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageUploader } from '../components/ai-tryon/ImageUploader';
import { ResultDisplay } from '../components/ai-tryon/ResultDisplay';
import { ControlPanel } from '../components/ai-tryon/ControlPanel';
import { Loader } from '../components/ai-tryon/Loader';
import { fileToBase64 } from '../utils/fileUtils';
import { editImage, analyzeFaceShape } from '../services/ai/geminiService';

const VirtualTryOn: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-[#F9FAFB] via-white to-[#E6DAD2]/10">
      {/* Hero Section with Tech-Forward Design */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D2D2B]/5 to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2D2D2B] to-[#4A4A47] text-white rounded-full text-sm font-medium mb-6 shadow-lg">
              <Sparkles className="w-4 h-4" />
              Powered by Advanced AI Technology
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-[#2D2D2B]">
              See Your Perfect Brows
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2D2D2B] to-[#6B6B68] mt-2">
                Before You Commit
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Experience the future of permanent makeup. Our AI-powered virtual try-on lets you visualize your transformation with medical-grade precision—instantly.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#2D2D2B]" />
                <span>100% Private & Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#2D2D2B]" />
                <span>Instant Results</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#2D2D2B]" />
                <span>Face-Shape Analysis</span>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2D2D2B] to-[#4A4A47] text-white rounded-xl flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Upload Your Photo</h3>
              <p className="text-gray-600 text-sm">
                Take or upload a clear, front-facing photo. Our AI works best with natural lighting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2D2D2B] to-[#4A4A47] text-white rounded-xl flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Creates Your Look</h3>
              <p className="text-gray-600 text-sm">
                Our advanced AI analyzes your face shape and applies perfectly tailored ombre brows.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2D2D2B] to-[#4A4A47] text-white rounded-xl flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Book Your Real Results</h3>
              <p className="text-gray-600 text-sm">
                Love what you see? Reserve your consultation to make it reality with medical-grade precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tool Section */}
      <section className="px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-8 md:p-10">
            <ImageUploader 
              onImageUpload={handleImageUpload} 
              imagePreviewUrl={originalImagePreview} 
            />

            {error && (
              <div className="mt-6 p-4 bg-red-50 text-red-800 rounded-xl text-center font-medium border border-red-200">
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
              <p className="mt-4 text-lg text-gray-600 animate-pulse">
                Crafting your perfect look with AI precision...
              </p>
            </div>
          )}

          {editedImage && originalImagePreview && (
            <ResultDisplay 
              originalImage={originalImagePreview}
              editedImage={editedImage}
            />
          )}
        </div>
      </section>

      {/* Conversion CTA Section */}
      {editedImage && (
        <section className="px-4 py-16 bg-gradient-to-br from-[#2D2D2B] to-[#4A4A47] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Love Your Virtual Results?
            </h2>
            <p className="text-xl md:text-2xl mb-4 text-white/90">
              Let's Make Them Real
            </p>
            <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
              Your AI preview shows what's possible. Now experience the precision artistry of medical-grade permanent makeup with 523+ successful transformations behind us.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.vagaro.com/inkmugi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-[#2D2D2B] font-semibold rounded-full hover:bg-[#E6DAD2] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
              >
                Reserve Your Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
              >
                Ask a Question First
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold mb-1">523+</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">0.19%</div>
                <div className="text-sm text-white/80">Complication Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">18-36</div>
                <div className="text-sm text-white/80">Months Longevity</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">97%</div>
                <div className="text-sm text-white/80">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Privacy & Technology Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-[#2D2D2B]">
            Privacy & Technology You Can Trust
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E6DAD2] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-[#2D2D2B]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Private</h3>
              <p className="text-gray-600">
                Your photos are never stored. Processing happens securely in real-time and images are immediately discarded after generation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#E6DAD2] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-[#2D2D2B]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced AI</h3>
              <p className="text-gray-600">
                Powered by Google's Gemini AI with specialized training in facial features, symmetry analysis, and permanent makeup artistry.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#E6DAD2] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-[#2D2D2B]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Clinically Accurate</h3>
              <p className="text-gray-600">
                Our AI considers face shape, bone structure, and natural brow patterns—the same factors I analyze in every real consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtualTryOn;
