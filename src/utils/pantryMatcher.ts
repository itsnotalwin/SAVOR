import { Recipe, Ingredient } from '../types';

export interface PantryMatchResult {
  matchCount: number;
  totalCount: number;
  percent: number; // 0 to 100
  isFullyAvailable: boolean; // 100% match
  missingIngredients: Ingredient[];
  matchedIngredients: Ingredient[];
}

/**
 * Normalizes an ingredient or pantry item string for fuzzy matching.
 * e.g., "Artisanal Sourdough Bread (sliced)" -> "sourdough bread"
 */
export function normalizeItemName(name: string): string {
  if (!name) return '';
  return name
    .toLowerCase()
    .replace(/\(.*?\)/g, '') // remove parentheticals
    .replace(/[^a-z0-9\s]/g, ' ') // remove special characters
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Checks if a specific recipe ingredient matches any item in the user's pantry.
 */
export function isIngredientInPantry(ingredientName: string, pantryItems: string[]): boolean {
  if (!pantryItems || pantryItems.length === 0) return false;

  const normalizedIng = normalizeItemName(ingredientName);
  if (!normalizedIng) return false;

  return pantryItems.some(pantryItem => {
    const normalizedPantry = normalizeItemName(pantryItem);
    if (!normalizedPantry) return false;

    // Exact match
    if (normalizedIng === normalizedPantry) return true;

    // Substring match
    if (normalizedIng.includes(normalizedPantry) || normalizedPantry.includes(normalizedIng)) return true;

    // Word token matching e.g. "Hass Avocados" vs "Avocado"
    const ingWords = normalizedIng.split(' ').filter(w => w.length > 2);
    const pantryWords = normalizedPantry.split(' ').filter(w => w.length > 2);

    if (ingWords.length === 0 || pantryWords.length === 0) return false;

    // Remove simple trailing 's' for plural comparison
    const ingStems = ingWords.map(w => w.replace(/s$/, ''));
    const pantryStems = pantryWords.map(w => w.replace(/s$/, ''));

    // Check if any key ingredient word matches
    return ingStems.some(iStem => pantryStems.includes(iStem));
  });
}

/**
 * Calculates the pantry match details for a recipe against the pantry item list.
 */
export function getRecipePantryMatch(recipe: Recipe, pantryItems: string[]): PantryMatchResult {
  const ingredients = recipe.ingredients || [];
  if (ingredients.length === 0) {
    return {
      matchCount: 0,
      totalCount: 0,
      percent: 100,
      isFullyAvailable: true,
      missingIngredients: [],
      matchedIngredients: [],
    };
  }

  const matchedIngredients: Ingredient[] = [];
  const missingIngredients: Ingredient[] = [];

  ingredients.forEach(ing => {
    if (isIngredientInPantry(ing.name, pantryItems)) {
      matchedIngredients.push(ing);
    } else {
      missingIngredients.push(ing);
    }
  });

  const matchCount = matchedIngredients.length;
  const totalCount = ingredients.length;
  const percent = Math.round((matchCount / totalCount) * 100);
  const isFullyAvailable = matchCount === totalCount;

  return {
    matchCount,
    totalCount,
    percent,
    isFullyAvailable,
    missingIngredients,
    matchedIngredients,
  };
}
