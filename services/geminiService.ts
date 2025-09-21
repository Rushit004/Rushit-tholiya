import type { ArtisanProfile, Product } from "../types";

/**
 * MOCK IMPLEMENTATION for static hosting.
 * This file simulates responses from the Gemini API.
 */

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Generates a mock product description.
 */
export const generateProductDescription = async (
  imageFile: File,
  keywords: string,
  craftType: string
): Promise<string> => {
  await delay(1500);
  console.log("Simulating AI description generation for:", { imageFile: imageFile.name, keywords, craftType });
  return `Title: Rustic Charm Ceramic Mug

Embrace the beauty of imperfection with this stunning, handcrafted ceramic mug. Inspired by earthy tones and minimalist design, as requested, this piece is perfect for your morning coffee or evening tea. The unique glaze, reminiscent of a forest floor, makes each mug a one-of-a-kind work of art.

Built for both beauty and function, this mug feels substantial in your hands, providing a comforting warmth with every sip. Its durable construction ensures it is microwave and dishwasher safe, making it an ideal choice for everyday luxury.

- Material: High-fire stoneware clay
- Finish: Matte glaze with subtle speckling
- Capacity: Approximately 12 oz
- Features: Comfortable, ergonomic handle
`;
};

/**
 * Generates mock personalized suggestions for an artisan.
 */
export const getArtisanSuggestions = async (profile: ArtisanProfile): Promise<string[]> => {
  await delay(1200);
  console.log("Simulating AI suggestions for:", profile.name);
  return [
    `🪴 New Product Idea: Consider creating a "DIY Pottery Kit" with clay, basic tools, and a guide. It taps into the trend of at-home creative hobbies.`,
    `📸 Marketing Tip: Create short-form video content (Reels/TikToks) showing your creation process from a lump of clay to the finished product. Use trending audio to increase reach.`,
    `🤝 Collaboration Idea: Partner with a local woodworker to create unique ceramic and wood homeware sets, like coffee mugs with matching wooden coasters.`
  ];
};

/**
 * A generic function to get mock AI-powered suggestions.
 * Used for AI search and connection recommendations.
 */
export const getAiSourcedSuggestions = async (prompt: string): Promise<string[]> => {
    await delay(1000);
    console.log("Simulating AI sourced suggestions for prompt:", prompt);

    // This is a simple mock. We check for keywords in the prompt to decide what to return.
    if (prompt.includes('product IDs')) {
        // Simulates product search
        return ['prod1', 'prod7', 'prod4', 'prod6'];
    }
    if (prompt.includes('search suggestion')) {
        // Simulates search auto-completion
        return [
            "handmade ceramic mugs",
            "wooden cutting boards",
            "gifts under $50",
            "linen tea towels"
        ];
    }
    if (prompt.includes('artisan IDs')) {
        // Simulates connection recommendation
        return ['user2', 'user4', 'user5'];
    }

    // Default fallback
    return [];
};