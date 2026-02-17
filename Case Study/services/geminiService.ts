
import { GoogleGenAI } from "@google/genai";

// Initialize GoogleGenAI with process.env.API_KEY directly as per guidelines
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getProductInsight = async (productName: string, description: string) => {
  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert tech reviewer. Provide a concise, punchy "AI Insight" (max 30 words) for the product: ${productName}. Description: ${description}. Focus on what makes it unique and why a customer would love it.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });
    // The .text property is a getter, not a function, and is accessed directly.
    return response.text || "An incredible blend of design and performance.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The pinnacle of modern technology and refined aesthetics.";
  }
};
