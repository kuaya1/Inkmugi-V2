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

ULTRA-CRITICAL SPECIFICATIONS FOR ULTRA-NATURAL, REFINED OMBRE POWDER BROWS:

*** REFERENCE STYLE: Professional permanent makeup by licensed PMU artist - EXTREMELY natural, refined, and subtle ***

BROW DIMENSIONS (MUST BE VERY THIN AND DELICATE):
- Maximum width at fullest point: 3-4mm ONLY (extremely thin, refined line)
- Overall thickness: THIN - should look like naturally groomed brows, NOT makeup
- The brows should be approximately 70-80% THINNER than typical makeup brows
- Think: Natural hair-like appearance, NOT filled-in makeup brows

COLOR & OPACITY (EXTREMELY IMPORTANT - MUST BE VERY LIGHT):
- Starting point (inner brow near nose): BARELY VISIBLE (10-15% opacity maximum)
- Middle section: Still very light and natural (30-40% opacity maximum)
- Arch area: Slightly more defined but still subtle (50-60% opacity maximum)  
- Tail: Most defined area but still natural (60-70% opacity maximum)
- Overall color: Very soft, muted brown/taupe tones that blend with natural skin and hair
- ABSOLUTELY AVOID: Bold colors, dark browns, blacks, heavy application, makeup appearance

SHAPE CHARACTERISTICS (ULTRA-NATURAL):
- Arch: VERY gentle and subtle - barely noticeable curve (not dramatic or high)
- Tail: Thin, delicate taper - should almost fade away naturally
- Starting point: Extremely soft and diffused - no defined beginning
- Width consistency: Stays thin throughout - never gets thick or bold
- Follow natural brow bone with minimal enhancement

TEXTURE & TECHNIQUE (PROFESSIONAL PMU):
- Soft powdered/airbrushed appearance (NOT hair strokes, NOT solid fill)
- Seamless gradient from barely-there to slightly-more-visible
- Completely diffused edges - NO sharp lines or boundaries
- Should look like natural brow hair with very subtle enhancement
- Skin texture should show through the brow color

CRITICAL AESTHETIC GOALS:
- "No-makeup makeup" effect - people should think these are natural brows
- Enhancement so subtle that it's almost imperceptible 
- Client looks naturally put-together, NOT made-up
- The work should be virtually undetectable as permanent makeup
- Think: "I woke up like this" natural beauty

SPECIFIC COMPARISON REFERENCES:
✓ CORRECT: Barely-there, refined, natural brows like professional healed PMU work
✓ CORRECT: Soft, thin, delicate appearance - looks like naturally beautiful brows
✓ CORRECT: Color is so subtle you have to look closely to see the enhancement
✗ WRONG: Bold Instagram brows, makeup brows, thick brows, dark brows
✗ WRONG: Obvious cosmetic enhancement, dramatic appearance
✗ WRONG: Anything that looks like filled-in makeup

THE GOLDEN RULE: When in doubt, make it LIGHTER, THINNER, and MORE SUBTLE. It's better to be too natural than too bold. Professional PMU should be refined enhancement that looks like beautiful natural brows.

Preserve natural skin texture and ensure photorealistic, high-definition output.`;

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