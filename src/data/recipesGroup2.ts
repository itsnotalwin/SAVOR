import { Recipe } from '../types';

export const RECIPES_GROUP_2: Recipe[] = [
  {
    id: 'men-16',
    title: 'Double Crispy Edge Smash Burger with Secret Sauce',
    subtitle: 'Two lacy-edged beef patties smashed thin with melted American cheese on toasted potato buns.',
    description: 'The golden standard smash burger. Smashed flat on a piping hot griddle for crisp caramelized lace edges and juicy center.',
    category: 'Dinner',
    prepTime: 10,
    cookTime: 6,
    servings: 2,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop',
    tags: ['Dinner', 'Burgers', 'High Protein', 'Aesthetic', 'Cast Iron'],
    nutrition: { calories: 650, protein: '42g', carbs: '36g', fat: '38g' },
    ingredients: [
      { id: 'm16-1', name: '80/20 Ground Beef (portioned into 2oz balls)', amount: 0.8, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'm16-2', name: 'American Cheese Slices', amount: 4, unit: 'slices', category: 'Dairy & Eggs' },
      { id: 'm16-3', name: 'Martin’s Potato Buns', amount: 2, unit: 'buns', category: 'Bakery' },
      { id: 'm16-4', name: 'Dill Pickle Slices & Diced Yellow Onion', amount: 0.5, unit: 'cup', category: 'Produce' },
      { id: 'm16-5', name: 'Mayo, Ketchup, Relish, Mustard (Secret Sauce)', amount: 3, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm16-6', name: 'Butter', amount: 1.5, unit: 'tbsp', category: 'Dairy & Eggs' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Mix mayo, ketchup, relish, and mustard in a small dish for special sauce.' },
      { id: 'st2', stepNumber: 2, text: 'Butter and toast potato buns until golden brown in a cast iron pan. Set aside.' },
      { id: 'st3', stepNumber: 3, text: 'Place beef balls onto screaming hot skillet. Press down hard with a heavy burger press for 10 seconds until paper thin.', tip: 'Use parchment paper under press so meat doesn’t stick.' },
      { id: 'st4', stepNumber: 4, text: 'Sear for 2 minutes until edges are crispy black-brown. Flip, immediately crown with cheese, and stack patties after 1 minute.', timerMinutes: 3 },
      { id: 'st5', stepNumber: 5, text: 'Assemble on toasted bun with secret sauce, pickles, and diced onions.' }
    ],
    notes: 'Photo Tip: Cut in half diagonally and stack one half angled over the other to show melted cheese layers.',
    createdAt: Date.now() - 4000,
    updatedAt: Date.now() - 4000
  },
  {
    id: 'men-17',
    title: 'Argentinian Chimichurri Steak Sandwich',
    subtitle: 'Sliced seared flank steak with melted provolone and fresh chimichurri on toasted ciabatta.',
    description: 'Juicy sliced steak layered on crusty toasted ciabatta with garlic aioli, melted provolone, and herbaceous chimichurri.',
    category: 'Lunch',
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1200&auto=format&fit=crop',
    tags: ['Lunch', 'Sandwiches', 'High Protein', 'Steak'],
    nutrition: { calories: 590, protein: '45g', carbs: '42g', fat: '28g' },
    ingredients: [
      { id: 'm17-1', name: 'Flank or Ribeye Steak (seared & sliced)', amount: 0.8, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'm17-2', name: 'Ciabatta Rolls', amount: 2, unit: 'rolls', category: 'Bakery' },
      { id: 'm17-3', name: 'Provolone Cheese Slices', amount: 2, unit: 'slices', category: 'Dairy & Eggs' },
      { id: 'm17-4', name: 'Fresh Chimichurri Sauce', amount: 4, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm17-5', name: 'Garlic Aioli / Mayo', amount: 2, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm17-6', name: 'Baby Arugula', amount: 1, unit: 'cup', category: 'Produce' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Slice ciabatta rolls in half, spread garlic aioli, and toast under oven broiler.' },
      { id: 'st2', stepNumber: 2, text: 'Sear seasoned steak over high heat until medium rare (4 mins per side). Slice thinly across the grain.', timerMinutes: 8 },
      { id: 'st3', stepNumber: 3, text: 'Pile steak onto ciabatta, top with provolone, melt under broiler for 1 minute, and spoon chimichurri generously.' }
    ],
    notes: 'Heavyweight steakhouse sandwich for game days.',
    createdAt: Date.now() - 3000,
    updatedAt: Date.now() - 3000
  },
  {
    id: 'men-18',
    title: 'Japanese Crispy Chicken Katsu Sando',
    subtitle: 'Panko crusted fried chicken cutlet on soft Japanese milk bread with tonkatsu sauce.',
    description: 'Ultra crunchy panko fried chicken breast nestled inside pillowy shokupan bread with shredded cabbage and tangy tonkatsu glaze.',
    category: 'Lunch',
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1200&auto=format&fit=crop',
    tags: ['Lunch', 'Sandwiches', 'Chicken', 'Aesthetic'],
    nutrition: { calories: 580, protein: '40g', carbs: '52g', fat: '22g' },
    ingredients: [
      { id: 'm18-1', name: 'Chicken Breasts (pounded thin)', amount: 2, unit: 'cutlets', category: 'Meat & Seafood' },
      { id: 'm18-2', name: 'Japanese Panko Breadcrumbs', amount: 1, unit: 'cup', category: 'Pantry & Grains' },
      { id: 'm18-3', name: 'Egg & Flour for Dredging', amount: 1, unit: 'egg', category: 'Dairy & Eggs' },
      { id: 'm18-4', name: 'Japanese Milk Bread (Shokupan) or Brioche', amount: 4, unit: 'slices', category: 'Bakery' },
      { id: 'm18-5', name: 'Japanese Tonkatsu Sauce & Kewpie Mayo', amount: 3, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm18-6', name: 'Shredded Green Cabbage', amount: 1, unit: 'cup', category: 'Produce' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Dredge chicken cutlets in flour, beaten egg, and panko breadcrumbs.' },
      { id: 'st2', stepNumber: 2, text: 'Shallow fry in vegetable oil over medium-high heat for 3-4 minutes per side until golden brown and crispy.', timerMinutes: 8 },
      { id: 'st3', stepNumber: 3, text: 'Spread Kewpie mayo and tonkatsu sauce on bread slices. Sandwich chicken with shredded cabbage, slice crusts off if desired.' }
    ],
    notes: 'Photo Tip: Cut sandwich straight down the center to reveal the golden katsu cross-section.',
    createdAt: Date.now() - 2500,
    updatedAt: Date.now() - 2500
  },
  {
    id: 'men-19',
    title: 'Philly Cheesesteak Skillet with Melted Provolone',
    subtitle: 'Shaved ribeye steak sizzled with sweet peppers, onions, and gooey provolone.',
    description: 'Thinly sliced ribeye steak seared on high heat with caramelized onions and peppers smothered in melted cheese.',
    category: 'Dinner',
    prepTime: 10,
    cookTime: 12,
    servings: 3,
    difficulty: 'Easy',
    isFavorite: false,
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1200&auto=format&fit=crop',
    tags: ['Dinner', 'Steak', 'High Protein', 'Quick & Easy'],
    nutrition: { calories: 580, protein: '46g', carbs: '28g', fat: '32g' },
    ingredients: [
      { id: 'm19-1', name: 'Shaved Ribeye Steak', amount: 1, unit: 'lb', category: 'Meat & Seafood' },
      { id: 'm19-2', name: 'Yellow Onion & Bell Pepper (sliced)', amount: 2, unit: 'whole', category: 'Produce' },
      { id: 'm19-3', name: 'Provolone Cheese Slices', amount: 6, unit: 'slices', category: 'Dairy & Eggs' },
      { id: 'm19-4', name: 'Hagie or Amoroso Hoagie Rolls', amount: 3, unit: 'rolls', category: 'Bakery' },
      { id: 'm19-5', name: 'Butter & Garlic Powder', amount: 2, unit: 'tbsp', category: 'Dairy & Eggs' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Sauté sliced onions and bell peppers in oil until caramelized (6-8 mins).' },
      { id: 'st2', stepNumber: 2, text: 'Push veggies aside, chop shaved ribeye into skillet and sear until browned.' },
      { id: 'st3', stepNumber: 3, text: 'Mix meat and veggies together, lay provolone slices over top, turn off heat, and cover until melted. Scoop into toasted hoagie rolls.' }
    ],
    notes: 'Classic Philly street food cooked right in your skillet.',
    createdAt: Date.now() - 2000,
    updatedAt: Date.now() - 2000
  },
  {
    id: 'men-20',
    title: 'Crispy Birria Style Quesatacos',
    subtitle: 'Slow simmered shredded beef tacos dipped in consommé broth and grilled crispy.',
    description: 'Tortillas dipped in rich chili beef oil, stuffed with melted Oaxaca cheese and tender shredded beef, grilled until crunchy and served with warm consommé broth.',
    category: 'Dinner',
    prepTime: 20,
    cookTime: 15,
    servings: 3,
    difficulty: 'Medium',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1200&auto=format&fit=crop',
    tags: ['Dinner', 'Tacos', 'High Protein', 'Aesthetic', 'Mexican'],
    nutrition: { calories: 620, protein: '48g', carbs: '32g', fat: '34g' },
    ingredients: [
      { id: 'm20-1', name: 'Shredded Slow-Cooked Beef or Birria', amount: 1, unit: 'lb', category: 'Meat & Seafood' },
      { id: 'm20-2', name: 'Birria Consommé Broth / Oil', amount: 1, unit: 'cup', category: 'Pantry & Grains' },
      { id: 'm20-3', name: 'Oaxaca or Mozzarella Cheese (shredded)', amount: 1.5, unit: 'cups', category: 'Dairy & Eggs' },
      { id: 'm20-4', name: 'Corn Tortillas', amount: 6, unit: 'tortillas', category: 'Bakery' },
      { id: 'm20-5', name: 'Diced White Onion & Fresh Cilantro', amount: 0.5, unit: 'cup', category: 'Produce' },
      { id: 'm20-6', name: 'Lime Wedges', amount: 2, unit: 'limes', category: 'Produce' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Dip corn tortillas into top chili oil layer of warm birria consommé.' },
      { id: 'st2', stepNumber: 2, text: 'Place tortillas onto hot skillet. Layer cheese and shredded beef on one half.' },
      { id: 'st3', stepNumber: 3, text: 'Fold over into taco shapes and fry for 2-3 minutes per side until deeply crisp and cheese melts.', timerMinutes: 6 },
      { id: 'st4', stepNumber: 4, text: 'Serve with a bowl of hot consommé topped with cilantro and onions for dipping.' }
    ],
    notes: 'Photo Tip: Capture the cheese pull as you dip a crispy taco into the dark red consommé broth.',
    createdAt: Date.now() - 1800,
    updatedAt: Date.now() - 1800
  },
  {
    id: 'men-21',
    title: 'Gourmet Grilled Cheese with Crispy Bacon & Fig Jam',
    subtitle: 'Sharp cheddar and creamy brie melted on sourdough with smoky bacon & sweet fig spread.',
    description: 'An elevated grilled cheese sandwich balancing salty crispy bacon, sharp cheddar, soft brie, and sweet fig jam on buttered sourdough.',
    category: 'Lunch',
    prepTime: 5,
    cookTime: 10,
    servings: 1,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1200&auto=format&fit=crop',
    tags: ['Lunch', 'Sandwiches', 'Quick & Easy', 'Aesthetic'],
    nutrition: { calories: 540, protein: '22g', carbs: '44g', fat: '32g' },
    ingredients: [
      { id: 'm21-1', name: 'Thick Sliced Sourdough Bread', amount: 2, unit: 'slices', category: 'Bakery' },
      { id: 'm21-2', name: 'Aged Sharp Cheddar Cheese', amount: 2, unit: 'slices', category: 'Dairy & Eggs' },
      { id: 'm21-3', name: 'Brie Cheese (sliced)', amount: 2, unit: 'slices', category: 'Dairy & Eggs' },
      { id: 'm21-4', name: 'Cooked Crispy Bacon', amount: 3, unit: 'strips', category: 'Meat & Seafood' },
      { id: 'm21-5', name: 'Fig Jam / Fig Spread', amount: 1.5, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm21-6', name: 'Butter or Mayo for crust', amount: 1, unit: 'tbsp', category: 'Dairy & Eggs' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Spread fig jam on inside of sourdough slices. Layer cheddar, bacon strips, and brie slices.' },
      { id: 'st2', stepNumber: 2, text: 'Spread thin layer of mayo or butter on outside bread surfaces.' },
      { id: 'st3', stepNumber: 3, text: 'Toast in skillet over medium-low heat for 4 minutes per side until bread is golden and cheeses are completely melted.', timerMinutes: 8 }
    ],
    notes: 'The mayonnaise trick on the outer bread yields an extra crunchy, non-burnt crust.',
    createdAt: Date.now() - 1500,
    updatedAt: Date.now() - 1500
  },
  {
    id: 'men-22',
    title: 'Pressed Cuban Sandwich (El Cubano)',
    subtitle: 'Mojo roasted pork, ham, Swiss cheese, pickles, and yellow mustard pressed crispy.',
    description: 'The legendary Miami sandwich. Slow-roasted pork, savory ham, Swiss cheese, and dill pickles pressed flat on Cuban bread until crisp.',
    category: 'Lunch',
    prepTime: 10,
    cookTime: 8,
    servings: 2,
    difficulty: 'Easy',
    isFavorite: false,
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1200&auto=format&fit=crop',
    tags: ['Lunch', 'Sandwiches', 'Pork', 'High Protein'],
    nutrition: { calories: 580, protein: '42g', carbs: '40g', fat: '28g' },
    ingredients: [
      { id: 'm22-1', name: 'Cuban Bread or French Baguette', amount: 1, unit: 'loaf', category: 'Bakery' },
      { id: 'm22-2', name: 'Roasted Pork Shoulder (sliced)', amount: 0.5, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'm22-3', name: 'Deli Sliced Ham', amount: 0.3, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'm22-4', name: 'Swiss Cheese Slices', amount: 4, unit: 'slices', category: 'Dairy & Eggs' },
      { id: 'm22-5', name: 'Dill Pickle Spears / Slices', amount: 6, unit: 'slices', category: 'Produce' },
      { id: 'm22-6', name: 'Yellow Mustard & Butter', amount: 2, unit: 'tbsp', category: 'Pantry & Grains' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Slice bread in half. Spread yellow mustard on top and bottom slices.' },
      { id: 'st2', stepNumber: 2, text: 'Layer Swiss cheese, pickles, roast pork, ham, and another layer of Swiss cheese.' },
      { id: 'st3', stepNumber: 3, text: 'Butter outside bread. Press down in skillet with a heavy cast iron pan for 4 minutes per side until flat and crispy.', timerMinutes: 8 }
    ],
    notes: 'Crunchy on the outside, gooey melted inside.',
    createdAt: Date.now() - 1200,
    updatedAt: Date.now() - 1200
  },
  {
    id: 'men-23',
    title: 'Truffle Aioli Smash Burger with Caramelized Onions',
    subtitle: 'Thick black truffle aioli, sweet caramelized onions, and gruyère cheese on brioche.',
    description: 'An ultra-luxurious burger with smashed beef patties, sweet dark caramelized onions, earthy black truffle aioli, and melted gruyère cheese.',
    category: 'Dinner',
    prepTime: 15,
    cookTime: 15,
    servings: 2,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop',
    tags: ['Dinner', 'Burgers', 'High Protein', 'Aesthetic'],
    nutrition: { calories: 690, protein: '44g', carbs: '38g', fat: '42g' },
    ingredients: [
      { id: 'm23-1', name: '80/20 Ground Beef', amount: 0.8, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'm23-2', name: 'Gruyère or Swiss Cheese Slices', amount: 2, unit: 'slices', category: 'Dairy & Eggs' },
      { id: 'm23-3', name: 'Yellow Onions (thinly sliced)', amount: 2, unit: 'whole', category: 'Produce' },
      { id: 'm23-4', name: 'Black Truffle Oil or Truffle Aioli', amount: 2, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm23-5', name: 'Brioche Buns', amount: 2, unit: 'buns', category: 'Bakery' },
      { id: 'm23-6', name: 'Mayo & Garlic', amount: 2, unit: 'tbsp', category: 'Pantry & Grains' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Caramelize sliced onions in butter over medium heat for 12 minutes until deep brown.', timerMinutes: 12 },
      { id: 'st2', stepNumber: 2, text: 'Mix mayo with garlic powder and a drop of truffle oil for truffle aioli.' },
      { id: 'st3', stepNumber: 3, text: 'Smash beef balls flat on screaming hot cast iron for 2 minutes per side. Top with Gruyère cheese and caramelized onions.' }
    ],
    notes: 'Tastes like a $28 gourmet bistro burger.',
    createdAt: Date.now() - 1000,
    updatedAt: Date.now() - 1000
  },
  {
    id: 'men-24',
    title: 'Double Jalapeño Bacon Cheeseburger',
    subtitle: 'Fiery grilled jalapeños, crispy thick bacon, pepper jack cheese & spicy mayo.',
    description: 'For spice lovers. Searing beef patties topped with blistered jalapeño coins, thick smoked bacon, and melted pepper jack cheese.',
    category: 'Dinner',
    prepTime: 10,
    cookTime: 10,
    servings: 2,
    difficulty: 'Easy',
    isFavorite: false,
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop',
    tags: ['Dinner', 'Burgers', 'High Protein', 'Spicy'],
    nutrition: { calories: 680, protein: '46g', carbs: '32g', fat: '40g' },
    ingredients: [
      { id: 'm24-1', name: 'Ground Beef Patties', amount: 0.8, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'm24-2', name: 'Fresh Jalapeños (sliced in coins)', amount: 2, unit: 'peppers', category: 'Produce' },
      { id: 'm24-3', name: 'Thick Bacon Strips', amount: 4, unit: 'strips', category: 'Meat & Seafood' },
      { id: 'm24-4', name: 'Pepper Jack Cheese Slices', amount: 2, unit: 'slices', category: 'Dairy & Eggs' },
      { id: 'm24-5', name: 'Spicy Chipotle Mayo', amount: 2, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'm24-6', name: 'Brioche Buns', amount: 2, unit: 'buns', category: 'Bakery' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Cook bacon strips until crispy. Blister jalapeño coins in bacon grease.' },
      { id: 'st2', stepNumber: 2, text: 'Sear beef patties for 3 minutes per side. Top with pepper jack cheese, bacon, and blistered jalapeños.' },
      { id: 'st3', stepNumber: 3, text: 'Assemble on toasted brioche buns with chipotle mayo.' }
    ],
    notes: 'Smoky, fiery, and deeply satisfying.',
    createdAt: Date.now() - 800,
    updatedAt: Date.now() - 800
  },
  {
    id: 'men-25',
    title: 'Loaded Buffalo Chicken Wrap with Ranch',
    subtitle: 'Crispy chicken tenders tossed in buffalo sauce with cheddar, lettuce, and cool ranch.',
    description: 'Crispy fried chicken cutlets chopped and tossed in buttery buffalo hot sauce wrapped in a warm flour tortilla with crunchy romaine and shredded cheddar.',
    category: 'Lunch',
    prepTime: 10,
    cookTime: 8,
    servings: 2,
    difficulty: 'Easy',
    isFavorite: false,
    imageUrl: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1200&auto=format&fit=crop',
    tags: ['Lunch', 'Chicken', 'Quick & Easy', 'High Protein'],
    nutrition: { calories: 520, protein: '38g', carbs: '42g', fat: '24g' },
    ingredients: [
      { id: 'm25-1', name: 'Crispy Chicken Tenders / Strips', amount: 6, unit: 'pieces', category: 'Meat & Seafood' },
      { id: 'm25-2', name: 'Buffalo Wing Sauce', amount: 0.33, unit: 'cup', category: 'Pantry & Grains' },
      { id: 'm25-3', name: 'Large Flour Tortilla Wraps', amount: 2, unit: 'wraps', category: 'Bakery' },
      { id: 'm25-4', name: 'Shredded Cheddar & Romaine Lettuce', amount: 1.5, unit: 'cups', category: 'Produce' },
      { id: 'm25-5', name: 'Creamy Ranch Dressing', amount: 3, unit: 'tbsp', category: 'Pantry & Grains' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Bake or air-fry chicken tenders until hot and crispy. Slice into bite size pieces.' },
      { id: 'st2', stepNumber: 2, text: 'Toss sliced tenders in buffalo sauce.' },
      { id: 'st3', stepNumber: 3, text: 'Layer lettuce, cheddar, buffalo chicken, and ranch dressing in tortilla wraps. Roll tight and sear wrap seam-down in skillet for 1 minute.' }
    ],
    notes: 'Sear the folded wrap in a dry pan for 1 min to seal the edges tight!',
    createdAt: Date.now() - 600,
    updatedAt: Date.now() - 600
  }
];
