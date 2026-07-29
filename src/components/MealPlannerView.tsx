import React, { useState } from 'react';
import { Calendar, Plus, Trash2, ShoppingBag, Check, ChevronRight } from 'lucide-react';
import { MealPlanDay, Recipe, DayOfWeek, Ingredient } from '../types';

interface MealPlannerViewProps {
  mealPlan: MealPlanDay[];
  recipes: Recipe[];
  onUpdateMealPlan: (updatedPlan: MealPlanDay[]) => void;
  onAddIngredientsToShopping: (ingredients: Ingredient[], recipeTitle: string) => void;
  onSelectRecipe: (recipe: Recipe) => void;
}

export const MealPlannerView: React.FC<MealPlannerViewProps> = ({
  mealPlan,
  recipes,
  onUpdateMealPlan,
  onAddIngredientsToShopping,
  onSelectRecipe,
}) => {
  const [selectedDay, setSelectedDay] = useState<DayOfWeek | null>(null);
  const [addedWeekShopping, setAddedWeekShopping] = useState(false);

  // Add recipe to day
  const handleAddRecipeToDay = (dayName: DayOfWeek, recipeId: string) => {
    const updated = mealPlan.map(d => {
      if (d.day === dayName) {
        return {
          ...d,
          recipeIds: d.recipeIds.includes(recipeId) ? d.recipeIds : [...d.recipeIds, recipeId]
        };
      }
      return d;
    });
    onUpdateMealPlan(updated);
    setSelectedDay(null);
  };

  // Remove recipe from day
  const handleRemoveFromDay = (dayName: DayOfWeek, recipeId: string) => {
    const updated = mealPlan.map(d => {
      if (d.day === dayName) {
        return {
          ...d,
          recipeIds: d.recipeIds.filter(id => id !== recipeId)
        };
      }
      return d;
    });
    onUpdateMealPlan(updated);
  };

  // Add all week's ingredients to shopping list
  const handleAddAllWeekToShopping = () => {
    const allIngredients: Ingredient[] = [];

    mealPlan.forEach(day => {
      day.recipeIds.forEach(id => {
        const found = recipes.find(r => r.id === id);
        if (found) {
          allIngredients.push(...found.ingredients);
        }
      });
    });

    if (allIngredients.length === 0) {
      alert('No recipes currently scheduled in your weekly plan!');
      return;
    }

    onAddIngredientsToShopping(allIngredients, 'Weekly Meal Plan');
    setAddedWeekShopping(true);
    setTimeout(() => setAddedWeekShopping(false), 2500);
  };

  // Clear entire week
  const handleClearWeek = () => {
    if (confirm('Clear all scheduled meals for this week?')) {
      const cleared = mealPlan.map(d => ({ ...d, recipeIds: [] }));
      onUpdateMealPlan(cleared);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E6DFD5]">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#242220] font-medium leading-tight">
            Weekly Meal Planner
          </h1>
          <p className="text-xs sm:text-sm text-[#635E59] mt-0.5">
            Plan your meals for the week & auto-generate a consolidated shopping list
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleAddAllWeekToShopping}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all shadow-2xs ${
              addedWeekShopping
                ? 'bg-emerald-600 text-white'
                : 'bg-[#D97757] text-white hover:bg-[#C66545]'
            }`}
          >
            {addedWeekShopping ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
            <span>{addedWeekShopping ? 'Week Added to List!' : 'Add Week to Shopping List'}</span>
          </button>

          <button
            onClick={handleClearWeek}
            className="p-2 rounded-xl bg-white border border-[#E6DFD5] text-[#8C867E] hover:text-red-600 hover:bg-red-50 transition-all"
            title="Clear entire week"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
        {mealPlan.map((dayPlan) => {
          const scheduledRecipes = dayPlan.recipeIds
            .map(id => recipes.find(r => r.id === id))
            .filter(Boolean) as Recipe[];

          return (
            <div
              key={dayPlan.day}
              className="bg-white rounded-2xl border border-[#E6DFD5] p-3 flex flex-col justify-between shadow-2xs hover:border-[#D97757]/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#F3EFEA]">
                  <span className="font-serif text-base font-medium text-[#242220]">
                    {dayPlan.day}
                  </span>
                  <button
                    onClick={() => setSelectedDay(dayPlan.day)}
                    className="p-1 rounded-lg bg-[#FAF8F5] hover:bg-[#D97757] hover:text-white text-[#8C867E] transition-all"
                    title={`Add recipe to ${dayPlan.day}`}
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Scheduled Recipes list */}
                {scheduledRecipes.length === 0 ? (
                  <div className="py-6 text-center text-[11px] text-[#8C867E] italic">
                    No meals planned
                  </div>
                ) : (
                  <div className="space-y-2">
                    {scheduledRecipes.map(recipe => (
                      <div
                        key={recipe.id}
                        className="group/item relative rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] p-2 hover:bg-white hover:border-[#D97757]/40 transition-all cursor-pointer"
                        onClick={() => onSelectRecipe(recipe)}
                      >
                        <div className="flex items-center gap-2">
                          <img
                            src={recipe.imageUrl}
                            alt={recipe.title}
                            className="w-8 h-8 rounded-lg object-cover shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-medium text-[#242220] truncate group-hover/item:text-[#D97757]">
                              {recipe.title}
                            </h4>
                            <span className="text-[10px] text-[#8C867E]">
                              {recipe.prepTime + recipe.cookTime} mins
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveFromDay(dayPlan.day, recipe.id);
                          }}
                          className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white flex items-center justify-center text-[10px] opacity-0 group-hover/item:opacity-100 transition-opacity shadow-xs"
                          title="Remove recipe from day"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => setSelectedDay(dayPlan.day)}
                className="mt-3 w-full py-1.5 rounded-xl bg-[#F3EFEA] hover:bg-[#E0D8CB] text-[11px] font-semibold text-[#635E59] transition-all"
              >
                + Plan Meal
              </button>
            </div>
          );
        })}
      </div>

      {/* Recipe Selector Modal for Day */}
      {selectedDay && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-[#FAF8F5] rounded-3xl p-6 border border-[#E6DFD5] shadow-2xl space-y-4 max-h-[80vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-[#E6DFD5]">
              <h3 className="font-serif text-2xl font-medium text-[#242220]">
                Select Recipe for {selectedDay}
              </h3>
              <button onClick={() => setSelectedDay(null)} className="text-[#8C867E] hover:text-[#242220]">
                ×
              </button>
            </div>

            <div className="overflow-y-auto space-y-2 flex-1">
              {recipes.map(recipe => (
                <div
                  key={recipe.id}
                  onClick={() => handleAddRecipeToDay(selectedDay, recipe.id)}
                  className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#E6DFD5] hover:border-[#D97757] cursor-pointer transition-all"
                >
                  <img src={recipe.imageUrl} alt={recipe.title} className="w-12 h-12 rounded-lg object-cover" />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-[#242220]">{recipe.title}</h4>
                    <p className="text-xs text-[#8C867E]">{recipe.category} • {recipe.prepTime + recipe.cookTime} mins</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#8C867E]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
