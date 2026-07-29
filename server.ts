import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI Client (Server-side only)
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }

  // API Health Check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", aiConfigured: !!apiKey });
  });

  // AI Recipe Generation Endpoint
  app.post("/api/generate-recipe", async (req, res) => {
    try {
      if (!ai) {
        return res.status(500).json({
          error: "Gemini API key is not configured on the server. Please check your environment configuration."
        });
      }

      const { pantryItems = [], customPrompt = '', category = 'Dinner', dietary = [] } = req.body;

      const promptParts = [
        `Design a delicious, culinary-crafted recipe suitable for category '${category}'.`,
      ];

      if (pantryItems && pantryItems.length > 0) {
        promptParts.push(`STRICT CONSTRAINT: You MUST ONLY use the following pantry ingredients for the main components of the dish: ${pantryItems.join(', ')}.`);
        promptParts.push(`Do NOT invent or add major ingredients that are not listed above (water, basic salt, and pepper are permitted). If the list is very small, get creative with just those items.`);
      } else {
        promptParts.push(`No pantry items were provided. You may use any ingredients to create the recipe.`);
      }

      if (dietary && dietary.length > 0) {
        promptParts.push(`Dietary preferences / constraints: ${dietary.join(', ')}.`);
      }

      if (customPrompt && customPrompt.trim()) {
        promptParts.push(`Additional user request or flavor preference: ${customPrompt.trim()}`);
      }

      promptParts.push(
        "Make sure the recipe is realistic, clear, and includes standard culinary measurements and precise instructions. Select a high-quality relevant Unsplash food photo URL for the dish."
      );

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: promptParts.join("\n"),
        config: {
          systemInstruction: `You are an expert master chef and recipe creator for 'Savor Kitchen'. Your task is to generate complete, highly appealing, practical recipes based STRICTLY on user pantry ingredients and preferences.
Return a single clean JSON object matching the requested schema. Provide realistic cooking times, clear step-by-step instructions (with optional timerMinutes when a step requires timed cooking like simmering, baking, or searing), and accurate nutrition estimations.
For imageUrl, provide a beautiful, high-resolution Unsplash photo URL relevant to the food item (e.g. https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop). Ensure the URL is valid.`,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING, description: "Descriptive recipe title" },
              subtitle: { type: Type.STRING, description: "A short, appetizing subtitle or tagline" },
              description: { type: Type.STRING, description: "Detailed 2-3 sentence culinary description" },
              category: { type: Type.STRING, description: "Category like Breakfast, Lunch, Dinner, Snacks, Dessert, Beverages" },
              prepTime: { type: Type.INTEGER, description: "Preparation time in minutes" },
              cookTime: { type: Type.INTEGER, description: "Cooking time in minutes" },
              servings: { type: Type.INTEGER, description: "Number of servings" },
              difficulty: { type: Type.STRING, description: "Difficulty: Easy, Medium, or Hard" },
              imageUrl: { type: Type.STRING, description: "Valid Unsplash food image URL" },
              tags: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "Tags like Quick & Easy, High Protein, Vegetarian, Pantry Special, etc."
              },
              nutrition: {
                type: Type.OBJECT,
                properties: {
                  calories: { type: Type.INTEGER },
                  protein: { type: Type.STRING },
                  carbs: { type: Type.STRING },
                  fat: { type: Type.STRING }
                },
                required: ["calories", "protein", "carbs", "fat"]
              },
              ingredients: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    amount: { type: Type.NUMBER },
                    unit: { type: Type.STRING },
                    category: { type: Type.STRING }
                  },
                  required: ["name", "amount", "unit", "category"]
                }
              },
              instructions: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    stepNumber: { type: Type.INTEGER },
                    text: { type: Type.STRING },
                    timerMinutes: { type: Type.INTEGER }
                  },
                  required: ["stepNumber", "text"]
                }
              },
              notes: { type: Type.STRING, description: "Chef's tip or serving suggestion" }
            },
            required: [
              "title",
              "subtitle",
              "description",
              "category",
              "prepTime",
              "cookTime",
              "servings",
              "difficulty",
              "imageUrl",
              "tags",
              "nutrition",
              "ingredients",
              "instructions"
            ]
          }
        }
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error("No response generated from Gemini API.");
      }

      const recipeData = JSON.parse(responseText);

      // Ensure IDs and timestamps
      const now = Date.now();
      const generatedRecipe = {
        ...recipeData,
        id: `ai-recipe-${now}-${Math.random().toString(36).substring(2, 7)}`,
        isFavorite: false,
        ingredients: recipeData.ingredients.map((ing: any, idx: number) => ({
          ...ing,
          id: `ai-ing-${idx}-${Date.now()}`
        })),
        instructions: recipeData.instructions.map((st: any, idx: number) => ({
          ...st,
          id: `ai-st-${idx}-${Date.now()}`
        })),
        createdAt: now,
        updatedAt: now
      };

      return res.json({ recipe: generatedRecipe });
    } catch (err: any) {
      console.error("Error generating recipe with Gemini:", err);
      return res.status(500).json({
        error: err.message || "Failed to generate AI recipe."
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
