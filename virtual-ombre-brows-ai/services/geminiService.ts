import { GoogleGenAI, Modality } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

/**
 * Edits an image using a text prompt with the Gemini 2.5 Flash Image model.
 * @param base64Image The base64 encoded string of the image.
 * @param mimeType The MIME type of the image.
 * @param prompt The text prompt describing the desired edits.
 * @returns The base64 encoded string of the edited image.
 */
export const editImage = async (base64Image: string, mimeType: string, prompt: string): Promise<string> => {
    const enhancedPrompt = `${prompt}. Ensure the final output image is high-definition, clear, and photorealistic.`;

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
                if (part.inlineData) {
                    return part.inlineData.data;
                }
            }
        }

        throw new Error("No image data returned from API.");

    } catch (error) {
        console.error("Error editing image with Gemini:", error);
        throw new Error("The AI model could not process the image editing request.");
    }
};

/**
 * Analyzes the user's face shape from an image and recommends a brow style.
 * @param base64Image The base64 encoded string of the image.
 * @param mimeType The MIME type of the image.
 * @returns A string containing the face shape analysis and brow recommendation.
 */
export const analyzeFaceShape = async (base64Image: string, mimeType: string): Promise<string> => {
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

        return response.text;
    } catch (error) {
        console.error("Error analyzing face shape with Gemini:", error);
        throw new Error("The AI model could not process the face shape analysis request.");
    }
};