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

CRITICAL SPECIFICATIONS FOR NATURAL, REFINED OMBRE POWDER BROWS (PROFESSIONAL PMU STYLE):

BROW DIMENSIONS (VERY IMPORTANT - KEEP NATURAL):
- Maximum width at fullest point: 4-6mm (THIN TO MEDIUM, not thick)
- Length: Proportionate to face, typically ending at outer eye corner angle
- Overall appearance: Delicate, refined, elegant - NOT bold or dramatic

COLOR & GRADIENT (OMBRE POWDER TECHNIQUE):
- Starting point (inner brow): Very light, soft, barely visible (20-30% opacity)
- Middle section: Gradually transition to medium tone (50-60% opacity)
- Arch & tail: Slightly darker but still natural (70-80% opacity, not solid black)
- Overall color: Soft brown tones that complement skin tone and hair color
- AVOID: Harsh lines, solid black, heavy application, Instagram-style bold brows

SHAPE & STRUCTURE:
- Natural arch: Gentle, subtle curve (not dramatically high or angular)
- Tail: Tapered, refined ending (not thick or blunt)
- Starting point: Soft, feathered, diffused (no harsh beginning)
- Follow natural brow bone structure
- Symmetry: Balanced but allow for natural facial asymmetry

TECHNIQUE MARKERS (OMBRE POWDER BROWS):
- Powdered/soft appearance throughout (not hair strokes)
- Smooth gradient effect from light to slightly darker
- Diffused edges (no sharp boundaries)
- Professional, subtle enhancement
- "Your brows but better" aesthetic

COMPARISON REFERENCE:
- Style: Similar to professional permanent makeup by licensed PMU artists
- NOT Instagram bold brows, NOT makeup brows, NOT thick dramatic brows
- Think: Natural, elegant, refined, barely-there enhancement
- Client should look like they have beautiful natural brows, not obvious tattoo

CRITICAL: The brows should be SUBTLE and NATURAL - approximately 60% lighter and thinner than typical makeup brows. The goal is refined enhancement that looks like naturally beautiful brows, not an obvious cosmetic procedure.

Ensure high-definition, clear, photorealistic output with proper skin texture preserved.`;

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