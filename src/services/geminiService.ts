
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  async getConstructionAdvice(query: string, lang: 'hr' | 'en') {
    // Correctly initialize GoogleGenAI with the named apiKey parameter from environment variables.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const model = 'gemini-3-flash-preview';
    
    // Deeply trained system instruction with specific company data provided by the user.
    const bio = `
      Company Name: Viego Gradnja (part of Viego Global d.o.o.)
      Location: Zagreb, Croatia.
      Specialization: Final finishing works (završni građevinski radovi).
      Core Services: 
      - Gletanje (plastering) of walls, ceilings, and drywall.
      - Brušenje (sanding) walls and ceilings (manual and machine with dust extraction).
      - Bandaziranje (drywall taping) to prevent cracks.
      - Farbanje (painting) with high-quality paints and thorough preparation.
      Equipment: Professional machines and tools (Graco, Festool, Mirka) for machine plastering and sanding.
      Philosophy: No shortcuts ("bez fušanja"), tidy work, meeting deadlines, quality guarantee.
      Target Audience: Private clients and construction companies (subcontracting).
    `;

    const systemInstruction = lang === 'hr' 
      ? `Ti si stručni savjetnik za tvrtku Viego Gradnja. ${bio} Odgovaraj na hrvatskom. Budi profesionalan, ljubazan i ponudi konkretne tehničke savjete temeljene na našim uslugama.`
      : `You are an expert AI advisor for Viego Gradnja. ${bio} Respond in English. Be professional, polite, and provide concrete technical advice based on our services.`;

    try {
      // Use ai.models.generateContent directly to perform the query.
      const response = await ai.models.generateContent({
        model,
        contents: query,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });
      // Extract the generated text using the .text property as per guidelines.
      return response.text;
    } catch (error) {
      console.error("AI Service Error:", error);
      return lang === 'hr' ? "Žao mi je, trenutno nisam dostupan." : "I'm sorry, I am currently unavailable.";
    }
  }
}

export const geminiService = new GeminiService();