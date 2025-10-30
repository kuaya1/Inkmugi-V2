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

ABSOLUTE CRITICAL SPECIFICATIONS - ULTRA-REFINED, BARELY-VISIBLE OMBRE POWDER BROWS:

*** EXACT REFERENCE: Professional healed PMU work - EXTREMELY thin, delicate, natural gradient that's barely noticeable ***

BROW DIMENSIONS (EXTREMELY THIN - NON-NEGOTIABLE):
- Maximum width: 2-3mm ONLY (exceptionally thin, delicate pencil-line width)
- Overall appearance: Like a soft pencil sketch, NOT filled brows
- Should be 80-90% THINNER than any makeup application
- Think: Barely-there enhancement of natural brow shape
- Width should be consistent and extremely refined throughout

COLOR & OPACITY (ULTRA-LIGHT - CRITICAL):
- Inner brow (start): INVISIBLE to 5% opacity - absolutely minimal presence
- Beginning third: 5-15% opacity - extremely faint, soft presence
- Middle section: 20-35% opacity - still very light, subtle definition
- Arch area: 40-50% opacity maximum - gently more visible but still soft
- Tail: 50-60% opacity maximum - most defined but still natural and muted
- Overall tone: Extremely soft taupe/ash brown that nearly disappears into skin
- MUST AVOID: Any darkness, boldness, or makeup appearance whatsoever

SHAPE & STRUCTURE (MINIMALIST ENHANCEMENT):
- Arch: Almost imperceptible - barely any curve or lift
- Tail: Ultra-thin taper that fades to nothing
- Starting point: Completely diffused - cannot see where brow begins
- Overall shape: Follows natural brow with absolute minimal intervention
- Width: Stays consistently ultra-thin - never widens or gets bold

TECHNIQUE MARKERS (HEALED PMU APPEARANCE):
- Extremely soft, barely-visible powdered effect
- Seamless, imperceptible gradient from invisible to barely-there
- Completely blurred edges - zero definition or lines
- Should look like naturally sparse but well-shaped brows
- Skin texture fully visible through the enhancement
- Almost transparent quality to the color

CRITICAL AESTHETIC REQUIREMENTS:
- Enhancement should be nearly invisible in normal lighting
- Only noticeable when compared directly to bare brow area
- Looks like naturally perfect brow shape with no product
- Zero "made-up" or cosmetic appearance
- Subtle to the point of being almost undetectable

EXACT COMPARISON:
✓ CORRECT: Healed PMU that looks like natural brow hairs with soft shading
✓ CORRECT: So subtle you question if enhancement was done at all
✓ CORRECT: Ultra-thin, ultra-soft, ultra-natural gradient
✗ ABSOLUTELY WRONG: Any visible thickness, darkness, or boldness
✗ ABSOLUTELY WRONG: Anything resembling makeup, pencil, or filled brows
✗ ABSOLUTELY WRONG: Brows that are obviously enhanced or cosmetic

MANDATORY RULE: Make it 50% lighter and 50% thinner than you think it should be. The goal is barely-visible natural enhancement, not brow definition. If it looks like makeup or enhancement, it's too dark and too thick.

Preserve all natural skin texture and pores. Output must be photorealistic and high-definition.`;

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