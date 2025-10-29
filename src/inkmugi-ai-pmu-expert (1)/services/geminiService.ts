import { GoogleGenAI, Chat, GenerateContentResponse, Modality } from "@google/genai";
import { INKMUGI_KNOWLEDGE_BASE } from '../constants';
import { ChatMessage, MessageRole } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const systemInstruction = `
# Core Identity
You are an advanced AI assistant specializing in Permanent Makeup (PMU). You are the ultimate PMU expert for inkmugi.com, combining deep technical knowledge with personalized advice and business insights.

# Knowledge Source
Your entire knowledge base is strictly limited to the following information. Do NOT use any external knowledge. All your answers must be based on this.

\`\`\`
${INKMUGI_KNOWLEDGE_BASE}
\`\`\`

# Expertise Areas
## Technical PMU Knowledge
- Microblading: Techniques, tools, healing process, maintenance
- Powder Brows: Shading techniques, color theory, longevity
- Ombre Brows: Gradient techniques, color blending
- Lip Blushing: Lip anatomy, color matching, healing stages
- Eyeliner: Upper/lower techniques, wing styles, aftercare
- Color Theory: Skin undertones, pigment selection, color corrections
- Safety & Sanitation: Health regulations, sterilization, contraindications
- Aftercare: Healing stages, do's and don'ts, touch-up timing

## Business & Client Services
- Consultation Process: Client assessment, expectation management
- Pricing Structure: Service costs, package deals, touch-up policies
- Booking & Scheduling: Appointment management, preparation instructions
- Client Education: Procedure explanations, realistic expectations
- Aftercare Support: Follow-up care, troubleshooting healing issues

# Personalized Recommendations
- Face Shape Analysis: Brow mapping, lip enhancement suggestions
- Skin Type Considerations: Oily, dry, sensitive skin adaptations
- Lifestyle Factors: Activity level, maintenance preferences
- Color Matching: Undertone analysis, pigment selection
- Age-Appropriate Techniques: Mature skin considerations

# Response Guidelines
## Tone & Style
- Professional yet approachable: Expert knowledge delivered warmly
- Confidence with transparency: Clear about limitations and healing variations
- Educational focus: Always explain the "why" behind recommendations
- Safety-first mentality: Emphasize proper procedures and realistic expectations

## Information Delivery
- Comprehensive but digestible: Break complex topics into clear sections
- Visual descriptions: Paint clear pictures when discussing techniques
- Practical advice: Include actionable steps and timelines
- Cost transparency: Always mention pricing when relevant (based on the provided knowledge)
- Booking guidance: Direct clients to appropriate booking channels

# Conversation Flow
## Initial Greeting
Your first message should be: "Welcome to InkMugi! I'm your personal AI expert for Permanent Makeup. How can I assist you today?". You can also use variations like: "Hello! I'm your PMU expert assistant with complete knowledge of inkmugi.com services and comprehensive permanent makeup expertise. Whether you're curious about microblading, need aftercare advice, or want to book a consultation, I'm here to help with personalized, professional guidance. What can I assist you with today?"

# Limitations & Disclaimers
## Medical Boundaries
- Do not diagnose medical conditions.
- Always recommend professional medical advice for concerning symptoms.
- Emphasize importance of patch tests and consultations.
- Respect contraindications and health limitations.

## Booking & Policies
- Direct users to the official inkmugi.com booking system.
- All policies are based on the provided knowledge.
- Encourage direct contact for urgent concerns.

# Call-to-Action Integration
- Seamlessly guide interested clients toward booking consultations.
- Provide clear next steps for each interaction.
- Support business objectives while prioritizing client education.
`;

let chat: Chat | null = null;

function getChatInstance(): Chat {
  if (!chat) {
    chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction,
      },
      history: [],
    });
  }
  return chat;
}

export const getChatResponseStream = async (message: string) => {
  const chatInstance = getChatInstance();
  try {
    const result = await chatInstance.sendMessageStream({ message });
    return result;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw new Error("Failed to get response from AI.");
  }
};

export const analyzeUserImage = async (base64Image: string, mimeType: string, userPrompt: string): Promise<string> => {
    try {
        const imagePart = {
            inlineData: {
                data: base64Image,
                mimeType: mimeType,
            },
        };

        const textPart = {
            text: `You are an advanced PMU expert from inkmugi.com. Your tone should be professional, warm, and educational. Analyze the person's face in this image, focusing on their facial structure, eye shape, and any visible skin characteristics.
    
    Your task is to provide a personalized brow recommendation. Address the following:
    1.  **Face Shape Analysis:** Briefly describe their likely face shape.
    2.  **Brow Shape Recommendation:** Suggest an ideal brow shape (e.g., soft arch, medium arch, straight) that would create harmony and balance for their features. Explain *why* this shape is suitable.
    3.  **PMU Technique Recommendation:** Based on our services, recommend a technique (e.g., Hair Strokes, Hybrid, Combo, Powder) and explain why it would be a good choice for them.
    4.  **User's Specific Request:** Address the user's specific question: "${userPrompt}".

    Deliver the analysis in a comprehensive but digestible format. Emphasize a safety-first mentality and the importance of an in-person consultation for precise mapping.`,
        };

        const response: GenerateContentResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: { parts: [imagePart, textPart] },
        });

        return response.text;
    } catch (error) {
        console.error("Error analyzing image with Gemini:", error);
        throw new Error("Failed to analyze image.");
    }
};

const getStylePrompt = (style: string): string => {
    switch (style) {
        case 'Hair Strokes':
            return `**Style: Hair Strokes (Microblading/Nano)**
            - **Visuals:** Generate hyper-realistic, fine, individual hair-like strokes that mimic natural brow hair. The strokes should follow a natural growth pattern and blend seamlessly with existing hair. The result should be extremely natural and subtle.`;
        case 'Hybrid Brows':
            return `**Style: Hybrid Brows (Hair Strokes & Shading)**
            - **Visuals:** Combine crisp, manual hair strokes at the front and top of the brow with soft, manual shading throughout the body and tail. This adds density and definition while maintaining a natural, textured look at the front.`;
        case 'Combo Brows':
            return `**Style: Combo Brows (Machine Strokes & Shading)**
            - **Visuals:** Create defined, machine-made hair strokes at the front of the brow, then blend this into fuller, more saturated machine shading through the mid-brow and tail. This style is more defined and makeup-like than Hybrid Brows.`;
        case 'Powder Brows':
            return `**Style: Powder Brows (Machine Shading)**
            - **Visuals:** Create a pure makeup look with no hair strokes. The brow should have a soft, pixelated front (ombre effect) and gradually become more saturated and defined towards the tail. The final look is polished and filled-in, like perfectly applied powder makeup.`;
        default:
            return '';
    }
};

export const generateSingleBrowStyle = async (
    base64Image: string,
    mimeType: string,
    analysis: string,
    style: string,
): Promise<string | null> => {
    try {
        const imagePart = {
            inlineData: { data: base64Image, mimeType },
        };

        const stylePrompt = getStylePrompt(style);
        if (!stylePrompt) throw new Error(`Invalid style: ${style}`);

        const textPart = {
            text: `Based on the provided user photo and the following expert analysis, generate a SINGLE, realistic "after" photo of the user with a specific PMU brow style.

            **Facial Analysis:**
            "${analysis}"

            **Your Task:**
            Modify the user's photo to add the described brow style. The brow shape and color should complement the user's features as noted in the analysis. Ensure the result is high-quality and realistic.
            
            ${stylePrompt}

            Only return the single modified image. Do not add any text, labels, or panels.
            `,
        };

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image-preview',
            contents: { parts: [imagePart, textPart] },
            config: {
                responseModalities: [Modality.IMAGE, Modality.TEXT],
            },
        });

        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
                return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
            }
        }
        return null;

    } catch (error) {
        console.error(`Error generating '${style}' image with Gemini:`, error);
        throw new Error(`Failed to generate '${style}' image.`);
    }
};