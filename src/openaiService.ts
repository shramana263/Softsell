import { ChatOpenAI } from "@langchain/openai";

// Add this declaration so TypeScript knows about import.meta.env
interface ImportMetaEnv {
  readonly VITE_OPENAI_API_KEY: string;
  // add other env variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

const llm = new ChatOpenAI({
    openAIApiKey: import.meta.env.VITE_OPENAI_API_KEY,
    model: "gpt-3.5-turbo",
    temperature: 0.7,
});

export async function getChatResponse(message: string): Promise<string> {
  try {
    const systemPrompt = `
      You are a helpful customer support assistant for a platform where users can buy and sell licenses.
      Provide clear, concise, and accurate answers. If you don't know the answer, say so and offer to escalate the query.
      Example questions include: "How do I sell my license?", "What is the refund policy?", "How do I contact support?"
    `;
    const response = await llm.invoke([
      { role: "system", content: systemPrompt },
      { role: "user", content: message },
    ]);
    return response.content as string;
  } catch (error) {
    console.error("Error fetching response:", error);
    return "Sorry, something went wrong. Please try again or contact support.";
  }
}