import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function getChatResponse(message: string): Promise<string> {
  try {
    const systemPrompt = `
      You are a helpful customer support assistant for a platform where users can buy and sell licenses.
      Provide clear, concise, and accurate answers. If you don't know the answer, say so and offer to escalate the query.
      Example questions include: "How do I sell my license?", "What is the refund policy?", "How do I contact support?"
    `;
    const chat = model.startChat({
      history: [],
      generationConfig: { temperature: 0.7 },
    });
    const result = await chat.sendMessage(`${systemPrompt}\n\nUser: ${message}`);
    return result.response.text();
  } catch (error) {
    console.error("Error fetching response:", error);
    return "Sorry, something went wrong. Please try again or contact support.";
  }
}