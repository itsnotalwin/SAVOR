import React, { useState } from 'react';
import {
  X,
  Heart,
  Clock,
  Users,
  Flame,
  ShoppingBag,
  Play,
  Edit2,
  Trash2,
  Printer,
  Share2,
  Check,
  Timer,
  ChevronRight,
  Info,
  Sparkles,
  Utensils,
  AlertCircle
} from 'lucide-react';
import { Recipe, Ingredient } from '../types';
import { formatAmount, scaleAmount } from '../utils/unitConverter';
import { getRecipePantryMatch, isIngredientInPantry } from '../utils/pantryMatcher';

interface RecipeDetailModalProps {
  recipe: Recipe;
  pantryItems?: string[];
  onClose: () => void;
  onToggleFavorite: (recipeId: string) => void;
  onAddIngredientsToShopping: (ingredients: Ingredient[], recipeTitle: string) => void;
  onStartCookingMode: (recipe: Recipe, targetServings: number) => void;
  onEditRecipe: (recipe: Recipe) => void;
  onDeleteRecipe: (recipeId: string) => void;
}

export const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({
  recipe,
  pantryItems = [],
  onClose,
  onToggleFavorite,
  onAddIngredientsToShopping,
  onStartCookingMode,
  onEditRecipe,
  onDeleteRecipe,
}) => {
  const [targetServings, setTargetServings] = useState<number>(recipe.servings || 2);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  const [checkedSteps, setCheckedSteps] = useState<Record<string, boolean>>({});
  const [activeTimer, setActiveTimer] = useState<{ stepId: string; secondsLeft: number; totalSeconds: number; isRunning: boolean } | null>(null);
  const [addedToList, setAddedToList] = useState<boolean>(false);

  const pantryMatch = getRecipePantryMatch(recipe, pantryItems);
  const hasPantryData = pantryItems.length > 0;

  // Toggle ingredient checked
  const toggleIngredient = (id: string) => {
    setCheckedIngredients(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Toggle step checked
  const toggleStep = (id: string) => {
    setCheckedSteps(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Timer controls
  const handleStartTimer = (stepId: string, minutes: number) => {
    if (activeTimer && activeTimer.stepId === stepId && activeTimer.isRunning) {
      // Pause
      setActiveTimer(prev => prev ? { ...prev, isRunning: false } : null);
      return;
    }

    const totalSec = minutes * 60;
    setActiveTimer({
      stepId,
      secondsLeft: activeTimer?.stepId === stepId ? activeTimer.secondsLeft : totalSec,
      totalSeconds: totalSec,
      isRunning: true
    });
  };

  // Effect for active timer countdown
  React.useEffect(() => {
    let interval: any = null;
    if (activeTimer && activeTimer.isRunning && activeTimer.secondsLeft > 0) {
      interval = setInterval(() => {
        setActiveTimer(prev => {
          if (!prev) return null;
          if (prev.secondsLeft <= 1) {
            clearInterval(interval);
            return { ...prev, secondsLeft: 0, isRunning: false };
          }
          return { ...prev, secondsLeft: prev.secondsLeft - 1 };
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [activeTimer?.isRunning, activeTimer?.secondsLeft]);

  // Handle Add to Shopping List
  const handleAddShopping = () => {
    // Map ingredients with scaled amounts
    const scaledIngredients: Ingredient[] = recipe.ingredients.map(ing => ({
      ...ing,
      amount: scaleAmount(ing.amount, recipe.servings, targetServings)
    }));

    onAddIngredientsToShopping(scaledIngredients, recipe.title);
    setAddedToList(true);
    setTimeout(() => setAddedToList(false), 2500);
  };

  // Share recipe
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: recipe.title,
          text: `Check out this recipe for ${recipe.title} on Savor!`,
          url: window.location.href
        });
      } catch (e) {
        // Share cancelled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Recipe link copied to clipboard!');
    }
  };

  // Format timer text
  const formatTimerText = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-3xl shadow-2xl overflow-hidden border border-[#E6DFD5] my-auto max-h-[92vh] flex flex-col">
        
        {/* Sticky Header Buttons (Hidden when printing) */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2 no-print">
          <button
            onClick={handleShare}
            className="p-2.5 rounded-full bg-white/90 text-[#242220] shadow-sm hover:bg-white transition-all backdrop-blur-md"
            title="Share Recipe"
          >
            <Share2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => window.print()}
            className="flex p-2.5 rounded-full bg-white/90 text-[#242220] shadow-sm hover:bg-white transition-all backdrop-blur-md"
            title="Print Recipe Sheet"
          >
            <Printer className="w-4 h-4" />
          </button>
          <button
            onClick={() => onToggleFavorite(recipe.id)}
            className={`p-2.5 rounded-full backdrop-blur-md transition-all shadow-sm ${
              recipe.isFavorite ? 'bg-white text-[#D97757]' : 'bg-white/90 text-[#242220] hover:bg-white'
            }`}
            title="Favorite"
          >
            <Heart className={`w-4 h-4 ${recipe.isFavorite ? 'fill-[#D97757]' : ''}`} />
          </button>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/90 text-[#242220] shadow-sm hover:bg-white transition-all backdrop-blur-md"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 pb-24">
          
          {/* Print-Only Editorial Header Banner */}
          <div className="hidden print:block print-card-header text-center pt-2">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-[#1B1B1B]">SAVOR KITCHEN RECIPE SHEET</h2>
            <p className="text-xs text-[#635E59] uppercase tracking-widest mt-1">Client-Side Culinary Collection</p>
          </div>

          {/* Header Cover Image (High-Quality on Print and Screen) */}
          <div className="relative h-64 sm:h-80 print:h-72 w-full bg-[#F3EFEA] overflow-hidden print:rounded-2xl print:my-4 print:shadow-xs">
            <img
              src={recipe.imageUrl || 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1200&auto=format&fit=crop'}
              alt={recipe.title}
              className="w-full h-full object-cover print:rounded-2xl print:max-h-80"
              referrerPolicy="no-referrer"
              style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1200&auto=format&fit=crop';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-black/20 print:hidden" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between print:hidden">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#D97757] text-white shadow-xs">
                {recipe.category}
              </span>
            </div>
          </div>

          {/* Title & Description */}
          <div className="px-6 sm:px-8 pt-2">
            <h1 className="font-serif text-3xl sm:text-4xl text-[#242220] font-medium leading-tight">
              {recipe.title}
            </h1>

            {recipe.subtitle && (
              <p className="text-sm sm:text-base text-[#635E59] mt-2 italic font-serif">
                "{recipe.subtitle}"
              </p>
            )}

            <p className="text-sm text-[#3B3835] mt-3 leading-relaxed">
              {recipe.description}
            </p>

            {/* Tags list */}
            {recipe.tags && recipe.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-4">
                {recipe.tags.map((tag, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 rounded-full text-xs bg-[#F3EFEA] text-[#635E59] border border-[#E0D8CB]">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Key Quick Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 p-4 rounded-2xl bg-white border border-[#E6DFD5] shadow-2xs">
              <div className="flex flex-col items-center justify-center p-2 text-center border-r border-[#F3EFEA] last:border-r-0">
                <span className="text-[10px] uppercase font-bold text-[#8C867E]">Prep Time</span>
                <span className="font-semibold text-sm text-[#242220] mt-0.5 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#D97757]" /> {recipe.prepTime} min
                </span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 text-center border-r border-[#F3EFEA] last:border-r-0">
                <span className="text-[10px] uppercase font-bold text-[#8C867E]">Cook Time</span>
                <span className="font-semibold text-sm text-[#242220] mt-0.5 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#D97757]" /> {recipe.cookTime} min
                </span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 text-center border-r border-[#F3EFEA] last:border-r-0">
                <span className="text-[10px] uppercase font-bold text-[#8C867E]">Difficulty</span>
                <span className="font-semibold text-sm text-[#242220] mt-0.5">
                  {recipe.difficulty}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 text-center">
                <span className="text-[10px] uppercase font-bold text-[#8C867E]">Calories</span>
                <span className="font-semibold text-sm text-[#242220] mt-0.5 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-[#D97757]" /> {recipe.nutrition?.calories || 'N/A'}
                </span>
              </div>
            </div>

            {/* Servings Adjuster Bar */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F3EFEA] border border-[#E0D8CB] my-6">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#D97757]" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#635E59]">Adjust Servings</h4>
                  <p className="text-xs text-[#8C867E]">Ingredients scale automatically</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white rounded-xl px-3 py-1.5 border border-[#E6DFD5] shadow-2xs">
                <button
                  onClick={() => setTargetServings(Math.max(1, targetServings - 1))}
                  className="w-7 h-7 rounded-lg bg-[#FAF8F5] text-[#242220] font-bold hover:bg-[#D97757] hover:text-white transition-all flex items-center justify-center text-sm"
                >
                  -
                </button>
                <span className="font-bold text-base text-[#242220] min-w-8 text-center">
                  {targetServings}
                </span>
                <button
                  onClick={() => setTargetServings(targetServings + 1)}
                  className="w-7 h-7 rounded-lg bg-[#FAF8F5] text-[#242220] font-bold hover:bg-[#D97757] hover:text-white transition-all flex items-center justify-center text-sm"
                >
                  +
                </button>
              </div>
            </div>

            {/* Ingredients Section */}
            <div className="my-8">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-serif text-2xl text-[#242220] font-medium flex items-center gap-2">
                  <span>Ingredients</span>
                  <span className="text-xs font-sans font-normal text-[#8C867E] bg-white px-2.5 py-0.5 rounded-full border border-[#E6DFD5]">
                    {recipe.ingredients.length} items
                  </span>
                </h2>

                <button
                  onClick={handleAddShopping}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-2xs ${
                    addedToList
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#D97757] text-white hover:bg-[#C66545]'
                  }`}
                >
                  {addedToList ? <Check className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5" />}
                  <span>{addedToList ? 'Added to List!' : 'Add All to Shopping List'}</span>
                </button>
              </div>

              {/* Pantry Availability Banner */}
              {hasPantryData && (
                <div className={`p-3.5 rounded-2xl mb-4 border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs ${
                  pantryMatch.isFullyAvailable
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-[#FBF6EE] border-[#E8DFC8] text-[#5C4D32]'
                }`}>
                  <div className="flex items-center gap-2.5">
                    {pantryMatch.isFullyAvailable ? (
                      <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-[#D97757] text-white flex items-center justify-center shrink-0">
                        <Utensils className="w-3.5 h-3.5" />
                      </div>
                    )}

                    <div>
                      <span className="font-bold block text-sm">
                        {pantryMatch.isFullyAvailable
                          ? 'Available to Cook Right Now!'
                          : `Pantry Inventory: ${pantryMatch.matchCount} of ${pantryMatch.totalCount} ingredients on hand`}
                      </span>
                      <span className="text-[11px] opacity-80">
                        {pantryMatch.isFullyAvailable
                          ? 'You have all required ingredients in your kitchen pantry.'
                          : `Missing ${pantryMatch.missingIngredients.length} item${pantryMatch.missingIngredients.length > 1 ? 's' : ''} to complete this recipe.`}
                      </span>
                    </div>
                  </div>

                  {!pantryMatch.isFullyAvailable && pantryMatch.missingIngredients.length > 0 && (
                    <button
                      onClick={() => {
                        const scaledMissing = pantryMatch.missingIngredients.map(ing => ({
                          ...ing,
                          amount: scaleAmount(ing.amount, recipe.servings, targetServings)
                        }));
                        onAddIngredientsToShopping(scaledMissing, recipe.title);
                        setAddedToList(true);
                        setTimeout(() => setAddedToList(false), 2500);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-[#242220] text-white hover:bg-black transition-all text-xs font-semibold shrink-0"
                    >
                      + Add Missing ({pantryMatch.missingIngredients.length}) to List
                    </button>
                  )}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {recipe.ingredients.map((ing) => {
                  const scaled = scaleAmount(ing.amount, recipe.servings, targetServings);
                  const formattedAmt = formatAmount(scaled);
                  const isChecked = checkedIngredients[ing.id];
                  const inPantry = hasPantryData && isIngredientInPantry(ing.name, pantryItems);

                  return (
                    <div
                      key={ing.id}
                      onClick={() => toggleIngredient(ing.id)}
                      className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-[#F3EFEA] border-[#DED7CB] opacity-60 line-through text-[#8C867E]'
                          : 'bg-white border-[#E6DFD5] hover:border-[#D97757]/40 text-[#242220]'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                        isChecked ? 'bg-[#D97757] border-[#D97757] text-white' : 'border-[#C8BFB0] bg-white'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>

                      <div className="flex-1 text-sm font-medium flex items-center justify-between gap-2">
                        <div>
                          <span className="font-bold text-[#D97757] mr-1.5">
                            {formattedAmt} {ing.unit}
                          </span>
                          <span>{ing.name}</span>
                        </div>

                        {hasPantryData && (
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold shrink-0 ${
                            inPantry
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                              : 'bg-amber-50 text-amber-800 border border-amber-200/80'
                          }`}>
                            {inPantry ? 'In Pantry' : 'Need'}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Instructions Steps Section */}
            <div className="my-8">
              <h2 className="font-serif text-2xl text-[#242220] font-medium mb-4">
                Step-by-Step Preparation
              </h2>

              <div className="space-y-4">
                {recipe.instructions.map((step) => {
                  const isChecked = checkedSteps[step.id];
                  const hasTimer = step.timerMinutes && step.timerMinutes > 0;
                  const isThisTimerRunning = activeTimer?.stepId === step.id && activeTimer.isRunning;

                  return (
                    <div
                      key={step.id}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                        isChecked
                          ? 'bg-[#F3EFEA] border-[#DED7CB] opacity-70'
                          : 'bg-white border-[#E6DFD5] shadow-2xs'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <button
                          onClick={() => toggleStep(step.id)}
                          className={`mt-0.5 w-6 h-6 rounded-full border flex items-center justify-center transition-all shrink-0 ${
                            isChecked
                              ? 'bg-[#D97757] border-[#D97757] text-white'
                              : 'border-[#C8BFB0] bg-[#FAF8F5] text-[#8C867E] hover:border-[#D97757]'
                          }`}
                        >
                          {isChecked ? <Check className="w-3.5 h-3.5" /> : <span className="text-xs font-bold">{step.stepNumber}</span>}
                        </button>

                        <div className="flex-1">
                          <p className={`text-sm sm:text-base leading-relaxed ${isChecked ? 'line-through text-[#8C867E]' : 'text-[#242220]'}`}>
                            {step.text}
                          </p>

                          {step.tip && (
                            <div className="mt-2 text-xs text-[#D97757] bg-[#FBF1ED] p-2.5 rounded-xl flex items-center gap-2 border border-[#F0D5CB]">
                              <Info className="w-4 h-4 shrink-0" />
                              <span><strong>Chef's Tip:</strong> {step.tip}</span>
                            </div>
                          )}

                          {/* Timer Button for this step */}
                          {hasTimer && (
                            <div className="mt-3 flex items-center gap-2">
                              <button
                                onClick={() => handleStartTimer(step.id, step.timerMinutes!)}
                                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                                  isThisTimerRunning
                                    ? 'bg-amber-500 text-white animate-pulse'
                                    : 'bg-[#F3EFEA] text-[#242220] hover:bg-[#D97757] hover:text-white border border-[#E0D8CB]'
                                }`}
                              >
                                <Timer className="w-3.5 h-3.5" />
                                <span>
                                  {activeTimer?.stepId === step.id
                                    ? `${formatTimerText(activeTimer.secondsLeft)} (${isThisTimerRunning ? 'Pause' : 'Resume'})`
                                    : `Timer: ${step.timerMinutes} min`}
                                </span>
                              </button>

                              {activeTimer?.stepId === step.id && (
                                <button
                                  onClick={() => setActiveTimer(null)}
                                  className="text-xs text-[#8C867E] hover:text-red-600 underline"
                                >
                                  Reset
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Chef Notes */}
            {recipe.notes && (
              <div className="p-4 rounded-2xl bg-[#F3EFEA] border border-[#E0D8CB] my-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#635E59] mb-1">Recipe Notes</h4>
                <p className="text-xs text-[#3B3835] italic leading-relaxed">
                  {recipe.notes}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Fixed Footer Bar (Hidden when printing) */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-md border-t border-[#E6DFD5] p-4 flex items-center justify-between gap-3 no-print">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onEditRecipe(recipe)}
              className="p-2.5 rounded-xl bg-[#F3EFEA] text-[#242220] hover:bg-[#E0D8CB] transition-all"
              title="Edit Recipe"
            >
              <Edit2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                if (confirm(`Delete "${recipe.title}"?`)) {
                  onDeleteRecipe(recipe.id);
                  onClose();
                }
              }}
              className="p-2.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-all"
              title="Delete Recipe"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => onStartCookingMode(recipe, targetServings)}
            className="flex-1 max-w-xs flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#D97757] text-white font-medium text-sm hover:bg-[#C66545] shadow-md transition-all active:scale-98"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Start Hands-Free Cooking</span>
          </button>
        </div>

      </div>
    </div>
  );
};
