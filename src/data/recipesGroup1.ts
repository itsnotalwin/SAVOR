import { Recipe } from '../types';

export const RECIPES_GROUP_1: Recipe[] = [
  {
    id: 'men-1',
    title: 'Cast-Iron Ribeye Steak with Rosemary Garlic Butter',
    subtitle: 'Thick-cut ribeye seared in cast iron with foaming garlic-rosemary compound butter.',
    description: 'The ultimate steak technique. A dark caramelized crust gives way to a juicy, tender medium-rare interior bathed in melted garlic herb butter.',
    category: 'Dinner',
    prepTime: 10,
    cookTime: 12,
    servings: 2,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    tags: ['High Protein', 'Dinner', 'Cast Iron', 'Steak', 'Aesthetic'],
    nutrition: { calories: 680, protein: '58g', carbs: '2g', fat: '48g' },
    ingredients: [
      { id: 'm1-1', name: 'Bone-In Ribeye Steak (1.5 inch thick)', amount: 2, unit: 'steaks', category: 'Meat & Seafood' },
      { id: 'm1-2', name: 'Unsalted Butter', amount: 4, unit: 'tbsp', category: 'Dairy & Eggs' },
      { id: 'm1-3', name: 'Garlic Cloves (smashed)', amount: 6, unit: 'cloves', category: 'Produce' },
      { id: 'm1-4', name: 'Fresh Rosemary Sprigs', amount: 3, unit: 'sprigs', category: 'Produce' },
      { id: 'm1-5', name: 'Coarse Kosher Salt & Cracked Black Pepper', amount: 1, unit: 'tbsp', category: 'Spices & Seasoning' },
      { id: 'm1-6', name: 'Avocado Oil or High-Heat Oil', amount: 1, unit: 'tbsp', category: 'Pantry & Grains' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Pat steak completely dry with paper towels. Season generously on all sides with salt and pepper 30 minutes before cooking.', tip: 'Dry steak surface equals a deep golden crust.' },
      { id: 'st2', stepNumber: 2, text: 'Heat cast iron skillet over high heat until smoking hot. Add avocado oil.', timerMinutes: 3 },
      { id: 'st3', stepNumber: 3, text: 'Sear steak for 3 minutes per side without moving it until a dark crust forms.', timerMinutes: 6 },
      { id: 'st4', stepNumber: 4, text: 'Reduce heat to medium. Add butter, smashed garlic, and rosemary sprigs. Tilt pan and spoon foaming butter over steak continuously for 2 minutes.', timerMinutes: 2 },
      { id: 'st5', stepNumber: 5, text: 'Transfer steak to cutting board. Rest for 8 minutes before slicing across the grain.', timerMinutes: 8 }
    ],
    notes: 'Photo Tip: Slice thick at a 45-degree angle on a dark wooden board. Spoon extra pan juices over the top so the meat glimmers in warm light.',
    createdAt: Date.now() - 100000,
    updatedAt: Date.now() - 100000
  },
  {
    id: 'men-2',
    title: 'Honey Garlic Glazed Chicken Thighs',
    subtitle: 'Crispy skin chicken thighs simmered in a sticky 5-ingredient honey garlic sauce.',
    description: 'Ultra crispy skin with juicy dark meat glazed in a sweet-savory reduced honey soy garlic reduction.',
    category: 'Dinner',
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=1200&auto=format&fit=crop',
    tags: ['High Protein', 'Dinner', 'Chicken', 'Quick & Easy'],
    nutrition: { calories: 490, protein: '42g', carbs: '22g', fat: '26g' },
    ingredients: [
      { id: 'm2-1', name: 'Bone-In Skin-On Chicken Thighs', amount: 6, unit: 'pieces', category: 'Meat & Seafood' },
      { id: 'm2-2', name: 'Honey', amount: 0.33, unit: 'cup', category: 'Pantry & Grains' },
      { id: 'm2-3', name: 'Soy Sauce', amount: 3, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm2-4', name: 'Minced Garlic', amount: 5, unit: 'cloves', category: 'Produce' },
      { id: 'm2-5', name: 'Apple Cider Vinegar', amount: 1, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm2-6', name: 'Sliced Green Onions & Sesame Seeds', amount: 2, unit: 'tbsp', category: 'Produce' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Season chicken thighs with salt and pepper. Sear skin-side down in a skillet over medium-high heat for 10 minutes until golden and crisp.', timerMinutes: 10 },
      { id: 'st2', stepNumber: 2, text: 'Flip chicken and cook for another 5 minutes. Drain excess fat if needed.' },
      { id: 'st3', stepNumber: 3, text: 'Whisk honey, soy sauce, garlic, and cider vinegar. Pour into skillet around chicken. Simmer for 5 minutes until glaze bubbles and thickens into a syrup.', timerMinutes: 5 },
      { id: 'st4', stepNumber: 4, text: 'Garnish with green onions and toasted sesame seeds.' }
    ],
    notes: 'Photo Tip: Serve in the black skillet with glossy amber glaze dripping down the crispy chicken skin.',
    createdAt: Date.now() - 90000,
    updatedAt: Date.now() - 90000
  },
  {
    id: 'men-3',
    title: 'Smoked Paprika & Chimichurri Flank Steak',
    subtitle: 'Flame-grilled flank steak served with vibrant homemade herb chimichurri.',
    description: 'Lean high-protein steak charred over intense heat, drizzled with zesty parsley, oregano, garlic, and red wine vinegar sauce.',
    category: 'Dinner',
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    difficulty: 'Easy',
    isFavorite: false,
    imageUrl: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1200&auto=format&fit=crop',
    tags: ['High Protein', 'Steak', 'Dinner', 'Grilling'],
    nutrition: { calories: 430, protein: '46g', carbs: '4g', fat: '25g' },
    ingredients: [
      { id: 'm3-1', name: 'Flank Steak or Skirt Steak', amount: 1.5, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'm3-2', name: 'Fresh Flat-Leaf Parsley (finely chopped)', amount: 1, unit: 'cup', category: 'Produce' },
      { id: 'm3-3', name: 'Fresh Oregano', amount: 2, unit: 'tbsp', category: 'Produce' },
      { id: 'm3-4', name: 'Garlic (minced)', amount: 4, unit: 'cloves', category: 'Produce' },
      { id: 'm3-5', name: 'Extra Virgin Olive Oil', amount: 0.5, unit: 'cup', category: 'Pantry & Grains' },
      { id: 'm3-6', name: 'Red Wine Vinegar', amount: 3, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm3-7', name: 'Smoked Paprika & Cumin', amount: 1, unit: 'tsp', category: 'Spices & Seasoning' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Mix parsley, oregano, garlic, olive oil, vinegar, salt, and red pepper flakes in a bowl for chimichurri.' },
      { id: 'st2', stepNumber: 2, text: 'Rub flank steak with smoked paprika, cumin, salt, and olive oil.' },
      { id: 'st3', stepNumber: 3, text: 'Grill or pan-sear on high heat for 4-5 minutes per side for medium rare.', timerMinutes: 10 },
      { id: 'st4', stepNumber: 4, text: 'Rest 5 minutes, then slice thinly against the grain. Spoon green chimichurri generously on top.' }
    ],
    notes: 'High protein meal prep staple. Great served with roasted sweet potatoes.',
    createdAt: Date.now() - 80000,
    updatedAt: Date.now() - 80000
  },
  {
    id: 'men-4',
    title: 'Teriyaki Glazed Salmon Skewers',
    subtitle: 'Bite-sized caramelized salmon cubes grilled on bamboo skewers.',
    description: 'Glossy, tender salmon cubes brushed with sticky homemade teriyaki glaze and toasted sesame seeds.',
    category: 'Dinner',
    prepTime: 15,
    cookTime: 8,
    servings: 3,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1200&auto=format&fit=crop',
    tags: ['High Protein', 'Seafood', 'Dinner', 'Aesthetic'],
    nutrition: { calories: 410, protein: '38g', carbs: '14g', fat: '22g' },
    ingredients: [
      { id: 'm4-1', name: 'Skinless Salmon Fillets (cubed)', amount: 1.2, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'm4-2', name: 'Soy Sauce', amount: 0.25, unit: 'cup', category: 'Pantry & Grains' },
      { id: 'm4-3', name: 'Mirin or Maple Syrup', amount: 2, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm4-4', name: 'Grated Ginger & Garlic', amount: 1, unit: 'tbsp', category: 'Produce' },
      { id: 'm4-5', name: 'Sesame Oil', amount: 1, unit: 'tsp', category: 'Pantry & Grains' },
      { id: 'm4-6', name: 'Bamboo Skewers (soaked in water)', amount: 6, unit: 'pieces', category: 'Pantry & Grains' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Cut salmon into 1-inch uniform cubes and thread onto soaked wooden skewers.' },
      { id: 'st2', stepNumber: 2, text: 'In a small saucepan, simmer soy sauce, mirin, ginger, garlic, and sesame oil until reduced to a glaze.' },
      { id: 'st3', stepNumber: 3, text: 'Sear skewers in a hot oiled grill pan for 2 minutes per side. Brush heavily with glaze during last 2 minutes.', timerMinutes: 6 }
    ],
    notes: 'Photo Tip: Arrange skewers criss-crossed over jasmine rice with scallions and lemon slices.',
    createdAt: Date.now() - 70000,
    updatedAt: Date.now() - 70000
  },
  {
    id: 'men-5',
    title: 'Garlic Butter Steak Bites with Crispy Potatoes',
    subtitle: 'Golden seared sirloin steak cubes and crispy seasoned potato bites in one pan.',
    description: 'Crispy diced gold potatoes paired with tender, juicy steak bites coated in garlic butter and parsley.',
    category: 'Dinner',
    prepTime: 15,
    cookTime: 20,
    servings: 3,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200&auto=format&fit=crop',
    tags: ['High Protein', 'Dinner', 'Cast Iron', 'Quick & Easy'],
    nutrition: { calories: 560, protein: '45g', carbs: '34g', fat: '28g' },
    ingredients: [
      { id: 'm5-1', name: 'Top Sirloin Steak (cubed)', amount: 1.2, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'm5-2', name: 'Yukon Gold Potatoes (diced small)', amount: 3, unit: 'medium', category: 'Produce' },
      { id: 'm5-3', name: 'Butter', amount: 3, unit: 'tbsp', category: 'Dairy & Eggs' },
      { id: 'm5-4', name: 'Minced Garlic', amount: 4, unit: 'cloves', category: 'Produce' },
      { id: 'm5-5', name: 'Garlic Powder & Paprika', amount: 1, unit: 'tsp', category: 'Spices & Seasoning' },
      { id: 'm5-6', name: 'Fresh Chopped Parsley', amount: 2, unit: 'tbsp', category: 'Produce' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Sauté diced potatoes in olive oil over medium-high heat until golden and crispy (12-15 mins). Remove potatoes from pan.', timerMinutes: 14 },
      { id: 'st2', stepNumber: 2, text: 'In same piping hot skillet, sear seasoned steak cubes for 3-4 minutes until caramelized.', timerMinutes: 4 },
      { id: 'st3', stepNumber: 3, text: 'Add butter, garlic, and potatoes back into skillet. Toss together for 1 minute until fragrant.' }
    ],
    notes: 'The ultimate 1-pan hearty meal for guys after a heavy workout.',
    createdAt: Date.now() - 60000,
    updatedAt: Date.now() - 60000
  },
  {
    id: 'men-6',
    title: 'Crispy Air Fryer Buffalo Chicken Wings',
    subtitle: 'Extra crunchy wings tossed in buttery Frank’s RedHot buffalo sauce.',
    description: 'No deep fryer needed. Baking powder creates super crispy skin that locks in buffalo buttery goodness.',
    category: 'Snack',
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=1200&auto=format&fit=crop',
    tags: ['Snack', 'Chicken', 'High Protein', 'Quick & Easy', 'Game Day'],
    nutrition: { calories: 480, protein: '36g', carbs: '2g', fat: '36g' },
    ingredients: [
      { id: 'm6-1', name: 'Chicken Wings (flats & drumettes)', amount: 2, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'm6-2', name: 'Aluminum-Free Baking Powder', amount: 1, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm6-3', name: 'Frank’s RedHot Original Sauce', amount: 0.5, unit: 'cup', category: 'Pantry & Grains' },
      { id: 'm6-4', name: 'Unsalted Butter (melted)', amount: 3, unit: 'tbsp', category: 'Dairy & Eggs' },
      { id: 'm6-5', name: 'Garlic Powder & Salt', amount: 1, unit: 'tsp', category: 'Spices & Seasoning' },
      { id: 'm6-6', name: 'Ranch or Blue Cheese Dip & Celery', amount: 0.5, unit: 'cup', category: 'Dairy & Eggs' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Towel dry wings completely. Toss with baking powder, garlic powder, and salt.', tip: 'Baking powder raises pH for ultimate crunch.' },
      { id: 'st2', stepNumber: 2, text: 'Air fry at 400°F (200°C) for 20 minutes, shaking basket halfway.', timerMinutes: 20 },
      { id: 'st3', stepNumber: 3, text: 'Whisk hot sauce and melted butter. Toss wings in bowl until completely coated.' }
    ],
    notes: 'Serve with cold craft beer and celery sticks.',
    createdAt: Date.now() - 50000,
    updatedAt: Date.now() - 50000
  },
  {
    id: 'men-7',
    title: 'Greek Lemon Oregano Chicken & Rice Skillet',
    subtitle: 'Juicy roasted chicken thighs with fluffy yellow lemon rice & feta cheese.',
    description: 'Bright Greek citrus flavors, garlic, oregano, and crispy skin chicken cooked over savory basmati rice.',
    category: 'Dinner',
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    difficulty: 'Easy',
    isFavorite: false,
    imageUrl: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=1200&auto=format&fit=crop',
    tags: ['Dinner', 'High Protein', 'Chicken', 'One Pot'],
    nutrition: { calories: 510, protein: '41g', carbs: '42g', fat: '20g' },
    ingredients: [
      { id: 'm7-1', name: 'Chicken Thighs', amount: 4, unit: 'pieces', category: 'Meat & Seafood' },
      { id: 'm7-2', name: 'Long Grain Basmati Rice', amount: 1, unit: 'cup', category: 'Pantry & Grains' },
      { id: 'm7-3', name: 'Chicken Broth', amount: 2, unit: 'cups', category: 'Pantry & Grains' },
      { id: 'm7-4', name: 'Lemons (juiced & zested)', amount: 2, unit: 'whole', category: 'Produce' },
      { id: 'm7-5', name: 'Dried Oregano & Garlic', amount: 1, unit: 'tbsp', category: 'Spices & Seasoning' },
      { id: 'm7-6', name: 'Crumbled Feta & Kalamata Olives', amount: 0.33, unit: 'cup', category: 'Dairy & Eggs' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Sear chicken thighs skin-side down in a skillet for 6 minutes until golden.', timerMinutes: 6 },
      { id: 'st2', stepNumber: 2, text: 'Remove chicken, add rice, garlic, lemon juice, broth, and oregano. Top with chicken.', timerMinutes: 20 },
      { id: 'st3', stepNumber: 3, text: 'Cover and simmer on low for 20 minutes until rice is fluffy. Top with crumbled feta.' }
    ],
    notes: 'Great meal prep for weekday lunches.',
    createdAt: Date.now() - 40000,
    updatedAt: Date.now() - 40000
  },
  {
    id: 'men-8',
    title: 'Slow-Cooked BBQ Pulled Pork Sliders',
    subtitle: 'Melt-in-your-mouth shredded pork butt on toasted brioche buns with coleslaw.',
    description: 'Smoky, sweet pulled pork piled high on soft toasted brioche with tangy crunch apple cider slaw.',
    category: 'Dinner',
    prepTime: 15,
    cookTime: 360,
    servings: 8,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1200&auto=format&fit=crop',
    tags: ['Dinner', 'High Protein', 'Pork', 'Sliders'],
    nutrition: { calories: 420, protein: '32g', carbs: '38g', fat: '16g' },
    ingredients: [
      { id: 'm8-1', name: 'Pork Shoulder / Pork Butt', amount: 3.5, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'm8-2', name: 'Smoky BBQ Rub', amount: 3, unit: 'tbsp', category: 'Spices & Seasoning' },
      { id: 'm8-3', name: 'BBQ Sauce', amount: 1.5, unit: 'cups', category: 'Pantry & Grains' },
      { id: 'm8-4', name: 'Apple Cider Vinegar', amount: 0.25, unit: 'cup', category: 'Pantry & Grains' },
      { id: 'm8-5', name: 'Slider Brioche Buns', amount: 12, unit: 'buns', category: 'Bakery' },
      { id: 'm8-6', name: 'Coleslaw Mix with Dressing', amount: 2, unit: 'cups', category: 'Produce' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Rub pork shoulder generously with BBQ spice rub.' },
      { id: 'st2', stepNumber: 2, text: 'Place in slow cooker with cider vinegar. Cook LOW for 7-8 hours or HIGH for 4-5 hours until tender.', timerMinutes: 300 },
      { id: 'st3', stepNumber: 3, text: 'Shred meat using two forks, toss with sweet BBQ sauce, and pile onto buttered toasted slider buns.' }
    ],
    notes: 'Feed a crew easily or freeze portions for quick protein lunches.',
    createdAt: Date.now() - 30000,
    updatedAt: Date.now() - 30000
  },
  {
    id: 'men-9',
    title: 'Seared Sesame Ahi Tuna Power Bowl',
    subtitle: 'Rare seared ahi tuna over sushi rice, avocado, edamame, and sriracha mayo.',
    description: 'Fresh sushi-grade tuna seared in black and white sesame seeds, sliced over avocado and warm sushi rice.',
    category: 'Dinner',
    prepTime: 15,
    cookTime: 5,
    servings: 2,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop',
    tags: ['High Protein', 'Seafood', 'Aesthetic', 'Healthy'],
    nutrition: { calories: 510, protein: '44g', carbs: '48g', fat: '18g' },
    ingredients: [
      { id: 'm9-1', name: 'Sushi Grade Ahi Tuna Steaks', amount: 2, unit: 'steaks', category: 'Meat & Seafood' },
      { id: 'm9-2', name: 'Black & White Sesame Seeds', amount: 3, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm9-3', name: 'Cooked Sushi Rice or Jasmine Rice', amount: 2, unit: 'cups', category: 'Pantry & Grains' },
      { id: 'm9-4', name: 'Sliced Avocado & Edamame', amount: 1, unit: 'cup', category: 'Produce' },
      { id: 'm9-5', name: 'Sriracha Spicy Mayo', amount: 2, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm9-6', name: 'Soy Sauce & Wasabi', amount: 2, unit: 'tbsp', category: 'Pantry & Grains' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Coat tuna steaks evenly with sesame seeds, salt, and pepper.' },
      { id: 'st2', stepNumber: 2, text: 'Sear in screaming hot pan with sesame oil for 45 seconds per side. Keep center cool and pink.', timerMinutes: 2 },
      { id: 'st3', stepNumber: 3, text: 'Slice into thin ribbons. Arrange over rice bowl with sliced avocado, edamame, and sriracha mayo drizzle.' }
    ],
    notes: 'Looks like a $30 restaurant poke bowl on camera!',
    createdAt: Date.now() - 20000,
    updatedAt: Date.now() - 20000
  },
  {
    id: 'men-10',
    title: 'Smoked Bacon-Wrapped Jalapeño Poppers',
    subtitle: 'Cream cheese and cheddar stuffed jalapeños wrapped in crispy smoky bacon.',
    description: 'Spicy, creamy, and smoky crowd-pleaser snack that takes 20 minutes in the oven or smoker.',
    category: 'Snack',
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: 'Easy',
    isFavorite: false,
    imageUrl: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1200&auto=format&fit=crop',
    tags: ['Snack', 'Quick & Easy', 'High Protein', 'Keto'],
    nutrition: { calories: 340, protein: '14g', carbs: '5g', fat: '28g' },
    ingredients: [
      { id: 'm10-1', name: 'Fresh Jalapeño Peppers (halved & seeded)', amount: 8, unit: 'peppers', category: 'Produce' },
      { id: 'm10-2', name: 'Cream Cheese (softened)', amount: 8, unit: 'oz', category: 'Dairy & Eggs' },
      { id: 'm10-3', name: 'Shredded Sharp Cheddar Cheese', amount: 1, unit: 'cup', category: 'Dairy & Eggs' },
      { id: 'm10-4', name: 'Smoked Bacon Slices (cut in half)', amount: 8, unit: 'slices', category: 'Meat & Seafood' },
      { id: 'm10-5', name: 'Garlic Powder & Smoked Paprika', amount: 1, unit: 'tsp', category: 'Spices & Seasoning' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Mix cream cheese, cheddar cheese, garlic powder, and paprika in a bowl.' },
      { id: 'st2', stepNumber: 2, text: 'Stuff halved jalapeños with cheese mixture. Wrap tight with bacon.' },
      { id: 'st3', stepNumber: 3, text: 'Bake at 400°F (200°C) for 20 minutes until bacon is crispy and cheese bubbles.', timerMinutes: 20 }
    ],
    notes: 'Wear gloves when seeding jalapeños!',
    createdAt: Date.now() - 15000,
    updatedAt: Date.now() - 15000
  },
  {
    id: 'men-11',
    title: 'Sheet-Pan Garlic Herb Pork Chops & Asparagus',
    subtitle: 'Thick-cut boneless pork chops baked with tender spears of asparagus.',
    description: 'Juicy pork chops seasoned with garlic, thyme, and olive oil baked on one sheet pan for zero dish clean-up.',
    category: 'Dinner',
    prepTime: 10,
    cookTime: 18,
    servings: 2,
    difficulty: 'Easy',
    isFavorite: false,
    imageUrl: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=1200&auto=format&fit=crop',
    tags: ['Dinner', 'High Protein', 'Quick & Easy', 'Pork'],
    nutrition: { calories: 440, protein: '48g', carbs: '6g', fat: '24g' },
    ingredients: [
      { id: 'm11-1', name: 'Thick Boneless Pork Chops', amount: 2, unit: 'chops', category: 'Meat & Seafood' },
      { id: 'm11-2', name: 'Fresh Asparagus (trimmed)', amount: 1, unit: 'bunch', category: 'Produce' },
      { id: 'm11-3', name: 'Olive Oil', amount: 2, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm11-4', name: 'Garlic Powder, Dried Thyme, Salt, Pepper', amount: 1, unit: 'tbsp', category: 'Spices & Seasoning' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Arrange pork chops and asparagus on a parchment-lined baking sheet.' },
      { id: 'st2', stepNumber: 2, text: 'Drizzle olive oil and rub seasonings over pork and asparagus.' },
      { id: 'st3', stepNumber: 3, text: 'Roast at 425°F (220°C) for 15-18 minutes until internal pork temperature reaches 145°F.', timerMinutes: 16 }
    ],
    notes: 'Simple, healthy, 30-minute clean eating.',
    createdAt: Date.now() - 12000,
    updatedAt: Date.now() - 12000
  },
  {
    id: 'men-12',
    title: 'Korean BBQ Gochujang Glazed Meatballs',
    subtitle: 'Juicy beef and pork meatballs tossed in sticky sweet-spicy gochujang glaze.',
    description: 'Savory meatballs baked to perfection and glazed in a spicy Korean pepper paste sauce with sesame.',
    category: 'Dinner',
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=1200&auto=format&fit=crop',
    tags: ['Dinner', 'High Protein', 'Asian Fusion', 'Aesthetic'],
    nutrition: { calories: 470, protein: '34g', carbs: '24g', fat: '26g' },
    ingredients: [
      { id: 'm12-1', name: 'Ground Beef or Pork', amount: 1.2, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'm12-2', name: 'Panko Breadcrumbs & Egg', amount: 0.5, unit: 'cup', category: 'Pantry & Grains' },
      { id: 'm12-3', name: 'Korean Gochujang Paste', amount: 3, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm12-4', name: 'Honey & Soy Sauce', amount: 2, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm12-5', name: 'Grated Ginger & Garlic', amount: 1, unit: 'tbsp', category: 'Produce' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Mix ground meat, breadcrumbs, egg, garlic, and ginger. Roll into golf ball size meatballs.' },
      { id: 'st2', stepNumber: 2, text: 'Bake at 400°F (200°C) for 15 minutes until browned.', timerMinutes: 15 },
      { id: 'st3', stepNumber: 3, text: 'Simmer gochujang, honey, soy sauce, and sesame oil in pan. Toss meatballs until completely coated.' }
    ],
    notes: 'Serve over steamed rice with sliced scallions and toasted sesame.',
    createdAt: Date.now() - 10000,
    updatedAt: Date.now() - 10000
  },
  {
    id: 'men-13',
    title: 'Crispy Blackened Salmon Tacos with Avocado Lime Crema',
    subtitle: 'Flaky Cajun blackened salmon on warm corn tortillas with shredded purple cabbage.',
    description: 'Spicy blackened salmon flakes paired with cooling avocado lime crema and crunchy cabbage slaw.',
    category: 'Lunch',
    prepTime: 15,
    cookTime: 10,
    servings: 3,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=1200&auto=format&fit=crop',
    tags: ['Lunch', 'Seafood', 'Tacos', 'High Protein', 'Aesthetic'],
    nutrition: { calories: 460, protein: '34g', carbs: '32g', fat: '22g' },
    ingredients: [
      { id: 'm13-1', name: 'Salmon Fillets', amount: 1, unit: 'lb', category: 'Meat & Seafood' },
      { id: 'm13-2', name: 'Blackening Seasoning (Cajun)', amount: 2, unit: 'tbsp', category: 'Spices & Seasoning' },
      { id: 'm13-3', name: 'Small Street Taco Corn Tortillas', amount: 6, unit: 'tortillas', category: 'Bakery' },
      { id: 'm13-4', name: 'Shredded Purple Cabbage', amount: 1.5, unit: 'cups', category: 'Produce' },
      { id: 'm13-5', name: 'Avocado, Sour Cream & Lime (pureed)', amount: 1, unit: 'cup', category: 'Dairy & Eggs' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Coat salmon fillets generously with Cajun blackening spice.' },
      { id: 'st2', stepNumber: 2, text: 'Sear in cast iron with butter for 3 minutes per side until charred and cooked through.', timerMinutes: 6 },
      { id: 'st3', stepNumber: 3, text: 'Warm tortillas. Flake salmon into tortillas, top with cabbage and avocado crema drizzle.' }
    ],
    notes: 'Photo Tip: Stand three tacos in a taco holder over a wooden board garnished with lime wedges.',
    createdAt: Date.now() - 8000,
    updatedAt: Date.now() - 8000
  },
  {
    id: 'men-14',
    title: 'Garlic Parmesan Roasted Chicken Drumsticks',
    subtitle: 'Ultra crispy skin baked drumsticks coated in garlic butter and aged parmesan.',
    description: 'Economical, juicy chicken drumsticks roasted high heat until skin crackles, then tossed in warm garlic parmesan butter.',
    category: 'Dinner',
    prepTime: 10,
    cookTime: 35,
    servings: 4,
    difficulty: 'Easy',
    isFavorite: false,
    imageUrl: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=1200&auto=format&fit=crop',
    tags: ['Dinner', 'Chicken', 'High Protein', 'Quick & Easy'],
    nutrition: { calories: 430, protein: '38g', carbs: '2g', fat: '29g' },
    ingredients: [
      { id: 'm14-1', name: 'Chicken Drumsticks', amount: 8, unit: 'pieces', category: 'Meat & Seafood' },
      { id: 'm14-2', name: 'Melted Butter', amount: 3, unit: 'tbsp', category: 'Dairy & Eggs' },
      { id: 'm14-3', name: 'Grated Parmesan Cheese', amount: 0.5, unit: 'cup', category: 'Dairy & Eggs' },
      { id: 'm14-4', name: 'Garlic Powder & Italian Herb Seasoning', amount: 1, unit: 'tbsp', category: 'Spices & Seasoning' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Dry drumsticks thoroughly. Season with garlic powder, salt, pepper, and olive oil.' },
      { id: 'st2', stepNumber: 2, text: 'Roast at 425°F (220°C) for 35 minutes until internal temp reaches 175°F.', timerMinutes: 35 },
      { id: 'st3', stepNumber: 3, text: 'Toss hot drumsticks in melted butter and grated parmesan cheese.' }
    ],
    notes: 'Inexpensive high-protein muscle fuel.',
    createdAt: Date.now() - 6000,
    updatedAt: Date.now() - 6000
  },
  {
    id: 'men-15',
    title: 'Grilled Chipotle Lime Shrimp Skewers',
    subtitle: 'Zesty chili lime marinated jumbo shrimp charred over high heat.',
    description: 'Juicy jumbo shrimp marinated in chipotle peppers, lime juice, garlic, and cilantro grilled in under 5 minutes.',
    category: 'Dinner',
    prepTime: 10,
    cookTime: 5,
    servings: 2,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1559737605-177c22d6f228?q=80&w=1200&auto=format&fit=crop',
    tags: ['Dinner', 'Seafood', 'High Protein', 'Grilling'],
    nutrition: { calories: 280, protein: '36g', carbs: '6g', fat: '12g' },
    ingredients: [
      { id: 'm15-1', name: 'Jumbo Shrimp (peeled & deveined)', amount: 1, unit: 'lb', category: 'Meat & Seafood' },
      { id: 'm15-2', name: 'Chipotle in Adobo (minced)', amount: 1, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm15-3', name: 'Fresh Lime Juice & Zest', amount: 2, unit: 'limes', category: 'Produce' },
      { id: 'm15-4', name: 'Garlic & Cilantro', amount: 2, unit: 'tbsp', category: 'Produce' },
      { id: 'm15-5', name: 'Olive Oil', amount: 2, unit: 'tbsp', category: 'Pantry & Grains' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Toss shrimp with chipotle, lime juice, garlic, olive oil, and salt. Thread onto skewers.' },
      { id: 'st2', stepNumber: 2, text: 'Grill on high heat for 2 minutes per side until pink and opaque.', timerMinutes: 4 },
      { id: 'st3', stepNumber: 3, text: 'Sprinkle with fresh chopped cilantro and squeeze fresh lime.' }
    ],
    notes: 'Light, fresh, and packs 36g protein per serving.',
    createdAt: Date.now() - 5000,
    updatedAt: Date.now() - 5000
  }
];
