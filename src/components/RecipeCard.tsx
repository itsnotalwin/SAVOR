import React from 'react';
import { Clock, Heart, ShoppingBag, Flame, Sparkles, Check, Utensils } from 'lucide-react';
import { Recipe } from '../types';
import { getRecipePantryMatch } from '../utils/pantryMatcher';

interface RecipeCardProps {
  recipe: Recipe;
  pantryItems?: string[];
  onSelect: (recipe: Recipe) => void;
  onToggleFavorite: (e: React.MouseEvent, recipeId: string) => void;
  onAddIngredientsToShopping: (e: React.MouseEvent, recipe: Recipe) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  pantryItems = [],
  onSelect,
  onToggleFavorite,
  onAddIngredientsToShopping,
}) => {
  const totalTime = recipe.prepTime + recipe.cookTime;
  const pantryMatch = getRecipePantryMatch(recipe, pantryItems);
  const hasPantryData = pantryItems.length > 0;

  return (
    <div
      onClick={() => onSelect(recipe)}
      className={`group relative bg-white rounded-2xl border overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer ${
        pantryMatch.isFullyAvailable && hasPantryData
          ? 'border-emerald-300/80 shadow-xs hover:border-emerald-500 ring-1 ring-emerald-500/20'
          : 'border-[#E6DFD5] hover:border-[#D97757]/40'
      }`}
    >
      {/* Recipe Cover Image */}
      <div className="relative aspect-4/3 w-full bg-[#F3EFEA] overflow-hidden">
        <img
          src={recipe.imageUrl || 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1200&auto=format&fit=crop'}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1200&auto=format&fit=crop';
          }}
        />

        {/* Available to Cook / Pantry Match Badge */}
        {hasPantryData && (
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1">
            {pantryMatch.isFullyAvailable ? (
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-700/95 text-white backdrop-blur-md shadow-sm border border-emerald-500/30">
                <Check className="w-3.5 h-3.5 text-emerald-200 stroke-[3]" />
                <span>Ready to Cook</span>
              </span>
            ) : pantryMatch.matchCount > 0 ? (
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#242220]/80 text-white backdrop-blur-md">
                <Utensils className="w-3 h-3 text-[#D97757]" />
                <span>{pantryMatch.matchCount}/{pantryMatch.totalCount} in Pantry</span>
              </span>
            ) : null}
          </div>
        )}

        {/* Favorite Heart Button */}
        <button
          onClick={(e) => onToggleFavorite(e, recipe.id)}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all z-10 ${
            recipe.isFavorite
              ? 'bg-white/90 text-[#D97757] shadow-sm'
              : 'bg-black/30 text-white/90 hover:bg-white/90 hover:text-[#D97757]'
          }`}
          title={recipe.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={`w-4 h-4 ${recipe.isFavorite ? 'fill-[#D97757]' : ''}`} />
        </button>

        {/* Category Pill */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 z-10">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 text-[#242220] backdrop-blur-md shadow-xs">
            {recipe.category}
          </span>
          {recipe.difficulty && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#242220]/75 text-white backdrop-blur-md">
              {recipe.difficulty}
            </span>
          )}
        </div>
      </div>

      {/* Recipe Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl text-[#242220] font-medium group-hover:text-[#D97757] transition-colors line-clamp-2 leading-tight">
            {recipe.title}
          </h3>

          {recipe.subtitle && (
            <p className="text-xs text-[#635E59] mt-1.5 line-clamp-2 leading-relaxed">
              {recipe.subtitle}
            </p>
          )}
        </div>

        {/* Meta Stats & Quick Actions */}
        <div className="mt-4 pt-3 border-t border-[#F3EFEA] flex items-center justify-between text-xs text-[#8C867E]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#D97757]" />
              <span>{totalTime} mins</span>
            </span>

            {recipe.nutrition?.calories && (
              <span className="flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-[#D97757]" />
                <span>{recipe.nutrition.calories} kcal</span>
              </span>
            )}
          </div>

          <button
            onClick={(e) => onAddIngredientsToShopping(e, recipe)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FBF1ED] text-[#D97757] hover:bg-[#D97757] hover:text-white transition-all font-medium text-[11px]"
            title="Add ingredients to Shopping List"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">+ List</span>
          </button>
        </div>
      </div>
    </div>
  );
};
