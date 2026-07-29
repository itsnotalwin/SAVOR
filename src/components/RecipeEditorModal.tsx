import React, { useState } from 'react';
import { X, Plus, Trash2, Clock, Image, Layers, Sparkles } from 'lucide-react';
import { Recipe, RecipeCategory, Ingredient, InstructionStep, ShoppingCategory } from '../types';
import { detectCategory } from '../utils/unitConverter';

interface RecipeEditorModalProps {
  initialRecipe?: Recipe | null;
  onSave: (recipe: Recipe) => void;
  onClose: () => void;
}

const PRESET_IMAGES = [
  { label: 'Avocado Toast / Breakfast', url: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200&auto=format&fit=crop' },
  { label: 'Salmon / Seafood', url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1200&auto=format&fit=crop' },
  { label: 'Risotto / Pasta', url: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=1200&auto=format&fit=crop' },
  { label: 'Matcha / Drinks', url: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=1200&auto=format&fit=crop' },
  { label: 'Chickpea Bowl / Salad', url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1200&auto=format&fit=crop' },
  { label: 'Berry Tart / Bakery', url: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1200&auto=format&fit=crop' },
  { label: 'Steak / Grilled', url: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop' },
  { label: 'Smoothie Bowl', url: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=1200&auto=format&fit=crop' }
];

const CATEGORIES: RecipeCategory[] = [
  'Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack', 'Beverage', 'Quick & Easy', 'High Protein'
];

const SHOPPING_CATEGORIES: ShoppingCategory[] = [
  'Produce', 'Dairy & Eggs', 'Pantry & Grains', 'Meat & Seafood', 'Spices & Seasoning', 'Bakery', 'Frozen', 'Beverages', 'Other'
];

export const RecipeEditorModal: React.FC<RecipeEditorModalProps> = ({
  initialRecipe,
  onSave,
  onClose,
}) => {
  const [title, setTitle] = useState(initialRecipe?.title || '');
  const [subtitle, setSubtitle] = useState(initialRecipe?.subtitle || '');
  const [description, setDescription] = useState(initialRecipe?.description || '');
  const [category, setCategory] = useState<RecipeCategory>(initialRecipe?.category || 'Dinner');
  const [prepTime, setPrepTime] = useState<number>(initialRecipe?.prepTime || 15);
  const [cookTime, setCookTime] = useState<number>(initialRecipe?.cookTime || 20);
  const [servings, setServings] = useState<number>(initialRecipe?.servings || 4);
  const [difficulty, setDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>(initialRecipe?.difficulty || 'Medium');
  const [imageUrl, setImageUrl] = useState(initialRecipe?.imageUrl || PRESET_IMAGES[0].url);
  const [calories, setCalories] = useState<number | undefined>(initialRecipe?.nutrition?.calories);
  const [notes, setNotes] = useState(initialRecipe?.notes || '');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>(initialRecipe?.tags || ['Homemade', category]);

  // Ingredients state
  const [ingredients, setIngredients] = useState<Ingredient[]>(
    initialRecipe?.ingredients || [
      { id: '1', name: 'Olive Oil', amount: 2, unit: 'tbsp', category: 'Pantry & Grains' },
      { id: '2', name: 'Garlic Cloves', amount: 3, unit: 'cloves', category: 'Produce' }
    ]
  );

  // Instructions state
  const [instructions, setInstructions] = useState<InstructionStep[]>(
    initialRecipe?.instructions || [
      { id: '1', stepNumber: 1, text: 'Prep all ingredients and bring pan to medium heat.', timerMinutes: 2 },
      { id: '2', stepNumber: 2, text: 'Sauté garlic in olive oil until fragrant.', timerMinutes: 3 }
    ]
  );

  // Add Ingredient
  const handleAddIngredient = () => {
    const newId = Date.now().toString();
    setIngredients(prev => [
      ...prev,
      { id: newId, name: '', amount: 1, unit: 'unit', category: 'Produce' }
    ]);
  };

  // Update Ingredient
  const handleUpdateIngredient = (id: string, field: keyof Ingredient, value: any) => {
    setIngredients(prev =>
      prev.map(ing => {
        if (ing.id === id) {
          const updated = { ...ing, [field]: value };
          if (field === 'name' && typeof value === 'string') {
            updated.category = detectCategory(value);
          }
          return updated;
        }
        return ing;
      })
    );
  };

  // Remove Ingredient
  const handleRemoveIngredient = (id: string) => {
    setIngredients(prev => prev.filter(ing => ing.id !== id));
  };

  // Add Instruction Step
  const handleAddInstruction = () => {
    const newId = Date.now().toString();
    setInstructions(prev => [
      ...prev,
      { id: newId, stepNumber: prev.length + 1, text: '', timerMinutes: 0 }
    ]);
  };

  // Update Instruction Step
  const handleUpdateInstruction = (id: string, field: keyof InstructionStep, value: any) => {
    setInstructions(prev =>
      prev.map(st => (st.id === id ? { ...st, [field]: value } : st))
    );
  };

  // Remove Instruction Step
  const handleRemoveInstruction = (id: string) => {
    setInstructions(prev => {
      const filtered = prev.filter(st => st.id !== id);
      return filtered.map((st, idx) => ({ ...st, stepNumber: idx + 1 }));
    });
  };

  // Add Tag
  const handleAddTag = () => {
    if (!tagInput.trim()) return;
    if (!tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
    }
    setTagInput('');
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(t => t !== tagToRemove));
  };

  // Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Please provide a recipe title.');
      return;
    }

    const recipeToSave: Recipe = {
      id: initialRecipe?.id || `recipe-${Date.now()}`,
      title: title.trim(),
      subtitle: subtitle.trim(),
      description: description.trim() || 'Delicious homemade recipe.',
      category,
      prepTime: Number(prepTime) || 10,
      cookTime: Number(cookTime) || 15,
      servings: Number(servings) || 4,
      difficulty,
      isFavorite: initialRecipe?.isFavorite || false,
      imageUrl,
      tags: tags.length > 0 ? tags : [category],
      ingredients: ingredients.filter(i => i.name.trim() !== ''),
      instructions: instructions.filter(i => i.text.trim() !== ''),
      nutrition: { calories: calories ? Number(calories) : undefined },
      notes: notes.trim(),
      createdAt: initialRecipe?.createdAt || Date.now(),
      updatedAt: Date.now()
    };

    onSave(recipeToSave);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-3xl shadow-2xl overflow-hidden border border-[#E6DFD5] my-auto max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E6DFD5] flex items-center justify-between bg-white">
          <div>
            <h2 className="font-serif text-2xl text-[#242220] font-medium">
              {initialRecipe ? 'Edit Recipe' : 'Create New Recipe'}
            </h2>
            <p className="text-xs text-[#635E59]">Draft your recipe with ingredients, servings, and timers</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F3EFEA] text-[#242220] transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-6 sm:p-8 space-y-6 flex-1">
          
          {/* Title & Subtitle */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#635E59] mb-1">
                Recipe Title *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Tuscan Garlic Butter Salmon"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#E6DFD5] bg-white text-[#242220] focus:outline-none focus:border-[#D97757] text-base font-serif font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#635E59] mb-1">
                Subtitle / Headline
              </label>
              <input
                type="text"
                placeholder="e.g. Pan-seared salmon immersed in silky garlic cream"
                value={subtitle}
                onChange={e => setSubtitle(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border border-[#E6DFD5] bg-white text-[#242220] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#635E59] mb-1">
                Description
              </label>
              <textarea
                rows={2}
                placeholder="Brief summary of the recipe..."
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border border-[#E6DFD5] bg-white text-[#242220] text-sm"
              />
            </div>
          </div>

          {/* Category, Difficulty, Times, Servings */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#F3EFEA] border border-[#E0D8CB]">
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#635E59] mb-1">Category</label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value as RecipeCategory)}
                className="w-full px-2.5 py-1.5 rounded-lg border border-[#E6DFD5] bg-white text-xs font-medium"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-[#635E59] mb-1">Difficulty</label>
              <select
                value={difficulty}
                onChange={e => setDifficulty(e.target.value as any)}
                className="w-full px-2.5 py-1.5 rounded-lg border border-[#E6DFD5] bg-white text-xs font-medium"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-[#635E59] mb-1">Prep (mins)</label>
              <input
                type="number"
                min="0"
                value={prepTime}
                onChange={e => setPrepTime(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 rounded-lg border border-[#E6DFD5] bg-white text-xs font-medium"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-[#635E59] mb-1">Cook (mins)</label>
              <input
                type="number"
                min="0"
                value={cookTime}
                onChange={e => setCookTime(Number(e.target.value))}
                className="w-full px-2.5 py-1.5 rounded-lg border border-[#E6DFD5] bg-white text-xs font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#635E59] mb-1">
                Base Servings
              </label>
              <input
                type="number"
                min="1"
                value={servings}
                onChange={e => setServings(Number(e.target.value))}
                className="w-full px-4 py-2 rounded-xl border border-[#E6DFD5] bg-white text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#635E59] mb-1">
                Estimated Calories (optional)
              </label>
              <input
                type="number"
                placeholder="e.g. 450"
                value={calories || ''}
                onChange={e => setCalories(e.target.value ? Number(e.target.value) : undefined)}
                className="w-full px-4 py-2 rounded-xl border border-[#E6DFD5] bg-white text-sm"
              />
            </div>
          </div>

          {/* Cover Photography Picker */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#635E59] mb-2 flex items-center justify-between">
              <span>Cover Photo URL</span>
              <span className="text-[11px] text-[#D97757] font-normal">Pick a photography preset or paste custom link</span>
            </label>

            <input
              type="text"
              value={imageUrl}
              onChange={e => setImageUrl(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-[#E6DFD5] bg-white text-xs mb-3"
              placeholder="https://images.unsplash.com/..."
            />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {PRESET_IMAGES.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setImageUrl(preset.url)}
                  className={`group relative h-16 rounded-xl overflow-hidden border-2 transition-all ${
                    imageUrl === preset.url ? 'border-[#D97757] ring-2 ring-[#D97757]/30' : 'border-[#E6DFD5] hover:border-[#D97757]/50'
                  }`}
                >
                  <img src={preset.url} alt={preset.label} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-1">
                    <span className="text-[10px] text-white font-medium truncate">{preset.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Ingredients Section */}
          <div className="pt-4 border-t border-[#E6DFD5]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-serif text-xl text-[#242220] font-medium">Ingredients</h3>
              <button
                type="button"
                onClick={handleAddIngredient}
                className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#D97757] text-white hover:bg-[#C66545] transition-all"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Ingredient</span>
              </button>
            </div>

            <div className="space-y-2">
              {ingredients.map((ing) => (
                <div key={ing.id} className="flex items-center gap-2 p-2 rounded-xl bg-white border border-[#E6DFD5]">
                  <input
                    type="text"
                    placeholder="Ingredient Name (e.g. Salmon Fillet)"
                    value={ing.name}
                    onChange={e => handleUpdateIngredient(ing.id, 'name', e.target.value)}
                    className="flex-2 px-2.5 py-1.5 text-xs rounded-lg border border-[#E6DFD5]"
                  />
                  <input
                    type="number"
                    step="0.1"
                    placeholder="Qty"
                    value={ing.amount}
                    onChange={e => handleUpdateIngredient(ing.id, 'amount', Number(e.target.value))}
                    className="w-16 px-2 py-1.5 text-xs rounded-lg border border-[#E6DFD5]"
                  />
                  <input
                    type="text"
                    placeholder="Unit (tbsp/cup)"
                    value={ing.unit}
                    onChange={e => handleUpdateIngredient(ing.id, 'unit', e.target.value)}
                    className="w-20 px-2 py-1.5 text-xs rounded-lg border border-[#E6DFD5]"
                  />
                  <select
                    value={ing.category}
                    onChange={e => handleUpdateIngredient(ing.id, 'category', e.target.value)}
                    className="w-28 px-1.5 py-1.5 text-[11px] rounded-lg border border-[#E6DFD5] bg-[#FAF8F5]"
                  >
                    {SHOPPING_CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={() => handleRemoveIngredient(ing.id)}
                    className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions Section */}
          <div className="pt-4 border-t border-[#E6DFD5]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-serif text-xl text-[#242220] font-medium">Preparation Steps</h3>
              <button
                type="button"
                onClick={handleAddInstruction}
                className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#D97757] text-white hover:bg-[#C66545] transition-all"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Step</span>
              </button>
            </div>

            <div className="space-y-3">
              {instructions.map((st) => (
                <div key={st.id} className="p-3 rounded-xl bg-white border border-[#E6DFD5] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#D97757]">Step {st.stepNumber}</span>
                    <div className="flex items-center gap-2">
                      <label className="text-[10px] text-[#8C867E]">Timer (mins):</label>
                      <input
                        type="number"
                        min="0"
                        value={st.timerMinutes || 0}
                        onChange={e => handleUpdateInstruction(st.id, 'timerMinutes', Number(e.target.value))}
                        className="w-16 px-2 py-1 text-xs rounded-lg border border-[#E6DFD5]"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveInstruction(st.id)}
                        className="p-1 text-red-500 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  <textarea
                    rows={2}
                    placeholder="Describe step instructions clearly..."
                    value={st.text}
                    onChange={e => handleUpdateInstruction(st.id, 'text', e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#E6DFD5]"
                  />
                  <input
                    type="text"
                    placeholder="Chef's Tip (optional)"
                    value={st.tip || ''}
                    onChange={e => handleUpdateInstruction(st.id, 'tip', e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-[#E6DFD5] bg-[#FBF1ED] text-[#D97757]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tags & Chef Notes */}
          <div className="pt-4 border-t border-[#E6DFD5] space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-[#635E59] mb-1">Tags</label>
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="text"
                  placeholder="e.g. Vegetarian, High Fiber"
                  value={tagInput}
                  onChange={e => setTagInput(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleAddTag(); } }}
                  className="px-3 py-1.5 text-xs rounded-lg border border-[#E6DFD5] flex-1"
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="px-3 py-1.5 bg-[#F3EFEA] text-xs font-semibold rounded-lg hover:bg-[#E0D8CB]"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 rounded-full text-xs bg-[#F3EFEA] text-[#242220] border border-[#E0D8CB] flex items-center gap-1">
                    #{tag}
                    <button type="button" onClick={() => handleRemoveTag(tag)} className="hover:text-red-500">×</button>
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-[#635E59] mb-1">Recipe Notes</label>
              <textarea
                rows={2}
                placeholder="Any special notes, wine pairings, or substitution options..."
                value={notes}
                onChange={e => setNotes(e.target.value)}
                className="w-full px-4 py-2 text-xs rounded-xl border border-[#E6DFD5] bg-white"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="pt-6 border-t border-[#E6DFD5] flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-[#E6DFD5] text-xs font-semibold text-[#635E59] hover:bg-[#F3EFEA]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#D97757] text-white text-xs font-semibold hover:bg-[#C66545] shadow-xs"
            >
              Save Recipe
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
