import { Cookbook, Recipe } from '../types';

export const SOUTH_AFRICAN_RECIPES: Recipe[] = [
  // --- COOKBOOK 1: Tannie Koba's Vintage Boeremusiek Kombuis ---
  {
    id: 'sa-bobotie',
    title: 'Traditional Cape Dutch Beef & Apricot Bobotie',
    subtitle: 'Fragrant spiced minced beef baked under a silky egg custard top with bay leaves.',
    description: 'South Africa’s iconic national dish. Lean minced beef seasoned with Cape Malay curry spices, dried apricots, almonds, and chutney, topped with a golden baked egg custard.',
    category: 'Dinner',
    prepTime: 20,
    cookTime: 40,
    servings: 6,
    difficulty: 'Medium',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    tags: ['Old School South African', 'Heritage Classic', 'Dinner', 'Comfort Food', 'Cape Dutch'],
    nutrition: { calories: 480, protein: '32g', carbs: '28g', fat: '26g' },
    cookbookId: 'book-boeremusiek',
    cookbookTitle: "Tannie Koba's Vintage Boeremusiek Kombuis (1974)",
    chapterName: 'Cape Dutch Oven Bake Classics',
    ingredients: [
      { id: 'sa1-1', name: 'Ground Beef or Lamb', amount: 2, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'sa1-2', name: 'Thick Slices White Bread (soaked in milk)', amount: 2, unit: 'slices', category: 'Bakery' },
      { id: 'sa1-3', name: 'Whole Milk', amount: 1.5, unit: 'cups', category: 'Dairy & Eggs' },
      { id: 'sa1-4', name: 'Eggs (beaten)', amount: 3, unit: 'large', category: 'Dairy & Eggs' },
      { id: 'sa1-5', name: 'Finely Chopped Yellow Onion', amount: 1, unit: 'large', category: 'Produce' },
      { id: 'sa1-6', name: 'Garlic & Ginger (minced)', amount: 1, unit: 'tbsp', category: 'Produce' },
      { id: 'sa1-7', name: 'Mild Curry Powder & Turmeric', amount: 2, unit: 'tbsp', category: 'Spices & Seasoning' },
      { id: 'sa1-8', name: 'Sultanas / Raisins', amount: 0.5, unit: 'cup', category: 'Pantry & Grains' },
      { id: 'sa1-9', name: 'Mrs Ball’s Peach Chutney', amount: 3, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'sa1-10', name: 'Slivered Almonds & Bay Leaves', amount: 4, unit: 'pieces', category: 'Spices & Seasoning' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Soak bread in 0.5 cup milk. Sauté onions, garlic, and ginger in butter until translucent and soft.' },
      { id: 'st2', stepNumber: 2, text: 'Add curry powder and turmeric, cooking for 1 minute until fragrant. Stir in ground beef, browning evenly.' },
      { id: 'st3', stepNumber: 3, text: 'Squeeze excess milk from bread. Mix squeezed bread, raisins, chutney, and almonds into meat. Season with salt and pepper.' },
      { id: 'st4', stepNumber: 4, text: 'Transfer meat mixture into a buttered casserole dish, pressing flat.' },
      { id: 'st5', stepNumber: 5, text: 'Whisk remaining 1 cup milk with 3 eggs. Pour over meat and press bay leaves into the custard surface.' },
      { id: 'st6', stepNumber: 6, text: 'Bake at 350°F (180°C) for 35-40 minutes until custard is set and golden brown on top.', timerMinutes: 38 }
    ],
    notes: 'Serve with savory turmeric yellow rice, Mrs Ball’s chutney, and banana sambal.',
    createdAt: Date.now() - 100000,
    updatedAt: Date.now() - 100000
  },
  {
    id: 'sa-malva',
    title: 'Warm Golden Syrup Malva Pudding with Vanilla Custard',
    subtitle: 'Decadent apricot jam sponge soaked in hot butter cream sauce.',
    description: 'The prized South African dessert. A spongy caramel-apricot cake drenched immediately upon baking with a rich warm cream and butter syrup sauce.',
    category: 'Dessert',
    prepTime: 15,
    cookTime: 30,
    servings: 8,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop',
    tags: ['Old School South African', 'Dessert', 'Heritage Classic', 'Comfort Food'],
    nutrition: { calories: 520, protein: '6g', carbs: '68g', fat: '26g' },
    cookbookId: 'book-boeremusiek',
    cookbookTitle: "Tannie Koba's Vintage Boeremusiek Kombuis (1974)",
    chapterName: 'Ouma’s Sweet Baked Treats',
    ingredients: [
      { id: 'sa2-1', name: 'Granulated Sugar', amount: 1, unit: 'cup', category: 'Pantry & Grains' },
      { id: 'sa2-2', name: 'Large Eggs', amount: 2, unit: 'whole', category: 'Dairy & Eggs' },
      { id: 'sa2-3', name: 'Smooth Apricot Jam', amount: 2, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'sa2-4', name: 'All-Purpose Flour', amount: 1, unit: 'cup', category: 'Pantry & Grains' },
      { id: 'sa2-5', name: 'Baking Soda dissolved in 0.5 cup Milk', amount: 1, unit: 'tsp', category: 'Dairy & Eggs' },
      { id: 'sa2-6', name: 'Melted Butter & Vinegar', amount: 1, unit: 'tbsp', category: 'Dairy & Eggs' },
      { id: 'sa2-7', name: 'Heavy Cream (for sauce)', amount: 1, unit: 'cup', category: 'Dairy & Eggs' },
      { id: 'sa2-8', name: 'Butter & Sugar (for sauce)', amount: 0.5, unit: 'cup', category: 'Dairy & Eggs' },
      { id: 'sa2-9', name: 'Vanilla Custard (Ultra-Mel or homemade)', amount: 2, unit: 'cups', category: 'Dairy & Eggs' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Beat sugar and eggs together until thick and pale yellow. Beat in apricot jam.' },
      { id: 'st2', stepNumber: 2, text: 'Sift flour and salt into mixture, alternating with milk and baking soda mixture. Add melted butter and vinegar.' },
      { id: 'st3', stepNumber: 3, text: 'Pour into a buttered baking dish. Bake at 350°F (180°C) for 30 minutes until golden sponge forms.', timerMinutes: 30 },
      { id: 'st4', stepNumber: 4, text: 'Meanwhile, heat cream, butter, sugar, and boiling water in a saucepan until dissolved.' },
      { id: 'st5', stepNumber: 5, text: 'Pour hot sauce evenly over the hot pudding as soon as it leaves the oven so it absorbs completely.' }
    ],
    notes: 'Serve piping hot with cold Ultramel vanilla custard or vanilla bean ice cream.',
    createdAt: Date.now() - 90000,
    updatedAt: Date.now() - 90000
  },
  {
    id: 'sa-vetkoek',
    title: 'Traditional Golden Vetkoek with Savory Curried Mince',
    subtitle: 'Deep-fried yeast bread dough pockets stuffed with spicy ground beef & vegetables.',
    description: 'Crispy and golden on the outside, light and airy inside. Stuffed high with comforting curried minced beef and peas.',
    category: 'Lunch',
    prepTime: 25,
    cookTime: 20,
    servings: 6,
    difficulty: 'Medium',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=1200&auto=format&fit=crop',
    tags: ['Old School South African', 'Street Food', 'Lunch', 'Comfort Food'],
    nutrition: { calories: 560, protein: '28g', carbs: '54g', fat: '24g' },
    cookbookId: 'book-boeremusiek',
    cookbookTitle: "Tannie Koba's Vintage Boeremusiek Kombuis (1974)",
    chapterName: 'Bakery & Farm Breads',
    ingredients: [
      { id: 'sa3-1', name: 'White Bread Flour', amount: 4, unit: 'cups', category: 'Pantry & Grains' },
      { id: 'sa3-2', name: 'Instant Dry Yeast', amount: 1, unit: 'packet', category: 'Pantry & Grains' },
      { id: 'sa3-3', name: 'Sugar & Salt', amount: 1, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'sa3-4', name: 'Warm Water', amount: 1.5, unit: 'cups', category: 'Pantry & Grains' },
      { id: 'sa3-5', name: 'Lean Ground Beef (for filling)', amount: 1, unit: 'lb', category: 'Meat & Seafood' },
      { id: 'sa3-6', name: 'Diced Potato, Carrots & Peas', amount: 1.5, unit: 'cups', category: 'Produce' },
      { id: 'sa3-7', name: 'Curry Powder & Chutney', amount: 2, unit: 'tbsp', category: 'Spices & Seasoning' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Knead flour, yeast, sugar, salt, and warm water into a smooth dough. Cover and let rise in a warm spot for 45 minutes.', timerMinutes: 45 },
      { id: 'st2', stepNumber: 2, text: 'Sauté onion, garlic, ground beef, potato, carrots, curry powder, and chutney until meat is cooked and potatoes are tender.' },
      { id: 'st3', stepNumber: 3, text: 'Divide risen dough into tennis ball-sized balls. Flatten slightly.' },
      { id: 'st4', stepNumber: 4, text: 'Deep fry dough in hot vegetable oil at 340°F (170°C) for 3-4 minutes per side until puffed and golden brown.', timerMinutes: 8 },
      { id: 'st5', stepNumber: 5, text: 'Cut open hot vetkoek and spoon generous curried mince inside.' }
    ],
    notes: 'Can also be enjoyed sweet with butter and golden syrup!',
    createdAt: Date.now() - 85000,
    updatedAt: Date.now() - 85000
  },
  {
    id: 'sa-melktert',
    title: "Ouma's Heritage Baked Milk Tart (Melktert)",
    subtitle: 'Silky baked vanilla custard filling in a sweet pastry crust sprinkled with cinnamon.',
    description: 'The timeless South African tea-time classic. Creamy milk custard infused with cinnamon and baked to silky perfection.',
    category: 'Dessert',
    prepTime: 20,
    cookTime: 35,
    servings: 8,
    difficulty: 'Medium',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=1200&auto=format&fit=crop',
    tags: ['Old School South African', 'Dessert', 'Heritage Classic', 'Baking'],
    nutrition: { calories: 360, protein: '8g', carbs: '44g', fat: '16g' },
    cookbookId: 'book-boeremusiek',
    cookbookTitle: "Tannie Koba's Vintage Boeremusiek Kombuis (1974)",
    chapterName: 'Ouma’s Sweet Baked Treats',
    ingredients: [
      { id: 'sa4-1', name: 'Whole Milk', amount: 4, unit: 'cups', category: 'Dairy & Eggs' },
      { id: 'sa4-2', name: 'Butter', amount: 2, unit: 'tbsp', category: 'Dairy & Eggs' },
      { id: 'sa4-3', name: 'Granulated Sugar', amount: 1, unit: 'cup', category: 'Pantry & Grains' },
      { id: 'sa4-4', name: 'Large Eggs (separated)', amount: 3, unit: 'large', category: 'Dairy & Eggs' },
      { id: 'sa4-5', name: 'Cornstarch & Flour', amount: 0.33, unit: 'cup', category: 'Pantry & Grains' },
      { id: 'sa4-6', name: 'Ground Cinnamon (for dusting)', amount: 1, unit: 'tbsp', category: 'Spices & Seasoning' },
      { id: 'sa4-7', name: 'Prepared Sweet Pie Crust', amount: 1, unit: 'shell', category: 'Bakery' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Scald milk and butter in a heavy saucepan.' },
      { id: 'st2', stepNumber: 2, text: 'Whisk egg yolks, sugar, flour, cornstarch, and vanilla until smooth. Whisk hot milk gradually into egg mixture.' },
      { id: 'st3', stepNumber: 3, text: 'Return mixture to saucepan and cook over low heat, stirring constantly until thick custard forms.' },
      { id: 'st4', stepNumber: 4, text: 'Whip egg whites until stiff peaks form and fold gently into hot custard. Pour into pie crust.' },
      { id: 'st5', stepNumber: 5, text: 'Dust generously with ground cinnamon. Bake at 375°F (190°C) for 25 minutes until golden set.', timerMinutes: 25 }
    ],
    notes: 'Chill in refrigerator before slicing for beautiful clean pieces.',
    createdAt: Date.now() - 80000,
    updatedAt: Date.now() - 80000
  },
  {
    id: 'sa-koeksisters',
    title: 'Crispy Braided Koeksisters in Ginger Sugar Syrup',
    subtitle: 'Golden braided donuts soaked ice-cold in sweet cinnamon and ginger syrup.',
    description: 'An irresistible Afrikaans pastry. Crispy fried dough braids dropped hot directly into ice-cold spiced ginger syrup.',
    category: 'Snack',
    prepTime: 30,
    cookTime: 15,
    servings: 12,
    difficulty: 'Hard',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop',
    tags: ['Old School South African', 'Dessert', 'Heritage Classic'],
    nutrition: { calories: 310, protein: '4g', carbs: '52g', fat: '10g' },
    cookbookId: 'book-boeremusiek',
    cookbookTitle: "Tannie Koba's Vintage Boeremusiek Kombuis (1974)",
    chapterName: 'Bakery & Farm Breads',
    ingredients: [
      { id: 'sa5-1', name: 'Sugar', amount: 4, unit: 'cups', category: 'Pantry & Grains' },
      { id: 'sa5-2', name: 'Water', amount: 2, unit: 'cups', category: 'Pantry & Grains' },
      { id: 'sa5-3', name: 'Ground Ginger & Cinnamon Stick', amount: 1, unit: 'tbsp', category: 'Spices & Seasoning' },
      { id: 'sa5-4', name: 'Lemon Juice', amount: 2, unit: 'tbsp', category: 'Produce' },
      { id: 'sa5-5', name: 'Cake Flour & Baking Powder', amount: 3, unit: 'cups', category: 'Pantry & Grains' },
      { id: 'sa5-6', name: 'Butter (rubbed in flour)', amount: 4, unit: 'tbsp', category: 'Dairy & Eggs' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Boil sugar, water, ginger, cinnamon, and lemon juice into syrup. Chill overnight in refrigerator until ice cold!' },
      { id: 'st2', stepNumber: 2, text: 'Mix flour, baking powder, butter, and milk into soft dough. Roll out to 0.5cm thick, cut strips and plait into braids.' },
      { id: 'st3', stepNumber: 3, text: 'Deep fry dough braids in hot oil until deep golden brown on both sides.' },
      { id: 'st4', stepNumber: 4, text: 'Plunge blistering hot koeksisters immediately into ice-cold syrup. They will sizzle and soak up syrup instantly!' }
    ],
    notes: 'Keep syrup bowl nestled inside a larger ice bath while dipping.',
    createdAt: Date.now() - 75000,
    updatedAt: Date.now() - 75000
  },

  // --- COOKBOOK 2: The Great Heritage Braai & Potjie Bible ---
  {
    id: 'sa-oxtail-potjie',
    title: 'Slow-Cooked Beef Oxtail Potjiekos (No. 3 Cast Iron)',
    subtitle: 'Rich oxtail braised in red wine, root vegetables & allspice over glowing wood embers.',
    description: 'The sacred South African fireside slow cook. Beef oxtail browned in a cast-iron potjie pot, simmered for 4 hours with vegetables, red wine, and savory herbs without stirring.',
    category: 'Dinner',
    prepTime: 25,
    cookTime: 240,
    servings: 8,
    difficulty: 'Medium',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    tags: ['Old School South African', 'Potjiekos', 'Braai', 'Dinner', 'Cast Iron'],
    nutrition: { calories: 620, protein: '46g', carbs: '22g', fat: '38g' },
    cookbookId: 'book-braai-bible',
    cookbookTitle: 'The Great Heritage Braai & Potjie Bible',
    chapterName: 'Cast-Iron Potjie Stews',
    ingredients: [
      { id: 'sa6-1', name: 'Beef Oxtail (trimmed)', amount: 4, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'sa6-2', name: 'Thick Cut Bacon (diced)', amount: 0.5, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'sa6-3', name: 'Cabernet Sauvignon Red Wine', amount: 2, unit: 'cups', category: 'Beverages' },
      { id: 'sa6-4', name: 'Beef Stock', amount: 2, unit: 'cups', category: 'Pantry & Grains' },
      { id: 'sa6-5', name: 'Small Potatoes, Carrots & Button Mushrooms', amount: 4, unit: 'cups', category: 'Produce' },
      { id: 'sa6-6', name: 'Onions & Leeks (sliced)', amount: 2, unit: 'large', category: 'Produce' },
      { id: 'sa6-7', name: 'Garlic, Rosemary, Thyme & Bay Leaves', amount: 1, unit: 'bunch', category: 'Produce' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Heat cast iron potjie pot over glowing wood coals. Fry bacon until crispy, then brown oxtail pieces in bacon fat.' },
      { id: 'st2', stepNumber: 2, text: 'Add onions, garlic, and herbs. Pour red wine and beef stock to cover meat.' },
      { id: 'st3', stepNumber: 3, text: 'Cover with potjie lid and simmer gently over low embers for 3 hours. Do NOT stir!', timerMinutes: 180 },
      { id: 'st4', stepNumber: 4, text: 'Layer carrots, potatoes, and mushrooms on top of meat. Cover and cook another 1 hour until tender.', timerMinutes: 60 }
    ],
    notes: 'Golden Rule of Potjiekos: Never stir after layering vegetables!',
    createdAt: Date.now() - 70000,
    updatedAt: Date.now() - 70000
  },
  {
    id: 'sa-roosterkoek',
    title: "Jan's Fire-Roasted Roosterkoek with Garlic Herb Butter",
    subtitle: 'Golden yeast bread rolls grilled directly over open braai coals.',
    description: 'Crisp smokey crust on the outside, soft steaming bread on the inside. Slathered with melting farm butter, cheddar, or garlic.',
    category: 'Snack',
    prepTime: 20,
    cookTime: 15,
    servings: 8,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=1200&auto=format&fit=crop',
    tags: ['Old School South African', 'Braai', 'Side Dish', 'Baking'],
    nutrition: { calories: 280, protein: '7g', carbs: '42g', fat: '9g' },
    cookbookId: 'book-braai-bible',
    cookbookTitle: 'The Great Heritage Braai & Potjie Bible',
    chapterName: 'Fireside Breads & Sides',
    ingredients: [
      { id: 'sa7-1', name: 'White Bread Flour', amount: 4, unit: 'cups', category: 'Pantry & Grains' },
      { id: 'sa7-2', name: 'Instant Dry Yeast', amount: 1, unit: 'packet', category: 'Pantry & Grains' },
      { id: 'sa7-3', name: 'Warm Water & Milk', amount: 1.5, unit: 'cups', category: 'Pantry & Grains' },
      { id: 'sa7-4', name: 'Salt & Sugar', amount: 1, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'sa7-5', name: 'Salted Butter & Minced Garlic', amount: 0.5, unit: 'cup', category: 'Dairy & Eggs' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Knead flour, yeast, salt, sugar, milk, and warm water into dough. Cover and rise for 30 minutes.' },
      { id: 'st2', stepNumber: 2, text: 'Shape into square dough rolls. Dust liberally with flour so they do not stick.' },
      { id: 'st3', stepNumber: 3, text: 'Place onto a medium-heat braai grid over gentle coals. Grill for 12-15 minutes, turning frequently until hollow when tapped.', timerMinutes: 15 },
      { id: 'st4', stepNumber: 4, text: 'Slice open hot and slather with garlic butter and grated cheddar.' }
    ],
    notes: 'Essential side dish for any authentic South African braai.',
    createdAt: Date.now() - 65000,
    updatedAt: Date.now() - 65000
  },
  {
    id: 'sa-shisa-nyama',
    title: 'Traditional Shisa Nyama Lamb Chops & Boerewors',
    subtitle: 'Wood-fired thick lamb loin chops and spicy traditional boerewors sausage.',
    description: 'The heart of South African braai culture. Premium spiced boerewors curled on the grill alongside juicy wood-charred Karoo lamb chops.',
    category: 'Dinner',
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
    tags: ['Old School South African', 'Braai', 'Dinner', 'High Protein'],
    nutrition: { calories: 680, protein: '54g', carbs: '4g', fat: '50g' },
    cookbookId: 'book-braai-bible',
    cookbookTitle: 'The Great Heritage Braai & Potjie Bible',
    chapterName: 'Wood-Fired Grilling',
    ingredients: [
      { id: 'sa8-1', name: 'Karoo Lamb Loin Chops', amount: 8, unit: 'chops', category: 'Meat & Seafood' },
      { id: 'sa8-2', name: 'Traditional Boerewors Sausage Coil', amount: 1.5, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'sa8-3', name: 'Braai Spice (Coriander, Cumin, Pepper, Salt)', amount: 2, unit: 'tbsp', category: 'Spices & Seasoning' },
      { id: 'sa8-4', name: 'Lemon Juice & Olive Oil', amount: 2, unit: 'tbsp', category: 'Produce' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Season lamb chops with braai spice rub, lemon juice, and olive oil.' },
      { id: 'st2', stepNumber: 2, text: 'Prepare hot wood coals. Place boerewors and lamb chops on braai grid.' },
      { id: 'st3', stepNumber: 3, text: 'Grill boerewors for 10-12 minutes turning gently without pricking skin. Sear lamb chops 4 minutes per side.', timerMinutes: 12 },
      { id: 'st4', stepNumber: 4, text: 'Serve hot off the coals with chakalaka and pap.' }
    ],
    notes: 'Do not prick the boerewors skin so all juices remain inside!',
    createdAt: Date.now() - 60000,
    updatedAt: Date.now() - 60000
  },
  {
    id: 'sa-chakalaka-pap',
    title: 'Spicy Chakalaka Relish & Creamy White Pap',
    subtitle: 'Fiery pepper, carrot, and baked bean relish served over buttered cornmeal porridge.',
    description: 'The ultimate South African side combo. Spicy, tangy vegetable chakalaka paired with smooth, velvety white mealie pap.',
    category: 'Dinner',
    prepTime: 15,
    cookTime: 25,
    servings: 6,
    difficulty: 'Easy',
    isFavorite: false,
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop',
    tags: ['Old School South African', 'Side Dish', 'Vegetarian', 'Braai'],
    nutrition: { calories: 320, protein: '9g', carbs: '58g', fat: '7g' },
    cookbookId: 'book-braai-bible',
    cookbookTitle: 'The Great Heritage Braai & Potjie Bible',
    chapterName: 'Fireside Breads & Sides',
    ingredients: [
      { id: 'sa9-1', name: 'White Maize Meal (Iwisa / ACE)', amount: 2, unit: 'cups', category: 'Pantry & Grains' },
      { id: 'sa9-2', name: 'Water & Butter', amount: 4, unit: 'cups', category: 'Pantry & Grains' },
      { id: 'sa9-3', name: 'Grated Carrots & Bell Peppers', amount: 2, unit: 'cups', category: 'Produce' },
      { id: 'sa9-4', name: 'Can Baked Beans in Tomato Sauce', amount: 1, unit: 'can', category: 'Pantry & Grains' },
      { id: 'sa9-5', name: 'Curry Powder, Garlic & Red Chili', amount: 1, unit: 'tbsp', category: 'Spices & Seasoning' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Boil water with salt and butter. Whisk in maize meal, cover and steam on low for 20 minutes until thick and smooth.' },
      { id: 'st2', stepNumber: 2, text: 'Sauté onion, garlic, chilies, curry powder, grated carrots, and bell peppers in oil for 10 minutes.' },
      { id: 'st3', stepNumber: 3, text: 'Stir baked beans into chakalaka vegetable mix. Simmer 5 minutes.' },
      { id: 'st4', stepNumber: 4, text: 'Spoon hot creamy pap onto plate and crown with fiery chakalaka relish.' }
    ],
    notes: 'Packs incredible flavor and pairs with any grilled braai meat.',
    createdAt: Date.now() - 55000,
    updatedAt: Date.now() - 55000
  },

  // --- COOKBOOK 3: Sultans of the Cape Malay Kombuis ---
  {
    id: 'sa-cape-biryani',
    title: 'Cape Malay Chicken & Cardamom Biryani',
    subtitle: 'Aromatic basmati rice layered with spiced chicken, fried potatoes & brown lentils.',
    description: 'A historic Bo-Kaap celebratory dish. Saffron basmati rice, tender spiced chicken thighs, brown lentils, and golden crispy onions infused with star anise and cardamom.',
    category: 'Dinner',
    prepTime: 30,
    cookTime: 45,
    servings: 6,
    difficulty: 'Medium',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop',
    tags: ['Old School South African', 'Cape Malay', 'Dinner', 'Aromatic'],
    nutrition: { calories: 580, protein: '38g', carbs: '64g', fat: '18g' },
    cookbookId: 'book-cape-malay',
    cookbookTitle: 'Sultans of the Cape Malay Kombuis (1890)',
    chapterName: 'Bo-Kaap Rice & Spice Pots',
    ingredients: [
      { id: 'sa10-1', name: 'Chicken Thighs & Drumsticks', amount: 2.5, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'sa10-2', name: 'Long Grain Basmati Rice', amount: 2, unit: 'cups', category: 'Pantry & Grains' },
      { id: 'sa10-3', name: 'Cooked Brown Lentils', amount: 1, unit: 'cup', category: 'Pantry & Grains' },
      { id: 'sa10-4', name: 'Golden Crispy Fried Onions', amount: 1.5, unit: 'cups', category: 'Produce' },
      { id: 'sa10-5', name: 'Yogurt, Ginger, Garlic & Cape Malay Spices', amount: 1, unit: 'cup', category: 'Dairy & Eggs' },
      { id: 'sa10-6', name: 'Fried Potato Cubes & Boiled Eggs', amount: 4, unit: 'whole', category: 'Produce' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Marinate chicken in yogurt, garlic, ginger, turmeric, cumin, coriander, and garam masala for 1 hour.' },
      { id: 'st2', stepNumber: 2, text: 'Parboil basmati rice with whole cinnamon sticks, cardamom pods, and star anise until 70% cooked.' },
      { id: 'st3', stepNumber: 3, text: 'Layer cooked chicken, fried potatoes, brown lentils, and parboiled rice in a heavy pot.' },
      { id: 'st4', stepNumber: 4, text: 'Top with saffron water, melted ghee, and fried onions. Seal pot lid tightly with foil and steam on low for 30 minutes.', timerMinutes: 30 }
    ],
    notes: 'Serve with cucumber mint raita and tomato onion sambal.',
    createdAt: Date.now() - 50000,
    updatedAt: Date.now() - 50000
  },
  {
    id: 'sa-denningvleis',
    title: 'Cape Malay Denningvleis (Tamarind Braised Lamb)',
    subtitle: 'Tender lamb chops braised in sweet-sour tamarind juice, allspice & garlic.',
    description: 'One of the oldest recorded Cape Malay recipes. Lamb slow-cooked until falling apart in a velvety tamarind and allspice reduction.',
    category: 'Dinner',
    prepTime: 15,
    cookTime: 90,
    servings: 4,
    difficulty: 'Medium',
    isFavorite: false,
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    tags: ['Old School South African', 'Cape Malay', 'Dinner', 'Heritage Classic'],
    nutrition: { calories: 510, protein: '42g', carbs: '14g', fat: '32g' },
    cookbookId: 'book-cape-malay',
    cookbookTitle: 'Sultans of the Cape Malay Kombuis (1890)',
    chapterName: 'Bo-Kaap Rice & Spice Pots',
    ingredients: [
      { id: 'sa11-1', name: 'Lamb Shoulder or Chops', amount: 2, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'sa11-2', name: 'Tamarind Paste dissolved in warm water', amount: 3, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: 'sa11-3', name: 'Allspice Berries & Nutmeg', amount: 1, unit: 'tsp', category: 'Spices & Seasoning' },
      { id: 'sa11-4', name: 'Sliced Onions & Garlic', amount: 2, unit: 'large', category: 'Produce' },
      { id: 'sa11-5', name: 'Brown Sugar', amount: 2, unit: 'tbsp', category: 'Pantry & Grains' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Sear lamb pieces in oil until browned. Remove lamb from pot.' },
      { id: 'st2', stepNumber: 2, text: 'Sauté onions and garlic until deeply caramelized. Add crushed allspice and nutmeg.' },
      { id: 'st3', stepNumber: 3, text: 'Return lamb to pot. Add tamarind water and brown sugar. Cover and simmer on low for 1.5 hours until meat melts off the bone.', timerMinutes: 90 }
    ],
    notes: 'Serve over fragrant yellow rice.',
    createdAt: Date.now() - 45000,
    updatedAt: Date.now() - 45000
  },

  // --- COOKBOOK 4: Durban Curry House & Spice Market Classics ---
  {
    id: 'sa-bunny-chow',
    title: 'Authentic Durban Mutton Bunny Chow',
    subtitle: 'Hollowed-out white bread loaf filled to the brim with fiery Durban mutton curry.',
    description: 'Durban’s legendary street food creation. A quarter loaf of soft white bread hollowed out and filled with rich, potato-laden spicy mutton curry.',
    category: 'Lunch',
    prepTime: 20,
    cookTime: 50,
    servings: 4,
    difficulty: 'Easy',
    isFavorite: true,
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1200&auto=format&fit=crop',
    tags: ['Old School South African', 'Durban Curry', 'Street Food', 'High Protein'],
    nutrition: { calories: 690, protein: '44g', carbs: '72g', fat: '26g' },
    cookbookId: 'book-durban-curry',
    cookbookTitle: 'Durban Curry House & Spice Market Classics',
    chapterName: 'Street Market Bunny Chows',
    ingredients: [
      { id: 'sa12-1', name: 'Bone-In Mutton or Lamb (cubed)', amount: 2, unit: 'lbs', category: 'Meat & Seafood' },
      { id: 'sa12-2', name: 'Unsliced Unsliced White Bread Loaves', amount: 1, unit: 'loaf', category: 'Bakery' },
      { id: 'sa12-3', name: 'Durban Masala / Curry Powder', amount: 3, unit: 'tbsp', category: 'Spices & Seasoning' },
      { id: 'sa12-4', name: 'Yukon Gold Potatoes (halved)', amount: 4, unit: 'medium', category: 'Produce' },
      { id: 'sa12-5', name: 'Grated Tomatoes, Onions, Ginger & Garlic', amount: 2, unit: 'cups', category: 'Produce' },
      { id: 'sa12-6', name: 'Curry Leaves, Cinnamon Stick & Star Anise', amount: 1, unit: 'handful', category: 'Produce' }
    ],
    instructions: [
      { id: 'st1', stepNumber: 1, text: 'Sauté onions, curry leaves, cinnamon stick, star anise, ginger, and garlic in oil until translucent.' },
      { id: 'st2', stepNumber: 2, text: 'Add Durban curry masala and cook for 1 minute. Add mutton cubes and coat thoroughly in spices.' },
      { id: 'st3', stepNumber: 3, text: 'Add grated tomatoes and water. Simmer covered for 35 minutes.' },
      { id: 'st4', stepNumber: 4, text: 'Add potato halves. Simmer another 20 minutes until potatoes are soft and gravy is thick and glossy.', timerMinutes: 20 },
      { id: 'st5', stepNumber: 5, text: 'Cut bread loaf into quarters. Hollow out soft bread center (keep bread plug!). Ladle steaming hot mutton curry inside.' }
    ],
    notes: 'Eat with your hands, using the hollowed bread plug to scoop up curry!',
    createdAt: Date.now() - 40000,
    updatedAt: Date.now() - 40000
  }
];

export const SOUTH_AFRICAN_COOKBOOKS: Cookbook[] = [
  {
    id: 'book-boeremusiek',
    title: "Tannie Koba's Vintage Boeremusiek Kombuis",
    author: 'Tannie Koba van der Merwe',
    year: '1974 Heritage Edition',
    description: 'A timeless collection of traditional Afrikaans and Cape Dutch farm kitchen treasures. Hand-written family recipes passed down across generations in the Great Karoo.',
    coverImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    category: 'Cape Dutch & Afrikaans Heritage',
    heritageRegion: 'Karoo & Western Cape, South Africa',
    tagline: 'Ouma’s beloved recipes for Sunday family gatherings',
    badge: '1974 Vintage Classic',
    recipeIds: ['sa-bobotie', 'sa-malva', 'sa-vetkoek', 'sa-melktert', 'sa-koeksisters'],
    chapters: [
      {
        id: 'ch-boere-1',
        title: 'Cape Dutch Oven Bake Classics',
        description: 'Rich casseroles, spicy minced meat bobotie, and baked savory pans.',
        recipeIds: ['sa-bobotie']
      },
      {
        id: 'ch-boere-2',
        title: 'Bakery & Farm Breads',
        description: 'Golden vetkoek, yeast breads, and sweet braided koeksisters.',
        recipeIds: ['sa-vetkoek', 'sa-koeksisters']
      },
      {
        id: 'ch-boere-3',
        title: 'Ouma’s Sweet Baked Treats',
        description: 'World-famous Malva pudding and baked cinnamon milk tart.',
        recipeIds: ['sa-malva', 'sa-melktert']
      }
    ]
  },
  {
    id: 'book-braai-bible',
    title: 'The Great Heritage Braai & Potjie Bible',
    author: 'Jan "Braaimeester" du Plessis',
    year: '1988 Collectors Edition',
    description: 'The definitive authority on South African open-fire cooking. From slow-cooked cast-iron potjies over wood coals to fire-roasted roosterkoek and shisa nyama feasts.',
    coverImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
    category: 'Fireside & Cast Iron',
    heritageRegion: 'Highveld & Bushveld, South Africa',
    tagline: 'Mastering the wood flame, iron potjie, and social braai',
    badge: 'Fire & Iron Standard',
    recipeIds: ['sa-oxtail-potjie', 'sa-roosterkoek', 'sa-shisa-nyama', 'sa-chakalaka-pap'],
    chapters: [
      {
        id: 'ch-braai-1',
        title: 'Cast-Iron Potjie Stews',
        description: 'Number 3 cast-iron pot stews cooked for hours over embers.',
        recipeIds: ['sa-oxtail-potjie']
      },
      {
        id: 'ch-braai-2',
        title: 'Wood-Fired Grilling',
        description: 'Karoo lamb, spiced boerewors coils, and flame-grilled meats.',
        recipeIds: ['sa-shisa-nyama']
      },
      {
        id: 'ch-braai-3',
        title: 'Fireside Breads & Sides',
        description: 'Roosterkoek bread rolls, spicy chakalaka, and creamy pap.',
        recipeIds: ['sa-roosterkoek', 'sa-chakalaka-pap']
      }
    ]
  },
  {
    id: 'book-cape-malay',
    title: 'Sultans of the Cape Malay Kombuis',
    author: 'Hadji Fatima Booley',
    year: '1890 Historic Bo-Kaap',
    description: 'Celebrated fragrant spice recipes from the historic Bo-Kaap quarter in Cape Town. Fragrant biryanis, tamarind-braised mutton, and sweet Hertzoggie tarts.',
    coverImage: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop',
    category: 'Cape Malay Spice Heritage',
    heritageRegion: 'Bo-Kaap, Cape Town',
    tagline: 'Fragrant cardamom, tamarind, and centuries-old spice blends',
    badge: 'Historic 1890 Spice Collection',
    recipeIds: ['sa-cape-biryani', 'sa-denningvleis'],
    chapters: [
      {
        id: 'ch-malay-1',
        title: 'Bo-Kaap Rice & Spice Pots',
        description: 'Slow-steamed biryani and aromatic tamarind braised mutton.',
        recipeIds: ['sa-cape-biryani', 'sa-denningvleis']
      }
    ]
  },
  {
    id: 'book-durban-curry',
    title: 'Durban Curry House & Spice Market Classics',
    author: 'Chef Ashwin Govender',
    year: '1962 Spice Market Edition',
    description: 'The world-famous fiery curry recipes born in Victoria Street Spice Market in Natal. Hollowed Bunny Chows, red mutton curries, and mango atchars.',
    coverImage: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1200&auto=format&fit=crop',
    category: 'Durban Indian Heritage',
    heritageRegion: 'Durban, Kwazulu-Natal',
    tagline: 'Bold masalas, hollowed bread loaves, and coastal heat',
    badge: 'Spice Market Legend',
    recipeIds: ['sa-bunny-chow'],
    chapters: [
      {
        id: 'ch-durban-1',
        title: 'Street Market Bunny Chows',
        description: 'Legendary hollowed white loaves overflowing with thick mutton curry.',
        recipeIds: ['sa-bunny-chow']
      }
    ]
  }
];
