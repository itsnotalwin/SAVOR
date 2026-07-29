import { Recipe } from '../types';
import { RECIPES_GROUP_1 } from './recipesGroup1';
import { RECIPES_GROUP_2 } from './recipesGroup2';
import { RECIPES_GROUP_3 } from './recipesGroup3';
import { RECIPES_GROUP_4 } from './recipesGroup4';
import { SOUTH_AFRICAN_RECIPES } from './southAfricanCookbooks';

export const STARTER_CLASSICS: Recipe[] = [
  {
    id: 'savor-1',
    title: 'Artisanal Sourdough Toast with Creamy Avocado & Poached Egg',
    subtitle: 'Warm poached egg over whipped avocado, finished with chili flakes & Maldon sea salt.',
    description: 'A classic café breakfast crafted with crisp sourdough, velvety Hass avocado, microgreens, and a silky soft-poached egg.',
    category: 'Breakfast',
    prepTime: 10,
    cookTime: 5,
    servings: 2,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200&auto=format&fit=crop',
    tags: ['Breakfast', 'Quick & Easy', 'Vegetarian', 'High Protein', 'Aesthetic'],
    nutrition: { calories: 380, protein: '16g', carbs: '32g', fat: '22g' },
    ingredients: [
      { id: 'i1', name: 'Artisanal Sourdough Bread', amount: 2, unit: 'slices', category: 'Bakery' },
      { id: 'i2', name: 'Ripe Hass Avocados', amount: 1, unit: 'whole', category: 'Produce' },
      { id: 'i3', name: 'Fresh Farm Eggs', amount: 2, unit: 'large', category: 'Dairy & Eggs' },
      { id: 'i4', name: 'Extra Virgin Olive Oil', amount: 1, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'i5', name: 'Lemon Juice', amount: 1, unit: 'tsp', category: 'Produce' },
      { id: 'i6', name: 'Red Pepper Flakes', amount: 0.5, unit: 'tsp', category: 'Spices & Seasoning' },
      { id: 'i7', name: 'Maldon Sea Salt & Black Pepper', amount: 1, unit: 'pinch', category: 'Spices & Seasoning' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Toast sourdough slices until golden and crisp around the edges.' },
      { id: 'st2', stepNumber: 2, text: 'Mash ripe avocado with lemon juice, sea salt, and fresh cracked pepper.' },
      { id: 'st3', stepNumber: 3, text: 'Poach egg in gently simmering water with 1 tsp vinegar for 3 minutes.', timerMinutes: 3 },
      { id: 'st4', stepNumber: 4, text: 'Assemble avocado over sourdough, top with poached egg and red pepper flakes.' }
    ],
    notes: 'Aesthetic breakfast classic.',
    createdAt: Date.now() - 1000000,
    updatedAt: Date.now() - 1000000
  },
  {
    id: 'savor-2',
    title: 'Tuscan Garlic Butter Salmon with Sun-Dried Tomatoes',
    subtitle: 'Pan-seared Atlantic salmon fillets in a silky garlic-cream sauce with fresh spinach.',
    description: 'A vibrant, restaurant-quality dinner ready in 20 minutes. Crispy skinned salmon coated in aromatic garlic cream.',
    category: 'Dinner',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: 'Medium',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1200&auto=format&fit=crop',
    tags: ['Dinner', 'High Protein', 'Seafood', 'Aesthetic'],
    nutrition: { calories: 520, protein: '42g', carbs: '8g', fat: '36g' },
    ingredients: [
      { id: 'i10', name: 'Atlantic Salmon Fillets', amount: 4, unit: 'fillets', category: 'Meat & Seafood' },
      { id: 'i11', name: 'Heavy Cream', amount: 0.75, unit: 'cup', category: 'Dairy & Eggs' },
      { id: 'i12', name: 'Fresh Baby Spinach', amount: 3, unit: 'cups', category: 'Produce' },
      { id: 'i13', name: 'Sun-Dried Tomatoes', amount: 0.33, unit: 'cup', category: 'Pantry & Grains' },
      { id: 'i14', name: 'Minced Garlic', amount: 4, unit: 'cloves', category: 'Produce' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Sear salmon skin-side down in hot skillet for 5 minutes until crisp.', timerMinutes: 5 },
      { id: 'st2', stepNumber: 2, text: 'Flip salmon, cook 3 minutes, then remove to plate.', timerMinutes: 3 },
      { id: 'st3', stepNumber: 3, text: 'Sauté garlic and sun-dried tomatoes, stir in heavy cream and spinach. Return salmon to pan.' }
    ],
    notes: 'Serve with wild rice or roasted asparagus.',
    createdAt: Date.now() - 900000,
    updatedAt: Date.now() - 900000
  }
];

export const INITIAL_RECIPES: Recipe[] = [
  ...SOUTH_AFRICAN_RECIPES,
  ...RECIPES_GROUP_1,
  ...RECIPES_GROUP_2,
  ...RECIPES_GROUP_3,
  ...RECIPES_GROUP_4,
  ...STARTER_CLASSICS
];
