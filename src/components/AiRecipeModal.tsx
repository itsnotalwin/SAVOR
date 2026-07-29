import React, { useState } from 'react';
import { Sparkles, ChefHat, X, Check, Utensils, Clock, Flame, RefreshCw, BookmarkPlus, ArrowRight, AlertCircle, Wand2 } from 'lucide-react';
import { Recipe } from '../types';
import confetti from 'canvas-confetti';

interface AiRecipeModalProps {
  isOpen: boolean;
  onClose: () => void;
  pantryItems: string[];
  onSaveRecipe: (recipe: Recipe) => void;
  onOpenRecipeDetail: (recipe: Recipe) => void;
}

const DIETARY_OPTIONS = ['Quick & Easy', 'High Protein', 'Vegetarian', 'Vegan', 'Low Carb', 'Comfort Food', 'Kid Friendly'];
const CATEGORY_OPTIONS = ['Dinner', 'Lunch', 'Breakfast', 'Snacks', 'Dessert', 'Beverages'];

export const AiRecipeModal: React.FC<AiRecipeModalProps> = ({
  isOpen,
  onClose,
  pantryItems,
  onSaveRecipe,
  onOpenRecipeDetail,
}) => {
  const [selectedPantry, setSelectedPantry] = useState<string[]>(pantryItems);
  const [category, setCategory] = useState<string>('Dinner');
  const [selectedDietary, setSelectedDietary] = useState<string[]>(['Quick & Easy']);
  const [customPrompt, setCustomPrompt] = useState<string>('');
  
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedRecipe, setGeneratedRecipe] = useState<Recipe | null>(null);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  React.useEffect(() => {
    if (isOpen) {
      setSelectedPantry(pantryItems);
      setIsGenerating(false);
      setError(null);
      setGeneratedRecipe(null);
      setIsSaved(false);
      setCustomPrompt('');
    }
  }, [isOpen, pantryItems]);

  if (!isOpen) return null;

  const togglePantryItem = (item: string) => {
    setSelectedPantry(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const toggleDietary = (item: string) => {
    setSelectedDietary(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setError(null);
    setGeneratedRecipe(null);
    setIsSaved(false);

    try {
      const res = await fetch('/api/generate-recipe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pantryItems: selectedPantry,
          category,
          dietary: selectedDietary,
          customPrompt: customPrompt.trim()
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to generate recipe from AI service.');
      }

      setGeneratedRecipe(data.recipe);
    } catch (err: any) {
      console.error('Error generating AI recipe:', err);
      setError(err.message || 'Could not connect to AI service. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSave = () => {
    if (!generatedRecipe) return;
    onSaveRecipe(generatedRecipe);
    setIsSaved(true);
    
    // Trigger confetti celebrating new recipe
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fade-in no-print">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#E6DFD5] shadow-2xl overflow-hidden my-6 flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-[#242220] via-[#2F2C29] to-[#242220] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#D97757] flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-xl sm:text-2xl font-medium tracking-tight">AI Pantry Chef</h2>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Gemini Powered
                </span>
              </div>
              <p className="text-xs text-stone-300">Create custom culinary recipes directly from your kitchen pantry</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
            title="Close AI Chef"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* If no recipe generated yet or generating */}
          {!generatedRecipe && !isGenerating && (
            <div className="space-y-6">
              
              {/* Select Category */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#635E59] mb-2">
                  1. Meal Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {CATEGORY_OPTIONS.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                        category === cat
                          ? 'bg-[#D97757] text-white border-[#D97757] shadow-xs'
                          : 'bg-white text-[#242220] border-[#E6DFD5] hover:bg-[#F3EFEA]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Pantry Ingredients */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#635E59]">
                    2. Select Pantry Ingredients ({selectedPantry.length} of {pantryItems.length})
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedPantry([...pantryItems])}
                      className="text-[11px] text-[#D97757] font-bold hover:underline"
                    >
                      Select All
                    </button>
                    <span className="text-stone-300">|</span>
                    <button
                      onClick={() => setSelectedPantry([])}
                      className="text-[11px] text-stone-500 hover:underline"
                    >
                      Clear
                    </button>
                  </div>
                </div>

                {pantryItems.length === 0 ? (
                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD5] text-center text-xs text-[#635E59]">
                    Your kitchen pantry is currently empty. You can still prompt AI to create recipes, or add items in the Pantry tab!
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2 max-h-36 overflow-y-auto p-3 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD5]">
                    {pantryItems.map((item) => {
                      const isSelected = selectedPantry.includes(item);
                      return (
                        <button
                          key={item}
                          onClick={() => togglePantryItem(item)}
                          className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-medium border transition-all ${
                            isSelected
                              ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                              : 'bg-white text-[#635E59] border-[#E6DFD5] hover:border-[#D97757]'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          <span>{item}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Dietary Preferences */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#635E59] mb-2">
                  3. Dietary & Cooking Style
                </label>
                <div className="flex flex-wrap gap-2">
                  {DIETARY_OPTIONS.map((tag) => {
                    const isSelected = selectedDietary.includes(tag);
                    return (
                      <button
                        key={tag}
                        onClick={() => toggleDietary(tag)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                          isSelected
                            ? 'bg-[#242220] text-white border-[#242220]'
                            : 'bg-white text-[#635E59] border-[#E6DFD5] hover:bg-[#F3EFEA]'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}{tag}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom Prompt Input */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#635E59] mb-2">
                  4. Special Cravings or Instructions (Optional)
                </label>
                <input
                  type="text"
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  placeholder="e.g., Creamy garlic sauce, spicy skillet, under 20 mins, Mediterranean style..."
                  className="w-full px-4 py-2.5 rounded-2xl bg-white border border-[#E6DFD5] text-sm focus:outline-none focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757]"
                />
              </div>

              {error && (
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>{error}</span>
                </div>
              )}

              {/* Generate Button */}
              <button
                onClick={handleGenerate}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#D97757] hover:bg-[#C66545] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Wand2 className="w-4 h-4" />
                <span>Craft AI Recipe From Pantry</span>
              </button>
            </div>
          )}

          {/* Loading State */}
          {isGenerating && (
            <div className="py-16 text-center space-y-4">
              <div className="relative w-16 h-16 mx-auto">
                <div className="absolute inset-0 rounded-full border-4 border-[#D97757]/20 border-t-[#D97757] animate-spin" />
                <div className="absolute inset-2 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#D97757]">
                  <ChefHat className="w-6 h-6 animate-bounce" />
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="font-serif text-2xl text-[#242220] font-medium">Culinary AI is cooking...</h3>
                <p className="text-xs text-[#635E59] max-w-sm mx-auto">
                  Cross-referencing {selectedPantry.length} pantry items to compose a custom recipe with step-by-step instructions.
                </p>
              </div>
            </div>
          )}

          {/* Generated Recipe Result */}
          {generatedRecipe && !isGenerating && (
            <div className="space-y-6 animate-fade-in">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Custom AI Recipe Created Successfully!</span>
                </div>
                <button
                  onClick={handleGenerate}
                  className="flex items-center gap-1 text-xs text-emerald-800 font-bold hover:underline"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Regenerate</span>
                </button>
              </div>

              {/* Recipe Preview Card */}
              <div className="bg-white rounded-3xl border border-[#E6DFD5] overflow-hidden shadow-sm">
                <div className="relative h-48 sm:h-56 w-full bg-[#F3EFEA]">
                  <img
                    src={generatedRecipe.imageUrl || 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1200&auto=format&fit=crop'}
                    alt={generatedRecipe.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1200&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#D97757] text-white">
                      {generatedRecipe.category}
                    </span>
                    <h3 className="font-serif text-2xl font-medium mt-1 leading-tight">{generatedRecipe.title}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs text-[#635E59] italic font-serif">"{generatedRecipe.subtitle}"</p>
                  <p className="text-xs text-[#3B3835] leading-relaxed">{generatedRecipe.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-4 gap-2 p-3 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] text-center text-xs">
                    <div>
                      <span className="text-[10px] text-[#8C867E] block uppercase font-bold">Prep</span>
                      <span className="font-semibold text-[#242220]">{generatedRecipe.prepTime} min</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#8C867E] block uppercase font-bold">Cook</span>
                      <span className="font-semibold text-[#242220]">{generatedRecipe.cookTime} min</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#8C867E] block uppercase font-bold">Servings</span>
                      <span className="font-semibold text-[#242220]">{generatedRecipe.servings}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#8C867E] block uppercase font-bold">Calories</span>
                      <span className="font-semibold text-[#242220]">{generatedRecipe.nutrition?.calories}</span>
                    </div>
                  </div>

                  {/* Ingredients List */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#635E59] mb-2">
                      Ingredients ({generatedRecipe.ingredients.length})
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {generatedRecipe.ingredients.map((ing, i) => (
                        <li key={i} className="p-2 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] flex items-center justify-between">
                          <span className="font-medium">{ing.name}</span>
                          <span className="font-bold text-[#D97757]">{ing.amount} {ing.unit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instructions Preview */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#635E59] mb-2">
                      Steps Preview
                    </h4>
                    <ol className="space-y-2 text-xs text-[#3B3835]">
                      {generatedRecipe.instructions.map((st) => (
                        <li key={st.stepNumber} className="flex items-start gap-2">
                          <span className="w-5 h-5 rounded-full bg-[#D97757] text-white font-bold flex items-center justify-center shrink-0 text-[10px]">
                            {st.stepNumber}
                          </span>
                          <span className="leading-snug">{st.text}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleSave}
                  disabled={isSaved}
                  className={`flex-1 py-3 px-5 rounded-2xl font-semibold text-xs transition-all flex items-center justify-center gap-2 ${
                    isSaved
                      ? 'bg-emerald-700 text-white'
                      : 'bg-[#D97757] hover:bg-[#C66545] text-white shadow-md'
                  }`}
                >
                  {isSaved ? <Check className="w-4 h-4" /> : <BookmarkPlus className="w-4 h-4" />}
                  <span>{isSaved ? 'Saved to My Recipes!' : 'Save to My Recipe Collection'}</span>
                </button>

                <button
                  onClick={() => {
                    if (!isSaved) handleSave();
                    onOpenRecipeDetail(generatedRecipe);
                    onClose();
                  }}
                  className="py-3 px-5 rounded-2xl bg-[#242220] hover:bg-black text-white font-semibold text-xs transition-all flex items-center justify-center gap-2"
                >
                  <span>Start Cooking Mode</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
