export type ShoppingCategory = 
  | 'Produce' 
  | 'Dairy & Eggs' 
  | 'Pantry & Grains' 
  | 'Meat & Seafood' 
  | 'Spices & Seasoning' 
  | 'Bakery' 
  | 'Frozen' 
  | 'Beverages' 
  | 'Other';

export type RecipeCategory = 
  | 'All'
  | 'Breakfast' 
  | 'Lunch' 
  | 'Dinner' 
  | 'Dessert' 
  | 'Snack' 
  | 'Beverage' 
  | 'Quick & Easy' 
  | 'High Protein';

export interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
  category: ShoppingCategory;
  notes?: string;
  checked?: boolean;
}

export interface InstructionStep {
  id: string;
  stepNumber: number;
  text: string;
  timerMinutes?: number;
  tip?: string;
}

export interface NutritionInfo {
  calories?: number;
  protein?: string;
  carbs?: string;
  fat?: string;
}

export interface Recipe {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: RecipeCategory;
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  isFavorite: boolean;
  imageUrl: string;
  tags: string[];
  ingredients: Ingredient[];
  instructions: InstructionStep[];
  nutrition?: NutritionInfo;
  notes?: string;
  createdAt: number;
  updatedAt: number;
  cookbookId?: string;
  cookbookTitle?: string;
  chapterName?: string;
}

export interface CookbookChapter {
  id: string;
  title: string;
  description?: string;
  recipeIds: string[];
}

export interface Cookbook {
  id: string;
  title: string;
  author: string;
  year: string;
  description: string;
  coverImage: string;
  category: string;
  heritageRegion: string;
  tagline: string;
  badge?: string;
  chapters: CookbookChapter[];
  recipeIds: string[];
}

export interface ShoppingItem {
  id: string;
  name: string;
  amount?: number;
  unit?: string;
  category: ShoppingCategory;
  isChecked: boolean;
  recipeSourceId?: string;
  recipeTitle?: string;
  addedAt: number;
}

export type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export interface MealPlanDay {
  day: DayOfWeek;
  recipeIds: string[];
}

export type ActiveTab = 'recipes' | 'shopping' | 'planner' | 'pantry' | 'settings';
