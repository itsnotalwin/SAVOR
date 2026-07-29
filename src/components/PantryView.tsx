import React, { useState } from 'react';
import { Sparkles, Plus, Check, Trash2, BookOpen, Utensils, X } from 'lucide-react';
import { Recipe } from '../types';
import { getRecipePantryMatch } from '../utils/pantryMatcher';

interface PantryViewProps {
  recipes: Recipe[];
  pantryItems: string[];
  onUpdatePantry: (items: string[]) => void;
  onSelectRecipe: (recipe: Recipe) => void;
  onOpenAiChef?: () => void;
}

const COMMON_PANTRY_STAPLES = [
  'Olive oil', 'Salt', 'Black pepper', 'Garlic', 'Butter', 'Eggs', 'Lemon',
  'Flour', 'Sugar', 'Honey', 'Rice', 'Pasta', 'Heavy Cream', 'Parmesan', 'Onion',
  'Avocado', 'Spinach', 'Salmon', 'Sourdough Bread', 'Chickpeas', 'Oat milk', 'Matcha'
];

export const PantryView: React.FC<PantryViewProps> = ({
  recipes,
  pantryItems,
  onUpdatePantry,
  onSelectRecipe,
  onOpenAiChef,
}) => {
  const [newItemText, setNewItemText] = useState('');

  // Add item to pantry
  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemText.trim()) return;
    const name = newItemText.trim();
    if (!pantryItems.includes(name)) {
      onUpdatePantry([...pantryItems, name]);
    }
    setNewItemText('');
  };

  // Toggle common staple
  const toggleStaple = (item: string) => {
    if (pantryItems.includes(item)) {
      onUpdatePantry(pantryItems.filter(i => i !== item));
    } else {
      onUpdatePantry([...pantryItems, item]);
    }
  };

  // Calculate match percentage for each recipe
  const recipeMatches = recipes.map(recipe => {
    const match = getRecipePantryMatch(recipe, pantryItems);
    return {
      recipe,
      matchCount: match.matchCount,
      totalCount: match.totalCount,
      percent: match.percent,
      isFullyAvailable: match.isFullyAvailable
    };
  }).sort((a, b) => b.percent - a.percent);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      
      {/* Header with AI Chef Launcher */}
      <div className="pb-4 border-b border-[#E6DFD5] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[#D97757] font-semibold text-xs tracking-wider uppercase mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Smart Ingredient Matcher & AI Recipe Creator</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#242220] font-medium leading-tight">
            What can I make with my ingredients?
          </h1>
          <p className="text-xs sm:text-sm text-[#635E59] mt-0.5">
            Select ingredients on hand to find matching recipes or use AI to craft brand new recipes instantly.
          </p>
        </div>

        {onOpenAiChef && (
          <button
            onClick={onOpenAiChef}
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-[#242220] to-[#3B3835] hover:from-black hover:to-[#242220] text-white font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2 shrink-0 group border border-amber-500/20"
          >
            <Sparkles className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
            <span>AI Chef: Create New Recipe from Pantry</span>
          </button>
        )}
      </div>

      {/* Pantry Inventory Input & Staples */}
      <div className="bg-white rounded-3xl p-6 border border-[#E6DFD5] shadow-xs space-y-4">
        <h3 className="font-serif text-xl font-medium text-[#242220]">
          My Kitchen Inventory ({pantryItems.length} items)
        </h3>

        {/* Input */}
        <form onSubmit={handleAddItem} className="flex gap-2">
          <input
            type="text"
            value={newItemText}
            onChange={e => setNewItemText(e.target.value)}
            placeholder="Add pantry item (e.g., Avocado, Heavy Cream, Chickpeas)..."
            className="flex-1 px-4 py-2.5 rounded-xl bg-[#FAF8F5] text-sm text-[#242220] border border-[#E6DFD5] focus:outline-none focus:ring-2 focus:ring-[#D97757]/30"
          />
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-[#D97757] text-white text-xs font-semibold hover:bg-[#C66545] transition-all shrink-0"
          >
            Add Item
          </button>
        </form>

        {/* Common Quick Quick-Select Staples */}
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C867E] block mb-2">
            Quick Staples Toggle:
          </span>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {COMMON_PANTRY_STAPLES.map((staple) => {
              const isSelected = pantryItems.includes(staple);
              return (
                <button
                  key={staple}
                  onClick={() => toggleStaple(staple)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${
                    isSelected
                      ? 'bg-[#D97757] text-white shadow-2xs'
                      : 'bg-[#F3EFEA] text-[#635E59] hover:bg-[#E0D8CB]'
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3" />}
                  <span>{staple}</span>
                </button>
              );
            })}
          </div>
          
          <div className="border-t border-[#E6DFD5] pt-4 mt-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C867E]">
                All My Pantry Items ({pantryItems.length}):
              </span>
              {pantryItems.length > 0 && (
                <button
                  onClick={() => onUpdatePantry([])}
                  className="text-[11px] text-[#D97757] font-bold hover:underline"
                >
                  Clear All
                </button>
              )}
            </div>
            
            {pantryItems.length === 0 ? (
              <div className="text-xs text-[#8C867E] italic py-2">
                Your pantry is currently empty. Add items above or select staples!
              </div>
            ) : (
              <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-2">
                {pantryItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-1.5 pl-3 pr-1 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200"
                  >
                    <span>{item}</span>
                    <button
                      onClick={() => toggleStaple(item)}
                      className="p-1 rounded-full hover:bg-emerald-200 text-emerald-700 transition-colors"
                      title="Remove from pantry"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Matched Recipes Results */}
      <div className="space-y-4">
        <h2 className="font-serif text-2xl font-medium text-[#242220] flex items-center gap-2">
          <span>Recipe Match Suggestions</span>
          <span className="text-xs font-sans font-normal text-[#8C867E]">({recipeMatches.length} recipes ranked)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recipeMatches.map(({ recipe, matchCount, totalCount, percent }) => (
            <div
              key={recipe.id}
              onClick={() => onSelectRecipe(recipe)}
              className="group bg-white rounded-2xl p-4 border border-[#E6DFD5] hover:border-[#D97757]/50 transition-all cursor-pointer flex gap-4 shadow-2xs"
            >
              <img
                src={recipe.imageUrl || 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1200&auto=format&fit=crop'}
                alt={recipe.title}
                className="w-24 h-24 rounded-xl object-cover shrink-0 group-hover:scale-102 transition-transform"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1200&auto=format&fit=crop';
                }}
              />

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#F3EFEA] text-[#635E59]">
                      {recipe.category}
                    </span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      percent >= 80 ? 'bg-emerald-100 text-emerald-800' : percent >= 50 ? 'bg-amber-100 text-amber-800' : 'bg-stone-100 text-stone-600'
                    }`}>
                      {percent}% Match
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-medium text-[#242220] group-hover:text-[#D97757] transition-colors mt-1 line-clamp-1">
                    {recipe.title}
                  </h3>

                  <p className="text-xs text-[#8C867E] mt-0.5">
                    You have {matchCount} of {totalCount} ingredients
                  </p>
                </div>

                <div className="w-full bg-[#F3EFEA] h-1.5 rounded-full overflow-hidden mt-2">
                  <div
                    className={`h-full rounded-full transition-all ${
                      percent >= 80 ? 'bg-emerald-500' : percent >= 50 ? 'bg-amber-500' : 'bg-[#D97757]'
                    }`}
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
