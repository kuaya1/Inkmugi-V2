import { GoogleGenAI, Modality } from "@google/genai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
    console.warn("VITE_GEMINI_API_KEY environment variable is not set. AI features will not work.");
}

const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

/**
 * Edits an image using a text prompt with the Gemini 2.5 Flash Image model.
 * @param base64Image The base64 encoded string of the image.
 * @param mimeType The MIME type of the image.
 * @param prompt The text prompt describing the desired edits.
 * @returns The base64 encoded string of the edited image.
 */
export const editImage = async (base64Image: string, mimeType: string, prompt: string): Promise<string> => {
    if (!ai) {
        throw new Error("AI service is not configured. Please set VITE_GEMINI_API_KEY in your .env.local file.");
    }

    const enhancedPrompt = `${prompt}

PROFESSIONAL OMBRE POWDER BROW SPECIFICATIONS - NATURAL & REFINED:

*** TECHNIQUE: Professional Ombre Powder Brows - soft gradient effect with powdered appearance ***

BROW DIMENSIONS (NATURAL PROPORTIONS):
- Width: 3-4mm at fullest point (thin to medium, refined)
- Overall appearance: Delicate, natural enhancement
- Consistent refined width throughout
- Follows natural brow bone structure

OMBRE POWDER TECHNIQUE - COLOR GRADIENT (CRITICAL):
- Starting point (inner brow): Very light, soft, diffused (20-30% opacity)
- Gradually transition through middle section (40-50% opacity)
- Peak intensity at arch and tail (60-70% opacity maximum)
- Creates natural ombre/gradient effect from light to darker
- Overall tone: Soft brown/taupe that complements natural coloring
- CHARACTERISTIC: Lighter at the front, gradually darker toward the tail

POWDER BROW TEXTURE:
- Soft, powdered/airbrushed appearance throughout
- NOT hair strokes - smooth, filled powder effect
- Matte finish with subtle gradient
- Completely diffused edges (no sharp lines)
- Even, consistent powder application
- Skin texture visible through the pigment

SHAPE & STRUCTURE:
- Gentle, natural arch (not dramatic)
- Refined tail with elegant taper
- Soft, feathered beginning (most diffused area)
- Follows client's natural brow shape
- Balanced, symmetrical appearance

OMBRE GRADIENT RULES:
- Front third: Lightest area (20-30% opacity)
- Middle third: Medium tone (40-50% opacity)  
- Tail third: Darkest area (60-70% opacity)
- Smooth, seamless transitions between sections
- No harsh lines or obvious color blocks

AESTHETIC GOALS:
- Professional healed ombre powder brow appearance
- Natural, refined enhancement
- Soft powdered makeup look (but permanent)
- "Your brows but better" effect
- Elegant, polished, timeless style

COMPARISON:
✓ CORRECT: Professional ombre powder brows with smooth gradient
✓ CORRECT: Soft powdered texture, lighter front, darker tail
✓ CORRECT: Natural refined appearance, not bold or dramatic
✗ WRONG: Hair strokes, microblading look
✗ WRONG: Solid one-color fill, no gradient
✗ WRONG: Overly bold, thick, or Instagram-style brows

MANDATORY: Create clear ombre gradient effect (light to dark) with professional powder brow technique. Preserve natural skin texture. Output must be photorealistic and high-definition.`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
                parts: [
                    {
                        inlineData: {
                            data: base64Image,
                            mimeType: mimeType,
                        },
                    },
                    {
                        text: enhancedPrompt,
                    },
                ],
            },
            config: {
                responseModalities: [Modality.IMAGE],
            },
        });

        const parts = response.candidates?.[0]?.content?.parts;
        if (parts) {
            for (const part of parts) {
                if (part.inlineData?.data) {
                    return part.inlineData.data;
                }
            }
        }

        throw new Error("No image data returned from API.");

    } catch (error) {
        console.error("Error editing image with Gemini:", error);
        throw new Error("The AI model could not process the image editing request. Please ensure your API key is valid.");
    }
};

/**
 * Analyzes the user's face shape from an image and recommends a brow style.
 * @param base64Image The base64 encoded string of the image.
 * @param mimeType The MIME type of the image.
 * @returns A string containing the face shape analysis and brow recommendation.
 */
export const analyzeFaceShape = async (base64Image: string, mimeType: string): Promise<string> => {
    if (!ai) {
        throw new Error("AI service is not configured. Please set VITE_GEMINI_API_KEY in your .env.local file.");
    }

    const model = 'gemini-2.5-flash';
    const systemInstruction = "You are a master permanent makeup artist specializing in ombre powder brows. Your tone is professional, knowledgeable, and encouraging. Analyze the user's face shape from the provided image and recommend the best ombre powder brow shape for them. First, identify the face shape (e.g., Oval, Round, Square, Heart, Long, Diamond). Then, describe the ideal brow shape and explain *why* it complements their specific face shape. Format your response using Markdown. Use a heading for the face shape (e.g., '### Face Shape: Oval') and a separate heading for the recommendation (e.g., '### Brow Recommendation').";
    
    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: {
                parts: [
                    {
                        inlineData: {
                            data: base64Image,
                            mimeType: mimeType,
                        },
                    },
                    {
                        text: "Please analyze my face shape and recommend the perfect ombre powder brow style for me."
                    }
                ],
            },
            config: {
                systemInstruction: systemInstruction,
            }
        });

        return response.text || "Unable to analyze face shape at this time.";
    } catch (error) {
        console.error("Error analyzing face shape with Gemini:", error);
        throw new Error("The AI model could not process the face shape analysis request. Please ensure your API key is valid.");
    }
};