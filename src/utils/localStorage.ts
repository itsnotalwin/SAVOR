import { Recipe, ShoppingItem, MealPlanDay, DayOfWeek } from '../types';
import { INITIAL_RECIPES } from '../data/initialRecipes';

const RECIPES_KEY = 'savor_recipes_v3';
const SHOPPING_KEY = 'savor_shopping_list_v1';
const MEAL_PLAN_KEY = 'savor_meal_plan_v1';
const SETTINGS_KEY = 'savor_settings_v1';

export interface AppSettings {
  servingsMultiplier: number;
  compactView: boolean;
  theme: 'light' | 'sand';
  pantryItems: string[];
}

const DEFAULT_DAYS: DayOfWeek[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const getStoredRecipes = (): Recipe[] => {
  try {
    const data = localStorage.getItem(RECIPES_KEY);
    if (!data) {
      localStorage.setItem(RECIPES_KEY, JSON.stringify(INITIAL_RECIPES));
      return INITIAL_RECIPES;
    }
    const parsed: Recipe[] = JSON.parse(data);
    if (parsed.length < 10) {
      localStorage.setItem(RECIPES_KEY, JSON.stringify(INITIAL_RECIPES));
      return INITIAL_RECIPES;
    }
    return parsed;
  } catch (err) {
    console.error('Error reading recipes from localStorage:', err);
    return INITIAL_RECIPES;
  }
};

export const saveStoredRecipes = (recipes: Recipe[]) => {
  try {
    localStorage.setItem(RECIPES_KEY, JSON.stringify(recipes));
  } catch (err) {
    console.error('Error saving recipes to localStorage:', err);
  }
};

export const getStoredShoppingItems = (): ShoppingItem[] => {
  try {
    const data = localStorage.getItem(SHOPPING_KEY);
    if (!data) return [];
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading shopping list:', err);
    return [];
  }
};

export const saveStoredShoppingItems = (items: ShoppingItem[]) => {
  try {
    localStorage.setItem(SHOPPING_KEY, JSON.stringify(items));
  } catch (err) {
    console.error('Error saving shopping list:', err);
  }
};

export const getStoredMealPlan = (): MealPlanDay[] => {
  try {
    const data = localStorage.getItem(MEAL_PLAN_KEY);
    if (!data) {
      const defaultPlan: MealPlanDay[] = DEFAULT_DAYS.map(day => ({
        day,
        recipeIds: day === 'Monday' ? ['savor-1', 'savor-5'] : day === 'Wednesday' ? ['savor-2'] : []
      }));
      localStorage.setItem(MEAL_PLAN_KEY, JSON.stringify(defaultPlan));
      return defaultPlan;
    }
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading meal plan:', err);
    return DEFAULT_DAYS.map(day => ({ day, recipeIds: [] }));
  }
};

export const saveStoredMealPlan = (plan: MealPlanDay[]) => {
  try {
    localStorage.setItem(MEAL_PLAN_KEY, JSON.stringify(plan));
  } catch (err) {
    console.error('Error saving meal plan:', err);
  }
};

export const getStoredSettings = (): AppSettings => {
  try {
    const data = localStorage.getItem(SETTINGS_KEY);
    if (!data) {
      return {
        servingsMultiplier: 1,
        compactView: false,
        theme: 'sand',
        pantryItems: ['Olive oil', 'Salt', 'Black pepper', 'Garlic', 'Butter', 'Eggs', 'Lemon', 'Flour']
      };
    }
    return JSON.parse(data);
  } catch (err) {
    return {
      servingsMultiplier: 1,
      compactView: false,
      theme: 'sand',
      pantryItems: ['Olive oil', 'Salt', 'Black pepper', 'Garlic', 'Butter', 'Eggs', 'Lemon', 'Flour']
    };
  }
};

export const saveStoredSettings = (settings: AppSettings) => {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (err) {
    console.error('Error saving settings:', err);
  }
};

export const exportAppDataJSON = (): string => {
  const exportData = {
    app: 'Savor Recipes & Shopping List',
    version: '1.0.0',
    exportedAt: new Date().toISOString(),
    recipes: getStoredRecipes(),
    shoppingList: getStoredShoppingItems(),
    mealPlan: getStoredMealPlan(),
    settings: getStoredSettings()
  };
  return JSON.stringify(exportData, null, 2);
};

export const importAppDataJSON = (jsonString: string): boolean => {
  try {
    const parsed = JSON.parse(jsonString);
    if (parsed.recipes && Array.isArray(parsed.recipes)) {
      saveStoredRecipes(parsed.recipes);
    }
    if (parsed.shoppingList && Array.isArray(parsed.shoppingList)) {
      saveStoredShoppingItems(parsed.shoppingList);
    }
    if (parsed.mealPlan && Array.isArray(parsed.mealPlan)) {
      saveStoredMealPlan(parsed.mealPlan);
    }
    if (parsed.settings) {
      saveStoredSettings(parsed.settings);
    }
    return true;
  } catch (err) {
    console.error('Failed to parse import JSON:', err);
    return false;
  }
};

export const resetToDefaultData = () => {
  localStorage.setItem(RECIPES_KEY, JSON.stringify(INITIAL_RECIPES));
  localStorage.removeItem(SHOPPING_KEY);
  localStorage.removeItem(MEAL_PLAN_KEY);
  localStorage.removeItem(SETTINGS_KEY);
};
