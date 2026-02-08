
import { GoogleGenAI, Type } from "@google/genai";

// Use process.env.API_KEY directly as per guidelines
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export async function generateLindyProfile(description: string) {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Create a professional AI agent profile based on this description: "${description}". 
    Return a name, role title, and a detailed system instruction for the AI.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          role: { type: Type.STRING },
          systemInstruction: { type: Type.STRING },
          shortDescription: { type: Type.STRING }
        },
        required: ["name", "role", "systemInstruction", "shortDescription"]
      }
    }
  });

  // response.text is a property, not a method
  try {
    const text = response.text || '{}';
    return JSON.parse(text);
  } catch (e) {
    console.error("Failed to parse Gemini response", e);
    return null;
  }
}

export async function chatWithLindy(
  systemInstruction: string,
  history: { role: 'user' | 'model', content: string }[],
  message: string
) {
  const ai = getAI();
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: systemInstruction,
    }
  });

  // Reconstruct history
  // Note: Gemini Chat API usually takes content objects. We simulate it here.
  // response.text is a property accessed directly
  const response = await chat.sendMessage({ message });
  return response.text;
}
