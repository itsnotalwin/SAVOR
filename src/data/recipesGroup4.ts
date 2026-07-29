import { Recipe } from '../types';

export const RECIPES_GROUP_4: Recipe[] = [
  {
    id: 'men-36',
    title: 'Steak & Egg Loaded Breakfast Tacos',
    subtitle: 'Seared steak strips, fluffy scrambled eggs, shredded cheddar & salsa on corn tortillas.',
    description: 'The breakfast of champions. Seared steak strips, velvety soft scrambled eggs, melted sharp cheddar, and fresh salsa stuffed into toasted street taco tortillas.',
    category: 'Breakfast',
    prepTime: 10,
    cookTime: 10,
    servings: 2,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200&auto=format&fit=crop',
    tags: ['Breakfast', 'High Protein', 'Tacos', 'Quick & Easy', 'Aesthetic'],
    nutrition: { calories: 510, protein: '42g', carbs: '26g', fat: '28g' },
    ingredients: [
      { id: 'm36-1', name: 'Leftover or Fresh Seared Steak (sliced)', amount: 0.5, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'm36-2', name: 'Farm Fresh Eggs', amount: 4, unit: 'large', category: 'Dairy & Eggs' },
      { id: 'm36-3', name: 'Shredded Sharp Cheddar Cheese', amount: 0.5, unit: 'cup', category: 'Dairy & Eggs' },
      { id: 'm36-4', name: 'Street Taco Corn or Flour Tortillas', amount: 4, unit: 'tortillas', category: 'Bakery' },
      { id: 'm36-5', name: 'Fresh Salsa or Pico de Gallo', amount: 0.33, unit: 'cup', category: 'Produce' },
      { id: 'm36-6', name: 'Sliced Avocado & Cilantro', amount: 1, unit: 'whole', category: 'Produce' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Warm sliced steak in skillet with a little butter for 2 minutes. Set aside.' },
      { id: 'st2', stepNumber: 2, text: 'Whisk eggs with a splash of milk and salt. Scramble low and slow in butter until soft and creamy.', timerMinutes: 3 },
      { id: 'st3', stepNumber: 3, text: 'Warm tortillas over open flame or skillet. Assemble with soft eggs, steak strips, cheddar, avocado, and fresh salsa.' }
    ],
    notes: 'High protein weekend morning fuel.',
    createdAt: Date.now() - 60,
    updatedAt: Date.now() - 60
  },
  {
    id: 'men-37',
    title: 'Thick Brioche French Toast with Maple & Berry Compote',
    subtitle: 'Golden custard-dipped brioche slices dusted with powdered sugar & fresh blueberries.',
    description: 'Café-style thick sliced brioche soaked in vanilla cinnamon egg custard, seared in butter until golden, and topped with warm maple syrup.',
    category: 'Breakfast',
    prepTime: 10,
    cookTime: 8,
    servings: 2,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1200&auto=format&fit=crop',
    tags: ['Breakfast', 'Aesthetic', 'Quick & Easy'],
    nutrition: { calories: 480, protein: '16g', carbs: '68g', fat: '18g' },
    ingredients: [
      { id: 'm37-1', name: 'Thick Cut Brioche Bread Slices', amount: 4, unit: 'slices', category: 'Bakery' },
      { id: 'm37-2', name: 'Large Eggs', amount: 3, unit: 'whole', category: 'Dairy & Eggs' },
      { id: 'm37-3', name: 'Milk or Whole Milk', amount: 0.5, unit: 'cup', category: 'Dairy & Eggs' },
      { id: 'm37-4', name: 'Vanilla Extract & Cinnamon', amount: 1, unit: 'tsp', category: 'Spices & Seasoning' },
      { id: 'm37-5', name: 'Pure Maple Syrup & Fresh Berries', amount: 0.33, unit: 'cup', category: 'Pantry & Grains' },
      { id: 'm37-6', name: 'Butter for frying', amount: 2, unit: 'tbsp', category: 'Dairy & Eggs' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Whisk eggs, milk, vanilla, cinnamon, and a pinch of salt in a shallow dish.' },
      { id: 'st2', stepNumber: 2, text: 'Soak thick brioche slices in custard for 20 seconds per side.' },
      { id: 'st3', stepNumber: 3, text: 'Cook in foamy butter skillet over medium heat for 3-4 minutes per side until golden brown.', timerMinutes: 7 },
      { id: 'st4', stepNumber: 4, text: 'Stack tall, dust with powdered sugar, and pour warm maple syrup over berries.' }
    ],
    notes: 'Photo Tip: Pour maple syrup continuously while capturing a slow-motion video or photo.',
    createdAt: Date.now() - 50,
    updatedAt: Date.now() - 50
  },
  {
    id: 'men-38',
    title: 'Loaded Breakfast Burrito with Crispy Tater Tots',
    subtitle: 'Crispy tater tots, breakfast sausage, scrambled eggs, cheddar & chipotle crema.',
    description: 'The king of breakfast burritos. Stuffed with crunchy deep-golden tater tots, savory pork sausage, soft scrambled eggs, melted cheese, and chipotle mayo.',
    category: 'Breakfast',
    prepTime: 10,
    cookTime: 12,
    servings: 2,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200&auto=format&fit=crop',
    tags: ['Breakfast', 'High Protein', 'Quick & Easy'],
    nutrition: { calories: 620, protein: '34g', carbs: '52g', fat: '32g' },
    ingredients: [
      { id: 'm38-1', name: 'Crispy Frozen Tater Tots (air-fried)', amount: 1.5, unit: 'cups', category: 'Pantry & Grains' },
      { id: 'm38-2', name: 'Ground Breakfast Pork Sausage', amount: 0.5, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'm38-3', name: 'Large Eggs', amount: 4, unit: 'eggs', category: 'Dairy & Eggs' },
      { id: 'm38-4', name: 'Shredded Cheddar Cheese', amount: 0.5, unit: 'cup', category: 'Dairy & Eggs' },
      { id: 'm38-5', name: 'Large Burrito Flour Tortillas', amount: 2, unit: 'tortillas', category: 'Bakery' },
      { id: 'm38-6', name: 'Chipotle Mayo or Salsa', amount: 2, unit: 'tbsp', category: 'Pantry & Grains' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Air-fry or bake tater tots until super crunchy (12 mins).', timerMinutes: 12 },
      { id: 'st2', stepNumber: 2, text: 'Brown breakfast sausage crumble in skillet. Scramble eggs softly in same pan.' },
      { id: 'st3', stepNumber: 3, text: 'Layer chipotle mayo, crunchy tots, sausage, eggs, and cheddar in warm tortillas. Roll tight and sear in skillet for 1 minute on each side.' }
    ],
    notes: 'The tater tots give this burrito the ultimate crunch!',
    createdAt: Date.now() - 40,
    updatedAt: Date.now() - 40
  },
  {
    id: 'men-39',
    title: 'Middle Eastern Shakshuka with Feta & Crusty Bread',
    subtitle: 'Eggs poached in a spiced tomato, pepper, and onion sauce topped with fresh feta.',
    description: 'Vibrant one-pan Mediterranean classic. Eggs gently poached in a rich simmered tomato pepper sauce seasoned with cumin, paprika, and garlic, served with crusty bread for dipping.',
    category: 'Breakfast',
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200&auto=format&fit=crop',
    tags: ['Breakfast', 'Vegetarian', 'Cast Iron', 'Aesthetic'],
    nutrition: { calories: 380, protein: '20g', carbs: '28g', fat: '22g' },
    ingredients: [
      { id: 'm39-1', name: 'Crushed Canned Tomatoes', amount: 1, unit: 'can (28oz)', category: 'Pantry & Grains' },
      { id: 'm39-2', name: 'Red Bell Pepper & Onion (diced)', amount: 2, unit: 'whole', category: 'Produce' },
      { id: 'm39-3', name: 'Farm Fresh Eggs', amount: 4, unit: 'large', category: 'Dairy & Eggs' },
      { id: 'm39-4', name: 'Smoked Paprika & Ground Cumin', amount: 1, unit: 'tbsp', category: 'Spices & Seasoning' },
      { id: 'm39-5', name: 'Crumbled Feta Cheese & Cilantro', amount: 0.33, unit: 'cup', category: 'Dairy & Eggs' },
      { id: 'm39-6', name: 'Crusty Sourdough or Pita Bread', amount: 4, unit: 'slices', category: 'Bakery' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Sauté onions, peppers, and garlic in olive oil until soft (5 mins).' },
      { id: 'st2', stepNumber: 2, text: 'Add crushed tomatoes, cumin, paprika, salt, and pepper. Simmer sauce for 8 minutes.', timerMinutes: 8 },
      { id: 'st3', stepNumber: 3, text: 'Make 4 wells in tomato sauce. Crack eggs into wells. Cover skillet and simmer on low for 5 minutes until egg whites are set but yolks runny.' },
      { id: 'st4', stepNumber: 4, text: 'Garnish with crumbled feta and fresh cilantro. Dip warm crusty bread directly into pan.' }
    ],
    notes: 'Photo Tip: Keep the black cast iron pan on a trivet at the center of the table with toast slices surrounding it.',
    createdAt: Date.now() - 35,
    updatedAt: Date.now() - 35
  },
  {
    id: 'men-40',
    title: 'Loaded Sheet-Pan Nachos Supreme with Smoked Queso',
    subtitle: 'Tortilla chips piled high with seasoned ground beef, black beans, jalapeños & melted cheese.',
    description: 'The ultimate party platter. Crispy corn tortilla chips smothered in melted cheddar, jack cheese, seasoned taco beef, jalapeños, black beans, guacamole, and sour cream.',
    category: 'Snack',
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=1200&auto=format&fit=crop',
    tags: ['Snack', 'Quick & Easy', 'Game Day', 'High Protein'],
    nutrition: { calories: 580, protein: '32g', carbs: '48g', fat: '30g' },
    ingredients: [
      { id: 'm40-1', name: 'Restaurant Style Corn Tortilla Chips', amount: 1, unit: 'large bag', category: 'Pantry & Grains' },
      { id: 'm40-2', name: 'Seasoned Taco Ground Beef', amount: 0.8, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'm40-3', name: 'Shredded Cheddar & Monterey Jack Cheese', amount: 2, unit: 'cups', category: 'Dairy & Eggs' },
      { id: 'm40-4', name: 'Canned Black Beans (drained)', amount: 1, unit: 'can', category: 'Pantry & Grains' },
      { id: 'm40-5', name: 'Pickled Jalapeño Slices', amount: 0.33, unit: 'cup', category: 'Produce' },
      { id: 'm40-6', name: 'Guacamole, Sour Cream & Pico de Gallo', amount: 1, unit: 'cup', category: 'Produce' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Layer tortilla chips on a large baking sheet.' },
      { id: 'st2', stepNumber: 2, text: 'Top with seasoned cooked beef, black beans, and shredded cheese.' },
      { id: 'st3', stepNumber: 3, text: 'Bake at 400°F (200°C) for 8-10 minutes until cheese is completely melted and bubbly.', timerMinutes: 9 },
      { id: 'st4', stepNumber: 4, text: 'Finish with dollops of guacamole, sour cream, pico de gallo, and jalapeños.' }
    ],
    notes: 'Serve directly on the baking sheet for effortless style.',
    createdAt: Date.now() - 30,
    updatedAt: Date.now() - 30
  },
  {
    id: 'men-41',
    title: 'Artisanal Pepperoni & Hot Honey Flatbread',
    subtitle: 'Crispy flatbread crust topped with cup-and-char pepperoni, mozzarella & spicy hot honey.',
    description: 'Crispy baked flatbread layered with marinara, fresh mozzarella, crispy curled pepperoni cups, and drizzled with spicy habanero hot honey.',
    category: 'Snack',
    prepTime: 10,
    cookTime: 10,
    servings: 2,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop',
    tags: ['Snack', 'Quick & Easy', 'Aesthetic', 'Pizza'],
    nutrition: { calories: 520, protein: '24g', carbs: '44g', fat: '28g' },
    ingredients: [
      { id: 'm41-1', name: 'Flatbread or Naan Breads', amount: 2, unit: 'breads', category: 'Bakery' },
      { id: 'm41-2', name: 'Cup & Char Pepperoni Slices', amount: 0.33, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'm41-3', name: 'Shredded Low-Moisture Mozzarella', amount: 1.5, unit: 'cups', category: 'Dairy & Eggs' },
      { id: 'm41-4', name: 'Pizza Marinara Sauce', amount: 0.5, unit: 'cup', category: 'Pantry & Grains' },
      { id: 'm41-5', name: 'Spicy Hot Honey (Mike’s Hot Honey)', amount: 2, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm41-6', name: 'Fresh Basil & Red Pepper Flakes', amount: 2, unit: 'tbsp', category: 'Produce' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Spread marinara sauce over flatbreads. Cover evenly with mozzarella cheese and pepperoni slices.' },
      { id: 'st2', stepNumber: 2, text: 'Bake at 425°F (220°C) for 10 minutes until edges are crisp and pepperoni curls up.', timerMinutes: 10 },
      { id: 'st3', stepNumber: 3, text: 'Drizzle generously with spicy hot honey and fresh basil leaves right out of the oven.' }
    ],
    notes: 'The combination of spicy hot honey and salty pepperoni is unbeatable.',
    createdAt: Date.now() - 25,
    updatedAt: Date.now() - 25
  },
  {
    id: 'men-42',
    title: 'Crispy Garlic Parmesan Truffle Fries',
    subtitle: 'Golden baked hand-cut fries tossed in truffle oil, fresh garlic & grated parmesan.',
    description: 'Crispy hand-cut potato fries tossed in aromatic white truffle oil, freshly minced garlic, sea salt, and grated Parmigiano Reggiano.',
    category: 'Snack',
    prepTime: 15,
    cookTime: 25,
    servings: 3,
    difficulty: 'Easy',
    isFavorite: false,
    imageUrl: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=1200&auto=format&fit=crop',
    tags: ['Snack', 'Quick & Easy', 'Aesthetic'],
    nutrition: { calories: 380, protein: '8g', carbs: '46g', fat: '18g' },
    ingredients: [
      { id: 'm42-1', name: 'Russet Potatoes (cut into fries)', amount: 3, unit: 'large', category: 'Produce' },
      { id: 'm42-2', name: 'White Truffle Oil', amount: 1.5, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm42-3', name: 'Finely Grated Parmesan Cheese', amount: 0.5, unit: 'cup', category: 'Dairy & Eggs' },
      { id: 'm42-4', name: 'Minced Garlic & Parsley', amount: 2, unit: 'tbsp', category: 'Produce' },
      { id: 'm42-5', name: 'Olive Oil & Sea Salt', amount: 2, unit: 'tbsp', category: 'Pantry & Grains' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Soak cut fries in cold water for 15 mins to remove excess starch. Towel dry thoroughly.' },
      { id: 'st2', stepNumber: 2, text: 'Toss with olive oil and salt. Air-fry at 400°F (200°C) for 20 minutes until crunchy golden.', timerMinutes: 20 },
      { id: 'st3', stepNumber: 3, text: 'Transfer hot fries to a bowl. Toss with truffle oil, minced garlic, parsley, and grated parmesan cheese.' }
    ],
    notes: 'Smells like a luxury steakhouse side.',
    createdAt: Date.now() - 20,
    updatedAt: Date.now() - 20
  },
  {
    id: 'men-43',
    title: 'Smoked Old Fashioned Cocktail',
    subtitle: 'Bourbon or rye whiskey with Angostura bitters, orange peel & wood smoke aroma.',
    description: 'The definitive gentleman’s cocktail. Bourbon stirred over ice with Angostura bitters, rich simple syrup, and expressed orange oils.',
    category: 'Beverage',
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop',
    tags: ['Beverage', 'Cocktail', 'Aesthetic', 'Man Cave'],
    nutrition: { calories: 180, protein: '0g', carbs: '6g', fat: '0g' },
    ingredients: [
      { id: 'm43-1', name: 'Bourbon or Rye Whiskey', amount: 2, unit: 'oz', category: 'Pantry & Grains' },
      { id: 'm43-2', name: 'Angostura Aromatic Bitters', amount: 3, unit: 'dashes', category: 'Pantry & Grains' },
      { id: 'm43-3', name: 'Rich Demerara / Simple Syrup', amount: 0.25, unit: 'oz', category: 'Pantry & Grains' },
      { id: 'm43-4', name: 'Orange Peel & Luxardo Maraschino Cherry', amount: 1, unit: 'whole', category: 'Produce' },
      { id: 'm43-5', name: 'Large Clear Ice Cube', amount: 1, unit: 'cube', category: 'Pantry & Grains' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Combine bourbon, simple syrup, and bitters in a mixing glass with ice. Stir smoothly for 30 seconds.' },
      { id: 'st2', stepNumber: 2, text: 'Strain over a large clear ice cube in a lowball rock glass.' },
      { id: 'st3', stepNumber: 3, text: 'Express orange peel oils over glass rim, drop in orange twist and a Luxardo dark cherry.' }
    ],
    notes: 'Photo Tip: Mood lighting over dark leather or wood table with a clear ice cube.',
    createdAt: Date.now() - 15,
    updatedAt: Date.now() - 15
  },
  {
    id: 'men-44',
    title: 'Velvety Espresso Martini',
    subtitle: 'Fresh brewed espresso shaken vigorously with vodka, Kahlúa & coffee beans.',
    description: 'Crisp, velvety, and energizing cocktail with a thick crema foam crown on top.',
    category: 'Beverage',
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop',
    tags: ['Beverage', 'Cocktail', 'Aesthetic'],
    nutrition: { calories: 210, protein: '0g', carbs: '14g', fat: '0g' },
    ingredients: [
      { id: 'm44-1', name: 'Freshly Brewed Hot Espresso Shot', amount: 1.5, unit: 'oz', category: 'Pantry & Grains' },
      { id: 'm44-2', name: 'Vodka', amount: 1.5, unit: 'oz', category: 'Pantry & Grains' },
      { id: 'm44-3', name: 'Kahlúa Coffee Liqueur', amount: 1, unit: 'oz', category: 'Pantry & Grains' },
      { id: 'm44-4', name: 'Simple Syrup', amount: 0.25, unit: 'oz', category: 'Pantry & Grains' },
      { id: 'm44-5', name: 'Whole Coffee Beans for garnish', amount: 3, unit: 'beans', category: 'Pantry & Grains' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Combine espresso, vodka, Kahlúa, and simple syrup in a cocktail shaker filled with ice.' },
      { id: 'st2', stepNumber: 2, text: 'Shake hard for 20 seconds to create thick foam.', timerMinutes: 1 },
      { id: 'st3', stepNumber: 3, text: 'Fine strain into a chilled coupe glass. Floating three coffee beans on top in a triangle.' }
    ],
    notes: 'The hard shake creates the signature silky cream top.',
    createdAt: Date.now() - 10,
    updatedAt: Date.now() - 10
  },
  {
    id: 'men-45',
    title: 'Molten Chocolate Lava Cake with Vanilla Ice Cream',
    subtitle: 'Warm dark chocolate cake with a gooey liquid chocolate lava center.',
    description: 'Decadent individual chocolate cake baked until edges are firm and center remains molten liquid dark chocolate. Served hot with cold vanilla bean ice cream.',
    category: 'Dessert',
    prepTime: 10,
    cookTime: 12,
    servings: 2,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop',
    tags: ['Dessert', 'Aesthetic', 'Chocolate'],
    nutrition: { calories: 480, protein: '8g', carbs: '52g', fat: '28g' },
    ingredients: [
      { id: 'm45-1', name: 'Bittersweet Dark Chocolate (chopped)', amount: 4, unit: 'oz', category: 'Pantry & Grains' },
      { id: 'm45-2', name: 'Unsalted Butter', amount: 0.5, unit: 'cup', category: 'Dairy & Eggs' },
      { id: 'm45-3', name: 'Eggs & Egg Yolks', amount: 2, unit: 'whole + 2 yolks', category: 'Dairy & Eggs' },
      { id: 'm45-4', name: 'Powdered Sugar & All-Purpose Flour', amount: 3, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm45-5', name: 'Vanilla Bean Ice Cream', amount: 2, unit: 'scoops', category: 'Dairy & Eggs' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Melt chocolate and butter together in microwave in 30-second bursts until smooth.' },
      { id: 'st2', stepNumber: 2, text: 'Whisk eggs, egg yolks, sugar, and flour. Fold in melted chocolate.' },
      { id: 'st3', stepNumber: 3, text: 'Pour into buttered ramekins dusted with cocoa powder. Bake at 425°F (220°C) for 12 minutes until edges are set but center jiggles.', timerMinutes: 12 },
      { id: 'st4', stepNumber: 4, text: 'Invert onto plate and serve immediately with vanilla bean ice cream.' }
    ],
    notes: 'Photo Tip: Cut into the cake with a spoon to release the warm liquid chocolate lava pool onto the plate.',
    createdAt: Date.now() - 5,
    updatedAt: Date.now() - 5
  }
];
