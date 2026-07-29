import { ShoppingCategory } from '../types';

export const formatAmount = (amount: number): string => {
  if (!amount || isNaN(amount)) return '';
  
  // Format nice culinary fractions
  const whole = Math.floor(amount);
  const fraction = amount - whole;

  let fractionStr = '';
  if (Math.abs(fraction - 0.25) < 0.05) fractionStr = '¼';
  else if (Math.abs(fraction - 0.33) < 0.05) fractionStr = '⅓';
  else if (Math.abs(fraction - 0.5) < 0.05) fractionStr = '½';
  else if (Math.abs(fraction - 0.66) < 0.05) fractionStr = '⅔';
  else if (Math.abs(fraction - 0.75) < 0.05) fractionStr = '¾';
  else if (fraction > 0.05) fractionStr = fraction.toFixed(1).replace(/^0\./, '.');

  if (whole > 0) {
    return fractionStr ? `${whole} ${fractionStr}` : `${whole}`;
  }
  return fractionStr || amount.toFixed(1);
};

export const scaleAmount = (amount: number, originalServings: number, targetServings: number): number => {
  if (!originalServings || originalServings <= 0 || !targetServings || targetServings <= 0) return amount;
  return (amount * targetServings) / originalServings;
};

export const detectCategory = (itemName: string): ShoppingCategory => {
  const name = itemName.toLowerCase();

  // Produce
  if (
    name.includes('apple') || name.includes('avocado') || name.includes('banana') || name.includes('berry') ||
    name.includes('blueberry') || name.includes('blackberry') || name.includes('lemon') || name.includes('lime') ||
    name.includes('orange') || name.includes('spinach') || name.includes('lettuce') || name.includes('cucumber') ||
    name.includes('tomato') || name.includes('garlic') || name.includes('onion') || name.includes('shallot') ||
    name.includes('potato') || name.includes('mushroom') || name.includes('herb') || name.includes('parsley') ||
    name.includes('basil') || name.includes('thyme') || name.includes('rosemary') || name.includes('ginger') ||
    name.includes('sprout') || name.includes('greens') || name.includes('pepper') || name.includes('carrot')
  ) {
    return 'Produce';
  }

  // Dairy & Eggs
  if (
    name.includes('milk') || name.includes('cream') || name.includes('cheese') || name.includes('butter') ||
    name.includes('egg') || name.includes('yogurt') || name.includes('ricotta') || name.includes('feta') ||
    name.includes('parmesan') || name.includes('cheddar') || name.includes('mozzarella')
  ) {
    return 'Dairy & Eggs';
  }

  // Meat & Seafood
  if (
    name.includes('salmon') || name.includes('chicken') || name.includes('beef') || name.includes('pork') ||
    name.includes('steak') || name.includes('turkey') || name.includes('shrimp') || name.includes('fish') ||
    name.includes('tuna') || name.includes('bacon') || name.includes('sausage') || name.includes('fillet')
  ) {
    return 'Meat & Seafood';
  }

  // Bakery
  if (
    name.includes('bread') || name.includes('sourdough') || name.includes('baguette') || name.includes('bun') ||
    name.includes('pita') || name.includes('tortilla') || name.includes('croissant') || name.includes('loaf')
  ) {
    return 'Bakery';
  }

  // Spices & Seasoning
  if (
    name.includes('salt') || name.includes('paprika') || name.includes('cinnamon') || name.includes('turmeric') ||
    name.includes('vanilla') || name.includes('pepper flakes') || name.includes('oregano') || name.includes('curry') ||
    name.includes('seasoning') || name.includes('lavender')
  ) {
    return 'Spices & Seasoning';
  }

  // Pantry & Grains
  if (
    name.includes('oil') || name.includes('flour') || name.includes('rice') || name.includes('pasta') ||
    name.includes('honey') || name.includes('syrup') || name.includes('chickpea') || name.includes('bean') ||
    name.includes('olive') || name.includes('vinegar') || name.includes('sugar') || name.includes('oat') ||
    name.includes('matcha') || name.includes('sauce') || name.includes('broth') || name.includes('stock')
  ) {
    return 'Pantry & Grains';
  }

  // Frozen
  if (
    name.includes('frozen') || name.includes('ice cream') || name.includes('puff pastry') || name.includes('pie crust')
  ) {
    return 'Frozen';
  }

  // Beverages
  if (
    name.includes('wine') || name.includes('beer') || name.includes('juice') || name.includes('water') ||
    name.includes('coffee') || name.includes('tea') || name.includes('soda')
  ) {
    return 'Beverages';
  }

  return 'Other';
};
