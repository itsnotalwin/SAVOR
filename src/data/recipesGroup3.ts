import { Recipe } from '../types';

export const RECIPES_GROUP_3: Recipe[] = [
  {
    id: 'men-26',
    title: '10-Minute Spicy Garlic Chili Oil Noodles',
    subtitle: 'Thick chewy ramen noodles drenched in sizzling chili flakes, garlic, soy sauce, and hot oil.',
    description: 'The viral late-night noodle sensation. Hot sizzling neutral oil poured over raw garlic, chili flakes, scallions, and soy sauce creates an instant silky aromatic sauce.',
    category: 'Quick & Easy',
    prepTime: 3,
    cookTime: 5,
    servings: 1,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1200&auto=format&fit=crop',
    tags: ['Quick & Easy', 'Asian Fusion', 'Vegetarian', 'Aesthetic', 'Late Night'],
    nutrition: { calories: 420, protein: '11g', carbs: '56g', fat: '18g' },
    ingredients: [
      { id: 'm26-1', name: 'Thick Ramen Noodles or Udon / Knife-Cut Noodles', amount: 1, unit: 'pack', category: 'Pantry & Grains' },
      { id: 'm26-2', name: 'Fresh Garlic (minced)', amount: 3, unit: 'cloves', category: 'Produce' },
      { id: 'm26-3', name: 'Sichuan Red Chili Flakes or Gochugaru', amount: 1, unit: 'tbsp', category: 'Spices & Seasoning' },
      { id: 'm26-4', name: 'Chopped Scallions / Green Onions', amount: 2, unit: 'stalks', category: 'Produce' },
      { id: 'm26-5', name: 'Soy Sauce & Chinese Black Vinegar', amount: 1.5, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm26-6', name: 'Neutral Oil (Avocado/Vegetable)', amount: 2, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm26-7', name: 'Soft-Boiled Egg or Fried Egg', amount: 1, unit: 'large', category: 'Dairy & Eggs' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Boil noodles according to package instructions until chewy. Drain well and place in a heatproof serving bowl.', timerMinutes: 4 },
      { id: 'st2', stepNumber: 2, text: 'Pile minced garlic, chili flakes, chopped scallions, and sesame seeds directly on top of the cooked noodles.' },
      { id: 'st3', stepNumber: 3, text: 'Heat oil in a small pan until smoking hot. Carefully pour hot oil over the garlic and spices to sizzle and bloom flavors.', tip: 'Hear the loud sizzle! It cooks the garlic in seconds.' },
      { id: 'st4', stepNumber: 4, text: 'Add soy sauce and black vinegar. Toss vigorously until noodles are glossed. Top with a runny fried egg.' }
    ],
    notes: 'Photo Tip: Capture the golden runny egg yolk breaking over the glossy red chili noodles.',
    createdAt: Date.now() - 500,
    updatedAt: Date.now() - 500
  },
  {
    id: 'men-27',
    title: 'Cacio e Pepe with Crispy Prosciutto',
    subtitle: 'Classic Roman pasta emulsified with pecorino romano, black pepper & crispy prosciutto.',
    description: 'Minimalist Italian perfection. Bucatini pasta tossed with starchy pasta water, aged Pecorino Romano, freshly cracked black pepper, and topped with crisp prosciutto shards.',
    category: 'Dinner',
    prepTime: 5,
    cookTime: 12,
    servings: 2,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281318?q=80&w=1200&auto=format&fit=crop',
    tags: ['Dinner', 'Pasta', 'Italian', 'Aesthetic'],
    nutrition: { calories: 510, protein: '22g', carbs: '64g', fat: '18g' },
    ingredients: [
      { id: 'm27-1', name: 'Bucatini or Spaghetti Pasta', amount: 0.5, unit: 'lb', category: 'Pantry & Grains' },
      { id: 'm27-2', name: 'Finely Grated Pecorino Romano Cheese', amount: 1, unit: 'cup', category: 'Dairy & Eggs' },
      { id: 'm27-3', name: 'Coarsely Cracked Whole Black Peppercorns', amount: 1, unit: 'tbsp', category: 'Spices & Seasoning' },
      { id: 'm27-4', name: 'Prosciutto Slices (crisped)', amount: 4, unit: 'slices', category: 'Meat & Seafood' },
      { id: 'm27-5', name: 'Reserved Starchy Pasta Water', amount: 0.75, unit: 'cup', category: 'Pantry & Grains' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Crisp prosciutto slices in skillet over medium heat for 3 minutes until crunchy. Set aside.' },
      { id: 'st2', stepNumber: 2, text: 'Toast cracked black peppercorns in dry skillet until aromatic. Add 1/2 cup pasta water.', timerMinutes: 2 },
      { id: 'st3', stepNumber: 3, text: 'Boil pasta 2 mins under al dente. Transfer pasta into skillet with pepper water.' },
      { id: 'st4', stepNumber: 4, text: 'Remove from heat. Sprinkle Pecorino Romano while tossing rapidly with pasta water until a glossy creamy sauce forms.' }
    ],
    notes: 'No cream needed! Starchy pasta water + Pecorino = 100% natural emulsion.',
    createdAt: Date.now() - 400,
    updatedAt: Date.now() - 400
  },
  {
    id: 'men-28',
    title: 'Spicy Kimchi Fried Rice with Sunny Fried Egg & Bacon',
    subtitle: 'Smoky bacon, caramelized kimchi, gochujang, and jasmine rice topped with a runny egg.',
    description: 'Bold, tangy, spicy fried rice cooked in bacon fat with aged Kimchi, gochujang paste, sesame oil, and a crispy crispy-edged fried egg.',
    category: 'Dinner',
    prepTime: 5,
    cookTime: 10,
    servings: 2,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1200&auto=format&fit=crop',
    tags: ['Dinner', 'Quick & Easy', 'Asian Fusion', 'High Protein'],
    nutrition: { calories: 480, protein: '18g', carbs: '54g', fat: '22g' },
    ingredients: [
      { id: 'm28-1', name: 'Day-Old Cooked Jasmine Rice', amount: 2, unit: 'cups', category: 'Pantry & Grains' },
      { id: 'm28-2', name: 'Aged Napa Cabbage Kimchi (chopped)', amount: 1, unit: 'cup', category: 'Produce' },
      { id: 'm28-3', name: 'Thick Cut Bacon (diced)', amount: 3, unit: 'strips', category: 'Meat & Seafood' },
      { id: 'm28-4', name: 'Korean Gochujang Pepper Paste', amount: 1, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm28-5', name: 'Toasted Sesame Oil & Soy Sauce', amount: 1, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm28-6', name: 'Farm Fresh Eggs', amount: 2, unit: 'large', category: 'Dairy & Eggs' },
      { id: 'm28-7', name: 'Nori Seaweed Strips & Sesame Seeds', amount: 2, unit: 'tbsp', category: 'Pantry & Grains' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Crisp diced bacon in skillet. Add chopped kimchi and gochujang, sautéing for 3 minutes in bacon fat.', timerMinutes: 3 },
      { id: 'st2', stepNumber: 2, text: 'Add cold day-old rice, breaking up grains and tossing on high heat for 4 minutes until rice gets crisp bottom notes.', timerMinutes: 4 },
      { id: 'st3', stepNumber: 3, text: 'Drizzle sesame oil. Fry eggs sunny side up in a separate small pan with crispy edges.' },
      { id: 'st4', stepNumber: 4, text: 'Serve topped with fried egg, nori strips, and toasted sesame seeds.' }
    ],
    notes: 'The ultimate late-night comfort meal.',
    createdAt: Date.now() - 300,
    updatedAt: Date.now() - 300
  },
  {
    id: 'men-29',
    title: 'Chipotle Chicken Burrito Bowl with Cilantro Lime Rice',
    subtitle: 'Adobo grilled chicken breast, black beans, corn salsa, avocado & chipotle crema.',
    description: 'Skip the takeout line. High-protein meal prep bowl loaded with spiced chicken, fluffy cilantro lime rice, sweet corn salsa, and fresh guacamole.',
    category: 'Dinner',
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop',
    tags: ['Dinner', 'High Protein', 'Meal Prep', 'Mexican', 'Aesthetic'],
    nutrition: { calories: 560, protein: '46g', carbs: '58g', fat: '18g' },
    ingredients: [
      { id: 'm29-1', name: 'Chicken Breast (marinated in chipotle adobo)', amount: 1.5, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'm29-2', name: 'Cooked White Rice + Lime Juice & Cilantro', amount: 3, unit: 'cups', category: 'Pantry & Grains' },
      { id: 'm29-3', name: 'Black Beans & Sweet Corn (drained)', amount: 1, unit: 'can', category: 'Pantry & Grains' },
      { id: 'm29-4', name: 'Avocado or Guacamole', amount: 2, unit: 'whole', category: 'Produce' },
      { id: 'm29-5', name: 'Shredded Monterey Jack Cheese & Sour Cream', amount: 0.5, unit: 'cup', category: 'Dairy & Eggs' },
      { id: 'm29-6', name: 'Pico de Gallo Tomato Salsa', amount: 1, unit: 'cup', category: 'Produce' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Grill or pan-sear marinated chipotle chicken for 6-7 minutes per side until charred and internal temp reaches 165°F.', timerMinutes: 14 },
      { id: 'st2', stepNumber: 2, text: 'Fluff warm rice with lime juice, sea salt, and chopped fresh cilantro.' },
      { id: 'st3', stepNumber: 3, text: 'Slice chicken into strips. Build bowls with rice, black beans, corn, grilled chicken, guacamole, salsa, and sour cream.' }
    ],
    notes: 'Makes 4 full gym meal-prep containers for the week.',
    createdAt: Date.now() - 200,
    updatedAt: Date.now() - 200
  },
  {
    id: 'men-30',
    title: 'Rich Chashu Pork Belly Ramen with Soft Egg',
    subtitle: 'Rich pork broth with chewy noodles, seared pork belly, bamboo shoots & soft egg.',
    description: 'Comfort in a bowl. Rich tonkotsu broth with chewy ramen noodles, melt-in-your-mouth seared chashu pork belly, scallions, and jammy ramen egg.',
    category: 'Dinner',
    prepTime: 15,
    cookTime: 15,
    servings: 2,
    difficulty: 'Medium',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1200&auto=format&fit=crop',
    tags: ['Dinner', 'Ramen', 'High Protein', 'Aesthetic'],
    nutrition: { calories: 640, protein: '38g', carbs: '52g', fat: '32g' },
    ingredients: [
      { id: 'm30-1', name: 'Fresh Ramen Noodles', amount: 2, unit: 'packs', category: 'Pantry & Grains' },
      { id: 'm30-2', name: 'Sliced Pork Belly or Chashu Pork', amount: 0.5, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'm30-3', name: 'Tonkotsu Ramen Broth Base or Pork/Chicken Stock', amount: 4, unit: 'cups', category: 'Pantry & Grains' },
      { id: 'm30-4', name: 'Marinated Soft-Boiled Eggs (Ajitsuke Tamago)', amount: 2, unit: 'eggs', category: 'Dairy & Eggs' },
      { id: 'm30-5', name: 'Menma Bamboo Shoots & Nori Seaweed', amount: 2, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm30-6', name: 'Chopped Green Onions & Chili Oil', amount: 2, unit: 'tbsp', category: 'Produce' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Sear pork belly slices in a blowtorch or hot skillet until charred and crispy on the edges.', timerMinutes: 4 },
      { id: 'st2', stepNumber: 2, text: 'Bring ramen broth to a rolling boil. Boil noodles for 2 minutes.' },
      { id: 'st3', stepNumber: 3, text: 'Ladle hot broth and noodles into deep ramen bowls. Top with seared pork belly, halved soft egg, menma, nori sheet, and scallions.' }
    ],
    notes: 'Photo Tip: Place the nori sheet standing tall against the bowl wall with the jammy egg sliced in half showing.',
    createdAt: Date.now() - 150,
    updatedAt: Date.now() - 150
  },
  {
    id: 'men-31',
    title: 'One-Pan Skillet Beef & Pepper Fajitas',
    subtitle: 'Sizzling seasoned sirloin strips with colorful peppers, onions, and warm flour tortillas.',
    description: 'Sizzling steakhouse fajitas seasoned with cumin, garlic, chili powder, lime, and cilantro served straight from a cast iron pan.',
    category: 'Dinner',
    prepTime: 10,
    cookTime: 10,
    servings: 3,
    difficulty: 'Easy',
    isFavorite: false,
    imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1200&auto=format&fit=crop',
    tags: ['Dinner', 'Steak', 'High Protein', 'Cast Iron'],
    nutrition: { calories: 520, protein: '44g', carbs: '38g', fat: '22g' },
    ingredients: [
      { id: 'm31-1', name: 'Flank or Sirloin Steak (thinly sliced)', amount: 1.2, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'm31-2', name: 'Red & Green Bell Peppers (sliced)', amount: 2, unit: 'whole', category: 'Produce' },
      { id: 'm31-3', name: 'Yellow Onion (sliced)', amount: 1, unit: 'whole', category: 'Produce' },
      { id: 'm31-4', name: 'Fajita Seasoning (Chili, Cumin, Garlic)', amount: 2, unit: 'tbsp', category: 'Spices & Seasoning' },
      { id: 'm31-5', name: 'Flour Tortillas & Lime', amount: 6, unit: 'tortillas', category: 'Bakery' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Sear steak strips in a hot oiled cast iron skillet for 3 minutes until browned. Remove.' },
      { id: 'st2', stepNumber: 2, text: 'Sauté bell peppers and onions in skillet with fajita seasoning until tender-crisp (5 mins).', timerMinutes: 5 },
      { id: 'st3', stepNumber: 3, text: 'Return steak to skillet, squeeze fresh lime juice, and serve sizzling with warm tortillas.' }
    ],
    notes: 'Serve with sour cream and guacamole.',
    createdAt: Date.now() - 120,
    updatedAt: Date.now() - 120
  },
  {
    id: 'men-32',
    title: 'Creamy Tuscan Garlic Sausage Gnocchi',
    subtitle: 'Pillow-soft potato gnocchi and Italian sausage in sun-dried tomato garlic sauce.',
    description: 'Soft potato gnocchi simmered in a velvety garlic parmesan cream sauce with browned Italian sausage, sun-dried tomatoes, and spinach.',
    category: 'Dinner',
    prepTime: 10,
    cookTime: 15,
    servings: 3,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281318?q=80&w=1200&auto=format&fit=crop',
    tags: ['Dinner', 'Pasta', 'Italian', 'Quick & Easy'],
    nutrition: { calories: 580, protein: '28g', carbs: '52g', fat: '30g' },
    ingredients: [
      { id: 'm32-1', name: 'Potato Gnocchi', amount: 1, unit: 'pack (16oz)', category: 'Pantry & Grains' },
      { id: 'm32-2', name: 'Mild Italian Sausage (casing removed)', amount: 0.8, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'm32-3', name: 'Heavy Cream or Milk', amount: 0.75, unit: 'cup', category: 'Dairy & Eggs' },
      { id: 'm32-4', name: 'Sun-Dried Tomatoes (chopped)', amount: 0.33, unit: 'cup', category: 'Pantry & Grains' },
      { id: 'm32-5', name: 'Baby Spinach & Minced Garlic', amount: 2, unit: 'cups', category: 'Produce' },
      { id: 'm32-6', name: 'Grated Parmesan', amount: 0.5, unit: 'cup', category: 'Dairy & Eggs' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Brown Italian sausage crumble in skillet for 6 minutes until cooked through.', timerMinutes: 6 },
      { id: 'st2', stepNumber: 2, text: 'Boil gnocchi in salted water for 2 minutes until they float.' },
      { id: 'st3', stepNumber: 3, text: 'Add garlic, sun-dried tomatoes, cream, and parmesan to sausage skillet. Simmer 2 minutes. Fold in cooked gnocchi and spinach until wilted.' }
    ],
    notes: 'Comforting 20-minute Italian dinner.',
    createdAt: Date.now() - 100,
    updatedAt: Date.now() - 100
  },
  {
    id: 'men-33',
    title: 'Teriyaki Chicken Stir-Fry with Broccoli & Rice',
    subtitle: 'Classic sweet & savory chicken breast stir-fry with tender broccoli florets.',
    description: 'Quick weeknight stir-fry with seared chicken breast, crisp broccoli, bell peppers, and homemade teriyaki glaze over warm white rice.',
    category: 'Quick & Easy',
    prepTime: 10,
    cookTime: 12,
    servings: 3,
    difficulty: 'Easy',
    isFavorite: false,
    imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop',
    tags: ['Quick & Easy', 'Chicken', 'High Protein', 'Meal Prep'],
    nutrition: { calories: 450, protein: '42g', carbs: '52g', fat: '8g' },
    ingredients: [
      { id: 'm33-1', name: 'Boneless Chicken Breast (cubed)', amount: 1.2, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'm33-2', name: 'Fresh Broccoli Florets', amount: 3, unit: 'cups', category: 'Produce' },
      { id: 'm33-3', name: 'Teriyaki Sauce', amount: 0.5, unit: 'cup', category: 'Pantry & Grains' },
      { id: 'm33-4', name: 'Cooked White Rice', amount: 3, unit: 'cups', category: 'Pantry & Grains' },
      { id: 'm33-5', name: 'Sesame Seeds & Green Onions', amount: 2, unit: 'tbsp', category: 'Produce' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Sear cubed chicken in wok with oil until browned (6 mins). Remove chicken.', timerMinutes: 6 },
      { id: 'st2', stepNumber: 2, text: 'Stir-fry broccoli with 2 tbsp water until tender-crisp (3 mins).' },
      { id: 'st3', stepNumber: 3, text: 'Return chicken, pour teriyaki sauce, and toss together for 2 minutes until glaze coats everything. Serve over rice.' }
    ],
    notes: 'Healthy high-protein meal prep staple.',
    createdAt: Date.now() - 90,
    updatedAt: Date.now() - 90
  },
  {
    id: 'men-34',
    title: 'Spicy Sausage & Rigatoni Alla Vodka',
    subtitle: 'Rigatoni pasta coated in silky tomato cream vodka sauce with spicy Italian sausage.',
    description: 'Gourmet restaurant vodka pasta with crispy crumbled spicy Italian sausage, crushed Calabrian chili, tomato paste, heavy cream, and Parmigiano.',
    category: 'Dinner',
    prepTime: 10,
    cookTime: 18,
    servings: 4,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281318?q=80&w=1200&auto=format&fit=crop',
    tags: ['Dinner', 'Pasta', 'Italian', 'Aesthetic'],
    nutrition: { calories: 590, protein: '26g', carbs: '62g', fat: '28g' },
    ingredients: [
      { id: 'm34-1', name: 'Rigatoni or Penne Pasta', amount: 1, unit: 'lb', category: 'Pantry & Grains' },
      { id: 'm34-2', name: 'Spicy Italian Sausage', amount: 0.8, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'm34-3', name: 'Tomato Paste', amount: 4, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm34-4', name: 'Vodka or Pasta Water', amount: 0.25, unit: 'cup', category: 'Pantry & Grains' },
      { id: 'm34-5', name: 'Heavy Cream', amount: 0.66, unit: 'cup', category: 'Dairy & Eggs' },
      { id: 'm34-6', name: 'Fresh Basil & Parmigiano Reggiano', amount: 0.5, unit: 'cup', category: 'Dairy & Eggs' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Brown spicy sausage crumbles in olive oil. Add tomato paste and minced garlic, caramelized for 3 minutes.', timerMinutes: 3 },
      { id: 'st2', stepNumber: 2, text: 'Deglaze pan with vodka, let simmer off for 2 minutes. Stir in heavy cream to create orange silky sauce.' },
      { id: 'st3', stepNumber: 3, text: 'Boil rigatoni al dente. Toss rigatoni directly into vodka sauce with 1/2 cup starchy pasta water and grated Parmigiano.' }
    ],
    notes: 'Looks like an authentic NYC Italian trattoria plate.',
    createdAt: Date.now() - 80,
    updatedAt: Date.now() - 80
  },
  {
    id: 'men-35',
    title: 'Mongolian Beef with Crispy Scallions',
    subtitle: 'Flank steak seared crisp and tossed in sweet garlic soy ginger glaze.',
    description: 'Better than takeout. Flank steak coated in cornstarch, fried super crispy, and tossed in a rich dark brown sugar soy glaze with thick cut scallions.',
    category: 'Dinner',
    prepTime: 15,
    cookTime: 10,
    servings: 3,
    difficulty: 'Easy',
    isFavorite: false,
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    tags: ['Dinner', 'Steak', 'Asian Fusion', 'High Protein'],
    nutrition: { calories: 510, protein: '40g', carbs: '32g', fat: '24g' },
    ingredients: [
      { id: 'm35-1', name: 'Flank Steak (thinly sliced across grain)', amount: 1.2, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'm35-2', name: 'Cornstarch for coating', amount: 0.25, unit: 'cup', category: 'Pantry & Grains' },
      { id: 'm35-3', name: 'Dark Soy Sauce & Brown Sugar', amount: 3, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm35-4', name: 'Grated Ginger & Garlic', amount: 1, unit: 'tbsp', category: 'Produce' },
      { id: 'm35-5', name: 'Green Onions (cut into 2-inch stalks)', amount: 1, unit: 'bunch', category: 'Produce' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Toss sliced flank steak with cornstarch until evenly coated.' },
      { id: 'st2', stepNumber: 2, text: 'Shallow fry beef in hot oil for 2 minutes per side until super crunchy and browned. Remove beef.', timerMinutes: 4 },
      { id: 'st3', stepNumber: 3, text: 'Simmer soy sauce, brown sugar, ginger, and garlic in pan until thick syrup. Toss crispy beef and green onion stalks for 1 minute.' }
    ],
    notes: 'Ultra crisp texture on the steak!',
    createdAt: Date.now() - 70,
    updatedAt: Date.now() - 70
  }
];
