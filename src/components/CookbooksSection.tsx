import React, { useState } from 'react';
import { BookOpen, Sparkles, Clock, Users, ArrowRight, ChevronRight, Bookmark, ChefHat, Flame, Compass, MapPin } from 'lucide-react';
import { Cookbook, Recipe } from '../types';
import { SOUTH_AFRICAN_COOKBOOKS } from '../data/southAfricanCookbooks';

interface CookbooksSectionProps {
  allRecipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  onCookRecipe: (recipe: Recipe) => void;
}

export const CookbooksSection: React.FC<CookbooksSectionProps> = ({
  allRecipes,
  onSelectRecipe,
  onCookRecipe,
}) => {
  const [selectedCookbook, setSelectedCookbook] = useState<Cookbook | null>(null);
  const [selectedChapterId, setSelectedChapterId] = useState<string | 'all'>('all');

  // Helper to find full recipe object by ID
  const getRecipeById = (id: string): Recipe | undefined => {
    return allRecipes.find((r) => r.id === id);
  };

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#242220] via-[#35312D] to-[#242220] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-500/20 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <BookOpen className="w-80 h-80 text-amber-200" />
        </div>

        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Old School South African Heritage Collections</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-amber-50 font-medium leading-tight">
            Curated South African Cookbooks
          </h2>

          <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed">
            Step back in time with iconic South African culinary treasures. Explore vintage Cape Dutch family recipes, open-fire braai and potjiekos manuals, Bo-Kaap spice guides, and Durban curry classics.
          </p>
        </div>
      </div>

      {/* Main Cookbook Grid */}
      {!selectedCookbook ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SOUTH_AFRICAN_COOKBOOKS.map((book) => {
            const bookRecipes = book.recipeIds
              .map((id) => getRecipeById(id))
              .filter((r): r is Recipe => r !== undefined);

            return (
              <div
                key={book.id}
                onClick={() => {
                  setSelectedCookbook(book);
                  setSelectedChapterId('all');
                }}
                className="group bg-white rounded-3xl border border-[#E6DFD5] hover:border-[#D97757] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Cover Header Image */}
                  <div className="relative h-56 sm:h-64 w-full bg-[#F3EFEA] overflow-hidden">
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#D97757] text-white shadow-md">
                        {book.category}
                      </span>
                      {book.badge && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-[#242220] shadow-md flex items-center gap-1">
                          <Flame className="w-3 h-3 text-[#242220]" />
                          <span>{book.badge}</span>
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs text-amber-300 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-amber-400" />
                        <span>{book.heritageRegion}</span>
                      </p>
                      <h3 className="font-serif text-2xl font-bold leading-tight group-hover:text-amber-200 transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-xs text-stone-300 italic mt-0.5">
                        By {book.author} • {book.year}
                      </p>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-[#635E59] leading-relaxed">
                      {book.description}
                    </p>

                    {/* Featured Recipes Preview */}
                    <div className="space-y-2 border-t border-[#E6DFD5] pt-4">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#8C867E]">
                        Featured Recipes in this Volume:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {bookRecipes.map((recipe) => (
                          <span
                            key={recipe.id}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#F5F2ED] text-[#242220] border border-[#E6DFD5]"
                          >
                            {recipe.title.split('with')[0]}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 py-4 bg-[#FAF8F5] border-t border-[#E6DFD5] flex items-center justify-between group-hover:bg-[#F3EFEA] transition-colors">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#8C867E]">
                    <BookOpen className="w-4 h-4 text-[#D97757]" />
                    <span>{bookRecipes.length} Heritage Recipes</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-[#D97757] group-hover:translate-x-1 transition-transform">
                    <span>Open Cookbook</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Selected Cookbook Reader View */
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Back Navigation Bar */}
          <button
            onClick={() => setSelectedCookbook(null)}
            className="flex items-center gap-2 text-xs font-bold text-[#635E59] hover:text-[#242220] transition-colors py-1 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            <span>← Back to All Cookbooks</span>
          </button>

          {/* Cookbook Cover Header Card */}
          <div className="bg-white rounded-3xl border border-[#E6DFD5] overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-5 relative h-64 md:h-auto min-h-[260px] bg-[#F3EFEA]">
              <img
                src={selectedCookbook.coverImage}
                alt={selectedCookbook.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent md:hidden" />
              <div className="absolute bottom-4 left-4 right-4 text-white md:hidden">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#D97757]">
                  {selectedCookbook.category}
                </span>
              </div>
            </div>

            <div className="md:col-span-7 p-6 sm:p-8 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F3EFEA] text-[#D97757] border border-[#E6DFD5]">
                    {selectedCookbook.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-[#635E59]">
                    {selectedCookbook.year}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-[#635E59] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#D97757]" />
                    <span>{selectedCookbook.heritageRegion}</span>
                  </span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl text-[#242220] font-bold leading-tight">
                  {selectedCookbook.title}
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-[#8C867E]">
                  Authored by {selectedCookbook.author}
                </p>
                <p className="text-xs sm:text-sm text-[#635E59] leading-relaxed pt-1">
                  {selectedCookbook.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E6DFD5] flex items-center justify-between">
                <div className="text-xs text-[#8C867E]">
                  Tagline: <span className="italic text-[#242220]">"{selectedCookbook.tagline}"</span>
                </div>
                <div className="text-xs font-bold text-[#D97757] bg-[#FAF8F5] px-3 py-1.5 rounded-xl border border-[#E6DFD5]">
                  {selectedCookbook.recipeIds.length} Traditional Recipes
                </div>
              </div>
            </div>
          </div>

          {/* Chapters Filter Tabs */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#8C867E]">
              Book Chapters:
            </h3>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <button
                onClick={() => setSelectedChapterId('all')}
                className={`px-4 py-2 rounded-2xl text-xs font-semibold shrink-0 transition-all cursor-pointer ${
                  selectedChapterId === 'all'
                    ? 'bg-[#242220] text-white shadow-xs'
                    : 'bg-white text-[#635E59] border border-[#E6DFD5] hover:bg-[#FAF8F5]'
                }`}
              >
                All Chapters ({selectedCookbook.recipeIds.length})
              </button>
              {selectedCookbook.chapters.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => setSelectedChapterId(ch.id)}
                  className={`px-4 py-2 rounded-2xl text-xs font-semibold shrink-0 transition-all cursor-pointer ${
                    selectedChapterId === ch.id
                      ? 'bg-[#242220] text-white shadow-xs'
                      : 'bg-white text-[#635E59] border border-[#E6DFD5] hover:bg-[#FAF8F5]'
                  }`}
                >
                  {ch.title} ({ch.recipeIds.length})
                </button>
              ))}
            </div>
          </div>

          {/* Recipes in Selected Chapter / Book */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-[#242220] font-bold">
              {selectedChapterId === 'all'
                ? 'All Cookbook Recipes'
                : selectedCookbook.chapters.find((c) => c.id === selectedChapterId)?.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedCookbook.recipeIds
                .map((id) => getRecipeById(id))
                .filter((r): r is Recipe => {
                  if (!r) return false;
                  if (selectedChapterId === 'all') return true;
                  const ch = selectedCookbook.chapters.find((c) => c.id === selectedChapterId);
                  return ch ? ch.recipeIds.includes(r.id) : true;
                })
                .map((recipe) => (
                  <div
                    key={recipe.id}
                    className="bg-white rounded-2xl border border-[#E6DFD5] p-4 flex gap-4 hover:border-[#D97757]/60 transition-all shadow-2xs group"
                  >
                    <img
                      src={
                        recipe.imageUrl ||
                        'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop'
                      }
                      alt={recipe.title}
                      className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl object-cover shrink-0 group-hover:scale-102 transition-transform"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop';
                      }}
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-[#D97757] uppercase tracking-wider">
                            {recipe.chapterName || selectedCookbook.category}
                          </span>
                          <span className="text-[11px] text-[#8C867E] flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {recipe.prepTime + recipe.cookTime} mins
                          </span>
                        </div>

                        <h4
                          onClick={() => onSelectRecipe(recipe)}
                          className="font-serif text-base sm:text-lg font-bold text-[#242220] group-hover:text-[#D97757] transition-colors cursor-pointer line-clamp-1"
                        >
                          {recipe.title}
                        </h4>

                        <p className="text-xs text-[#635E59] line-clamp-2">
                          {recipe.description}
                        </p>
                      </div>

                      <div className="pt-2 flex items-center justify-between gap-2 border-t border-[#F3EFEA] mt-2">
                        <button
                          onClick={() => onSelectRecipe(recipe)}
                          className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#FAF8F5] text-[#242220] border border-[#E6DFD5] hover:bg-[#F3EFEA] transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-[#D97757]" />
                          <span>View Recipe</span>
                        </button>

                        <button
                          onClick={() => onCookRecipe(recipe)}
                          className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#242220] hover:bg-black text-white transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <ChefHat className="w-3.5 h-3.5 text-amber-400" />
                          <span>Start Cooking</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
