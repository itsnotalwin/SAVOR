import React, { useState, useEffect } from 'react';
import {
  Search,
  Plus,
  Heart,
  Clock,
  Sparkles,
  ShoppingBag,
  SlidersHorizontal,
  Flame,
  ChefHat,
  Utensils,
  BookOpen
} from 'lucide-react';
import { Recipe, ShoppingItem, MealPlanDay, ActiveTab, RecipeCategory, Ingredient } from './types';
import {
  getStoredRecipes,
  saveStoredRecipes,
  getStoredShoppingItems,
  saveStoredShoppingItems,
  getStoredMealPlan,
  saveStoredMealPlan,
  getStoredSettings,
  saveStoredSettings
} from './utils/localStorage';
import { getRecipePantryMatch } from './utils/pantryMatcher';

import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { RecipeCard } from './components/RecipeCard';
import { RecipeDetailModal } from './components/RecipeDetailModal';
import { RecipeEditorModal } from './components/RecipeEditorModal';
import { ShoppingListView } from './components/ShoppingListView';
import { MealPlannerView } from './components/MealPlannerView';
import { PantryView } from './components/PantryView';
import { SettingsModal } from './components/SettingsModal';
import { CookingModeModal } from './components/CookingModeModal';
import { AiRecipeModal } from './components/AiRecipeModal';
import { CookbooksSection } from './components/CookbooksSection';
import { Toast } from './components/Toast';

const CATEGORY_FILTERS: RecipeCategory[] = [
  'All',
  'Breakfast',
  'Lunch',
  'Dinner',
  'Dessert',
  'Snack',
  'Beverage',
  'Quick & Easy',
  'High Protein'
];

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('recipes');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [shoppingItems, setShoppingItems] = useState<ShoppingItem[]>([]);
  const [mealPlan, setMealPlan] = useState<MealPlanDay[]>([]);
  const [pantryItems, setPantryItems] = useState<string[]>([]);

  // Search & Category Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<RecipeCategory>('All');
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [availableToCookOnly, setAvailableToCookOnly] = useState(false);
  const [recipeSubTab, setRecipeSubTab] = useState<'solo' | 'cookbooks'>('solo');

  // Modals
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [cookingRecipe, setCookingRecipe] = useState<{ recipe: Recipe; targetServings: number } | null>(null);
  const [isAiChefOpen, setIsAiChefOpen] = useState(false);

  // Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // PWA Prompt
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  // Load Initial Data
  useEffect(() => {
    setRecipes(getStoredRecipes());
    setShoppingItems(getStoredShoppingItems());
    setMealPlan(getStoredMealPlan());
    const settings = getStoredSettings();
    setPantryItems(settings.pantryItems || []);
  }, []);

  // Listen for PWA BeforeInstallPrompt
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  // Trigger PWA Install
  const handleInstallPWA = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          setDeferredPrompt(null);
        }
      });
    }
  };

  // Show Toast Helper
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Save Recipes Handler
  const handleSaveRecipe = (recipeToSave: Recipe) => {
    const exists = recipes.some(r => r.id === recipeToSave.id);
    let updated: Recipe[];
    if (exists) {
      updated = recipes.map(r => (r.id === recipeToSave.id ? recipeToSave : r));
      showToast(`Updated "${recipeToSave.title}"`);
    } else {
      updated = [recipeToSave, ...recipes];
      showToast(`Added "${recipeToSave.title}"`);
    }
    setRecipes(updated);
    saveStoredRecipes(updated);
    setIsEditorOpen(false);
    setEditingRecipe(null);
  };

  // Toggle Favorite
  const handleToggleFavorite = (e: React.MouseEvent | null, recipeId: string) => {
    if (e) e.stopPropagation();
    const updated = recipes.map(r => {
      if (r.id === recipeId) {
        return { ...r, isFavorite: !r.isFavorite };
      }
      return r;
    });
    setRecipes(updated);
    saveStoredRecipes(updated);

    if (selectedRecipe && selectedRecipe.id === recipeId) {
      setSelectedRecipe(prev => prev ? { ...prev, isFavorite: !prev.isFavorite } : null);
    }
  };

  // Delete Recipe
  const handleDeleteRecipe = (recipeId: string) => {
    const updated = recipes.filter(r => r.id !== recipeId);
    setRecipes(updated);
    saveStoredRecipes(updated);
    showToast('Recipe deleted');
  };

  // Add Ingredients to Shopping List
  const handleAddIngredientsToShopping = (
    ingredients: Ingredient[],
    recipeTitle: string
  ) => {
    const newItems: ShoppingItem[] = ingredients.map(ing => ({
      id: `item-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      name: ing.name,
      amount: ing.amount,
      unit: ing.unit,
      category: ing.category,
      isChecked: false,
      recipeTitle,
      addedAt: Date.now()
    }));

    const updated = [...shoppingItems, ...newItems];
    setShoppingItems(updated);
    saveStoredShoppingItems(updated);
    showToast(`Added ${newItems.length} ingredients to Shopping List!`);
  };

  // Shopping List Handlers
  const handleAddSingleShoppingItem = (item: ShoppingItem) => {
    const updated = [item, ...shoppingItems];
    setShoppingItems(updated);
    saveStoredShoppingItems(updated);
  };

  const handleToggleShoppingItem = (id: string) => {
    const updated = shoppingItems.map(item =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );
    setShoppingItems(updated);
    saveStoredShoppingItems(updated);
  };

  const handleDeleteShoppingItem = (id: string) => {
    const updated = shoppingItems.filter(item => item.id !== id);
    setShoppingItems(updated);
    saveStoredShoppingItems(updated);
  };

  const handleClearCompletedShopping = () => {
    const updated = shoppingItems.filter(item => !item.isChecked);
    setShoppingItems(updated);
    saveStoredShoppingItems(updated);
    showToast('Cleared checked items');
  };

  const handleClearAllShopping = () => {
    setShoppingItems([]);
    saveStoredShoppingItems([]);
  };

  // Update Meal Plan
  const handleUpdateMealPlan = (plan: MealPlanDay[]) => {
    setMealPlan(plan);
    saveStoredMealPlan(plan);
  };

  // Update Pantry Items
  const handleUpdatePantry = (items: string[]) => {
    setPantryItems(items);
    const currentSettings = getStoredSettings();
    saveStoredSettings({ ...currentSettings, pantryItems: items });
  };

  // Count recipes available to cook right now
  const availableToCookCount = recipes.filter(
    r => getRecipePantryMatch(r, pantryItems).isFullyAvailable
  ).length;

  // Filtered Recipes list
  const filteredRecipes = recipes.filter(r => {
    const matchesSubTab =
      recipeSubTab === 'solo' ? (!r.cookbookId || searchQuery.length > 0) : true;

    const matchesSearch =
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'All' ? true : r.category === selectedCategory || r.tags.includes(selectedCategory);

    const matchesFavorite = onlyFavorites ? r.isFavorite : true;

    const matchesAvailable = availableToCookOnly
      ? getRecipePantryMatch(r, pantryItems).isFullyAvailable
      : true;

    return matchesSubTab && matchesSearch && matchesCategory && matchesFavorite && matchesAvailable;
  });

  const activeShoppingCount = shoppingItems.filter(i => !i.isChecked).length;

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#242220] pb-24 md:pb-12 flex flex-col font-sans">
      
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenCreateRecipe={() => {
          setEditingRecipe(null);
          setIsEditorOpen(true);
        }}
        pantryCount={pantryItems.length}
        deferredPrompt={deferredPrompt}
        onInstallPWA={handleInstallPWA}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1 max-w-6xl w-full mx-auto">
        {activeTab === 'recipes' && (
          <div className="px-4 sm:px-6 py-6 space-y-6">
            
            {/* Top Bar Header & Section Switcher */}
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="font-serif text-3xl sm:text-4xl text-[#242220] font-medium leading-tight">
                    Artisanal Recipe Collection
                  </h1>
                  <p className="text-xs sm:text-sm text-[#635E59] mt-0.5">
                    Explore individual solo dishes or browse authentic Old School South African Cookbooks
                  </p>
                </div>

                {/* Sub-Navigation Switcher: Solo Recipes vs Cookbooks */}
                <div className="flex items-center gap-1.5 p-1.5 bg-[#F3EFEA] rounded-2xl border border-[#E6DFD5] w-fit shrink-0">
                  <button
                    onClick={() => setRecipeSubTab('solo')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      recipeSubTab === 'solo'
                        ? 'bg-white text-[#242220] shadow-xs'
                        : 'text-[#635E59] hover:text-[#242220]'
                    }`}
                  >
                    <Utensils className="w-4 h-4 text-[#D97757]" />
                    <span>Solo Recipes</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] bg-[#FAF8F5] text-[#8C867E] border border-[#E6DFD5]">
                      {recipes.filter(r => !r.cookbookId).length}
                    </span>
                  </button>

                  <button
                    onClick={() => setRecipeSubTab('cookbooks')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      recipeSubTab === 'cookbooks'
                        ? 'bg-[#242220] text-white shadow-xs'
                        : 'text-[#635E59] hover:text-[#242220]'
                    }`}
                  >
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    <span>South African Cookbooks</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      4 Books
                    </span>
                  </button>
                </div>
              </div>

              {/* Quick Filter Pill Toggles (for Solo Recipes view) */}
              {recipeSubTab === 'solo' && (
                <div className="flex items-center justify-between gap-4 flex-wrap pt-1 border-t border-[#E6DFD5]/60">
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* AI Pantry Chef Launcher Button */}
                    <button
                      onClick={() => setIsAiChefOpen(true)}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#242220] hover:bg-black text-white border border-amber-500/30 shadow-xs transition-all cursor-pointer"
                      title="Craft custom AI recipes using your pantry ingredients"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>AI Pantry Chef</span>
                    </button>

                    {/* Available to Cook Toggle Button */}
                    <button
                      onClick={() => setAvailableToCookOnly(!availableToCookOnly)}
                      className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                        availableToCookOnly
                          ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs ring-2 ring-emerald-600/30'
                          : 'bg-white text-[#242220] border-[#E6DFD5] hover:bg-[#F3EFEA]'
                      }`}
                      title="Filter recipes with 100% of ingredients in your kitchen pantry"
                    >
                      <Utensils className={`w-3.5 h-3.5 ${availableToCookOnly ? 'text-white' : 'text-emerald-600'}`} />
                      <span>Available to Cook ({availableToCookCount})</span>
                    </button>

                    {/* Quick Favorites Pill Toggle */}
                    <button
                      onClick={() => setOnlyFavorites(!onlyFavorites)}
                      className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                        onlyFavorites
                          ? 'bg-[#D97757] text-white border-[#D97757] shadow-xs'
                          : 'bg-white text-[#242220] border-[#E6DFD5] hover:bg-[#F3EFEA]'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-white' : ''}`} />
                      <span>Favorites Only ({recipes.filter(r => r.isFavorite).length})</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* View Switching Logic */}
            {recipeSubTab === 'cookbooks' ? (
              <CookbooksSection
                allRecipes={recipes}
                onSelectRecipe={setSelectedRecipe}
                onCookRecipe={(r) => setCookingRecipe({ recipe: r, targetServings: r.servings })}
              />
            ) : (
              /* Solo Recipes View */
              <div className="space-y-6">
                {/* Active Available to Cook Info Banner */}
                {availableToCookOnly && (
                  <div className="bg-emerald-50 border border-emerald-200/90 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-emerald-950">
                    <div className="flex items-center gap-2.5 text-xs font-medium">
                      <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>
                        Showing <strong>{filteredRecipes.length}</strong> recipe{filteredRecipes.length !== 1 ? 's' : ''} you can make right now using your <strong>{pantryItems.length}</strong> pantry items without going to the store!
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveTab('pantry')}
                      className="text-xs text-emerald-800 underline font-bold hover:text-emerald-950 shrink-0 cursor-pointer"
                    >
                      Manage Kitchen Pantry →
                    </button>
                  </div>
                )}

                {/* Search Bar */}
                <div className="relative w-full">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C867E]" />
                  <input
                    type="text"
                    placeholder="Search solo recipes, ingredients, tags (e.g. Salmon, Avocado, Matcha)..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-[#E6DFD5] text-sm text-[#242220] placeholder-[#8C867E] focus:outline-none focus:ring-2 focus:ring-[#D97757]/30 shadow-2xs"
                  />
                </div>

                {/* Category Filter Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {CATEGORY_FILTERS.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border cursor-pointer ${
                        selectedCategory === cat
                          ? 'bg-[#242220] text-white border-[#242220]'
                          : 'bg-white text-[#635E59] border-[#E6DFD5] hover:bg-[#F3EFEA]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Recipes Grid */}
                {filteredRecipes.length === 0 ? (
                  <div className="py-20 text-center space-y-3 bg-white rounded-3xl border border-[#E6DFD5] p-8">
                    <ChefHat className="w-12 h-12 text-[#D97757] mx-auto opacity-80" />
                    <h3 className="font-serif text-2xl text-[#242220] font-medium">
                      {availableToCookOnly
                        ? 'No recipes match your current pantry inventory'
                        : 'No recipes match your filter'}
                    </h3>
                    <p className="text-xs text-[#635E59] max-w-md mx-auto">
                      {availableToCookOnly
                        ? `You currently have ${pantryItems.length} items in your kitchen pantry. Add missing items in Kitchen Pantry to unlock instant recipes without store trips!`
                        : 'Try searching for something else or reset your filter.'}
                    </p>
                    <div className="flex items-center justify-center gap-3 pt-2">
                      {availableToCookOnly ? (
                        <>
                          <button
                            onClick={() => setActiveTab('pantry')}
                            className="px-4 py-2 rounded-xl bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition-all cursor-pointer"
                          >
                            Add Items in Kitchen Pantry
                          </button>
                          <button
                            onClick={() => setAvailableToCookOnly(false)}
                            className="px-4 py-2 rounded-xl bg-white border border-[#E6DFD5] text-[#242220] text-xs font-semibold hover:bg-[#F3EFEA] transition-all cursor-pointer"
                          >
                            Show All Recipes
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => {
                            setSearchQuery('');
                            setSelectedCategory('All');
                            setOnlyFavorites(false);
                            setAvailableToCookOnly(false);
                          }}
                          className="px-4 py-2 rounded-xl bg-[#D97757] text-white text-xs font-semibold hover:bg-[#C66545] cursor-pointer"
                        >
                          Reset Filters
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredRecipes.map(recipe => (
                      <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                        pantryItems={pantryItems}
                        onSelect={setSelectedRecipe}
                        onToggleFavorite={handleToggleFavorite}
                        onAddIngredientsToShopping={(e, r) => {
                          e.stopPropagation();
                          handleAddIngredientsToShopping(r.ingredients, r.title);
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>
        )}

        {/* Shopping List Tab */}
        {activeTab === 'shopping' && (
          <ShoppingListView
            items={shoppingItems}
            onAddItem={handleAddSingleShoppingItem}
            onToggleItem={handleToggleShoppingItem}
            onDeleteItem={handleDeleteShoppingItem}
            onClearCompleted={handleClearCompletedShopping}
            onClearAll={handleClearAllShopping}
          />
        )}

        {/* Meal Planner Tab */}
        {activeTab === 'planner' && (
          <MealPlannerView
            mealPlan={mealPlan}
            recipes={recipes}
            onUpdateMealPlan={handleUpdateMealPlan}
            onAddIngredientsToShopping={handleAddIngredientsToShopping}
            onSelectRecipe={setSelectedRecipe}
          />
        )}

        {/* Pantry Tab */}
        {activeTab === 'pantry' && (
          <PantryView
            recipes={recipes}
            pantryItems={pantryItems}
            onUpdatePantry={handleUpdatePantry}
            onSelectRecipe={setSelectedRecipe}
            onOpenAiChef={() => setIsAiChefOpen(true)}
          />
        )}

        {/* Backup & Settings Tab */}
        {activeTab === 'settings' && (
          <SettingsModal
            onDataImported={() => {
              setRecipes(getStoredRecipes());
              setShoppingItems(getStoredShoppingItems());
              setMealPlan(getStoredMealPlan());
            }}
            deferredPrompt={deferredPrompt}
            onInstallPWA={handleInstallPWA}
          />
        )}
      </main>

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        shoppingCount={activeShoppingCount}
      />

      {/* Modals */}
      {selectedRecipe && (
        <RecipeDetailModal
          recipe={selectedRecipe}
          pantryItems={pantryItems}
          onClose={() => setSelectedRecipe(null)}
          onToggleFavorite={(id) => handleToggleFavorite(null, id)}
          onAddIngredientsToShopping={handleAddIngredientsToShopping}
          onStartCookingMode={(recipe, targetServings) => {
            setSelectedRecipe(null);
            setCookingRecipe({ recipe, targetServings });
          }}
          onEditRecipe={(recipe) => {
            setSelectedRecipe(null);
            setEditingRecipe(recipe);
            setIsEditorOpen(true);
          }}
          onDeleteRecipe={handleDeleteRecipe}
        />
      )}

      {isEditorOpen && (
        <RecipeEditorModal
          initialRecipe={editingRecipe}
          onSave={handleSaveRecipe}
          onClose={() => {
            setIsEditorOpen(false);
            setEditingRecipe(null);
          }}
        />
      )}

      {cookingRecipe && (
        <CookingModeModal
          recipe={cookingRecipe.recipe}
          targetServings={cookingRecipe.targetServings}
          onClose={() => setCookingRecipe(null)}
        />
      )}

      <AiRecipeModal
        isOpen={isAiChefOpen}
        onClose={() => setIsAiChefOpen(false)}
        pantryItems={pantryItems}
        onSaveRecipe={(newRecipe) => {
          const updated = [newRecipe, ...recipes];
          setRecipes(updated);
          saveStoredRecipes(updated);
          showToast(`Added "${newRecipe.title}" to your recipes!`);
        }}
        onOpenRecipeDetail={(recipe) => {
          setSelectedRecipe(recipe);
        }}
      />

      {/* Toast Alert Banner */}
      <Toast message={toastMessage} />

    </div>
  );
}
