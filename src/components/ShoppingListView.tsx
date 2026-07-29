import React, { useState } from 'react';
import {
  Plus,
  Trash2,
  CheckCircle2,
  Circle,
  Copy,
  Share2,
  ShoppingBag,
  Sparkles,
  ChevronDown,
  ChevronRight,
  RotateCcw,
  Store,
  List
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ShoppingItem, ShoppingCategory } from '../types';
import { detectCategory, formatAmount } from '../utils/unitConverter';

interface ShoppingListViewProps {
  items: ShoppingItem[];
  onAddItem: (item: ShoppingItem) => void;
  onToggleItem: (id: string) => void;
  onDeleteItem: (id: string) => void;
  onClearCompleted: () => void;
  onClearAll: () => void;
}

const CATEGORY_ORDER: ShoppingCategory[] = [
  'Produce',
  'Dairy & Eggs',
  'Pantry & Grains',
  'Meat & Seafood',
  'Spices & Seasoning',
  'Bakery',
  'Frozen',
  'Beverages',
  'Other'
];

export const ShoppingListView: React.FC<ShoppingListViewProps> = ({
  items,
  onAddItem,
  onToggleItem,
  onDeleteItem,
  onClearCompleted,
  onClearAll,
}) => {
  const [inputText, setInputText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ShoppingCategory | 'Auto'>('Auto');
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});
  const [viewMode, setViewMode] = useState<'aisle' | 'flat'>('aisle');
  const [copied, setCopied] = useState(false);

  // Quick add item handler
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const cat = selectedCategory === 'Auto' ? detectCategory(inputText) : selectedCategory;

    const newItem: ShoppingItem = {
      id: `shop-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      name: inputText.trim(),
      category: cat,
      isChecked: false,
      addedAt: Date.now()
    };

    onAddItem(newItem);
    setInputText('');
  };

  // Group items by category
  const groupedItems = CATEGORY_ORDER.reduce((acc, cat) => {
    const catItems = items.filter(i => i.category === cat);
    if (catItems.length > 0) {
      acc[cat] = catItems;
    }
    return acc;
  }, {} as Record<ShoppingCategory, ShoppingItem[]>);

  const totalCount = items.length;
  const completedCount = items.filter(i => i.isChecked).length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // Toggle category collapse
  const toggleCollapse = (cat: string) => {
    setCollapsedCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  // Check item with celebratory confetti if last item
  const handleToggle = (id: string, currentlyChecked: boolean) => {
    onToggleItem(id);
    if (!currentlyChecked && completedCount + 1 === totalCount && totalCount > 0) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
    }
  };

  // Copy shopping list formatted
  const handleCopyList = async () => {
    let text = `🛒 Savor Shopping List (${items.length} items)\n\n`;
    
    CATEGORY_ORDER.forEach(cat => {
      const catItems = items.filter(i => i.category === cat);
      if (catItems.length > 0) {
        text += `• ${cat.toUpperCase()}:\n`;
        catItems.forEach(item => {
          const check = item.isChecked ? ' [x] ' : ' [ ] ';
          const amt = item.amount ? `${formatAmount(item.amount)} ${item.unit || ''} ` : '';
          text += `  ${check}${amt}${item.name}\n`;
        });
        text += `\n`;
      }
    });

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      alert('Failed to copy to clipboard');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E6DFD5]">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#242220] font-medium leading-tight">
            Shopping List
          </h1>
          <p className="text-xs sm:text-sm text-[#635E59] mt-0.5">
            {viewMode === 'aisle'
              ? 'Organized automatically by store aisles for seamless market runs'
              : 'Flat quick checklist sorted for speed'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Aisle vs Flat Mode Toggle */}
          <div className="flex items-center p-1 bg-white border border-[#E6DFD5] rounded-xl shadow-2xs">
            <button
              onClick={() => setViewMode('aisle')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'aisle'
                  ? 'bg-[#D97757] text-white shadow-2xs'
                  : 'text-[#635E59] hover:text-[#242220]'
              }`}
            >
              <Store className="w-3.5 h-3.5" />
              <span>Aisle View</span>
            </button>
            <button
              onClick={() => setViewMode('flat')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'flat'
                  ? 'bg-[#D97757] text-white shadow-2xs'
                  : 'text-[#635E59] hover:text-[#242220]'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>Flat View</span>
            </button>
          </div>

          {items.length > 0 && (
            <>
              <button
                onClick={handleCopyList}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E6DFD5] text-xs font-medium text-[#242220] hover:bg-[#F3EFEA] transition-all shadow-2xs"
                title="Copy formatted list"
              >
                <Copy className="w-3.5 h-3.5 text-[#D97757]" />
                <span>{copied ? 'Copied!' : 'Copy List'}</span>
              </button>

              {completedCount > 0 && (
                <button
                  onClick={onClearCompleted}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E6DFD5] text-xs font-medium text-red-600 hover:bg-red-50 transition-all shadow-2xs"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear Done ({completedCount})</span>
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {/* Quick Add Bar */}
      <form onSubmit={handleAdd} className="p-3 bg-white rounded-2xl border border-[#E6DFD5] shadow-xs space-y-2 sm:space-y-0 sm:flex sm:items-center sm:gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            placeholder="Add item (e.g. 2 ripe lemons, 1 loaf sourdough, almond milk)..."
            className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] text-[#242220] placeholder-[#8C867E] text-sm focus:outline-none focus:ring-2 focus:ring-[#D97757]/30 border border-[#E6DFD5]"
          />
        </div>

        <div className="flex items-center gap-2">
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value as any)}
            className="px-3 py-2.5 rounded-xl bg-[#FAF8F5] text-[#242220] text-xs font-medium border border-[#E6DFD5] focus:outline-none"
          >
            <option value="Auto">✨ Auto Category</option>
            {CATEGORY_ORDER.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-[#D97757] text-white text-xs font-semibold hover:bg-[#C66545] transition-all shadow-xs flex items-center gap-1 shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </form>

      {/* Progress Bar */}
      {totalCount > 0 && (
        <div className="p-4 bg-white rounded-2xl border border-[#E6DFD5] space-y-2">
          <div className="flex items-center justify-between text-xs font-medium">
            <span className="text-[#635E59]">
              {completedCount} of {totalCount} items checked ({progressPercent}%)
            </span>
            <span className="text-[#D97757] font-semibold">
              {completedCount === totalCount ? '🎉 All done!' : `${totalCount - completedCount} remaining`}
            </span>
          </div>

          <div className="w-full h-2.5 bg-[#F3EFEA] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#D97757] transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* Empty State */}
      {totalCount === 0 && (
        <div className="py-16 text-center space-y-3 bg-white rounded-3xl border border-[#E6DFD5] p-8">
          <div className="w-16 h-16 rounded-full bg-[#FBF1ED] text-[#D97757] flex items-center justify-center mx-auto">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl text-[#242220] font-medium">Your shopping list is empty</h3>
          <p className="text-xs sm:text-sm text-[#635E59] max-w-sm mx-auto leading-relaxed">
            Type items above, or tap "Add to Shopping List" on any recipe card to automatically populate ingredients!
          </p>
        </div>
      )}

      {/* Items View (Aisle vs Flat Mode) */}
      {viewMode === 'flat' && totalCount > 0 ? (
        <div className="bg-white rounded-2xl border border-[#E6DFD5] overflow-hidden shadow-2xs divide-y divide-[#F3EFEA]">
          {/* Flat sorted list: Unchecked first, then checked */}
          {[...items]
            .sort((a, b) => (a.isChecked === b.isChecked ? 0 : a.isChecked ? 1 : -1))
            .map(item => (
              <div
                key={item.id}
                className={`px-5 py-3.5 flex items-center justify-between gap-3 transition-all hover:bg-[#FAF8F5] ${
                  item.isChecked ? 'bg-[#F3EFEA]/40' : ''
                }`}
              >
                <div
                  onClick={() => handleToggle(item.id, item.isChecked)}
                  className="flex items-center gap-3 flex-1 cursor-pointer select-none"
                >
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                    item.isChecked ? 'bg-[#D97757] border-[#D97757] text-white' : 'border-[#C8BFB0] bg-white hover:border-[#D97757]'
                  }`}>
                    {item.isChecked && <CheckCircle2 className="w-4 h-4 fill-[#D97757] text-white" />}
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium transition-all ${
                        item.isChecked ? 'line-through text-[#8C867E]' : 'text-[#242220]'
                      }`}>
                        {item.amount && item.amount > 0 && (
                          <strong className="text-[#D97757] mr-1">
                            {formatAmount(item.amount)} {item.unit || ''}
                          </strong>
                        )}
                        {item.name}
                      </span>
                      <span className="text-[10px] text-[#8C867E] bg-[#F3EFEA] px-2 py-0.5 rounded-full border border-[#E0D8CB]">
                        {item.category}
                      </span>
                    </div>

                    {item.recipeTitle && (
                      <span className="text-[10px] text-[#8C867E]">
                        From: {item.recipeTitle}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => onDeleteItem(item.id)}
                  className="p-1.5 text-[#8C867E] hover:text-red-600 hover:bg-red-50 rounded-lg transition-all opacity-70 hover:opacity-100"
                  title="Delete item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
        </div>
      ) : (
        /* Grouped Categorized Aisle View */
        <div className="space-y-4">
          {Object.entries(groupedItems).map(([category, catItems]) => {
            const isCollapsed = collapsedCategories[category];
            const catDone = catItems.filter(i => i.isChecked).length;

            return (
              <div key={category} className="bg-white rounded-2xl border border-[#E6DFD5] overflow-hidden shadow-2xs">
                
                {/* Category Header */}
                <button
                  onClick={() => toggleCollapse(category)}
                  className="w-full px-5 py-3.5 bg-[#F3EFEA]/60 hover:bg-[#F3EFEA] border-b border-[#E6DFD5] flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-2">
                    {isCollapsed ? <ChevronRight className="w-4 h-4 text-[#8C867E]" /> : <ChevronDown className="w-4 h-4 text-[#8C867E]" />}
                    <h3 className="font-serif text-lg text-[#242220] font-medium">
                      {category}
                    </h3>
                    <span className="text-xs text-[#8C867E] bg-white px-2 py-0.5 rounded-full border border-[#E0D8CB]">
                      {catDone}/{catItems.length}
                    </span>
                  </div>

                  {catDone === catItems.length && (
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      Complete
                    </span>
                  )}
                </button>

                {/* Items List */}
                {!isCollapsed && (
                  <div className="divide-y divide-[#F3EFEA]">
                    {catItems.map(item => (
                      <div
                        key={item.id}
                        className={`px-5 py-3 flex items-center justify-between gap-3 transition-all hover:bg-[#FAF8F5] ${
                          item.isChecked ? 'bg-[#F3EFEA]/40' : ''
                        }`}
                      >
                        <div
                          onClick={() => handleToggle(item.id, item.isChecked)}
                          className="flex items-center gap-3 flex-1 cursor-pointer select-none"
                        >
                          <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                            item.isChecked ? 'bg-[#D97757] border-[#D97757] text-white' : 'border-[#C8BFB0] bg-white hover:border-[#D97757]'
                          }`}>
                            {item.isChecked && <CheckCircle2 className="w-4 h-4 fill-[#D97757] text-white" />}
                          </div>

                          <div className="flex flex-col">
                            <span className={`text-sm font-medium transition-all ${
                              item.isChecked ? 'line-through text-[#8C867E]' : 'text-[#242220]'
                            }`}>
                              {item.amount && item.amount > 0 && (
                                <strong className="text-[#D97757] mr-1">
                                  {formatAmount(item.amount)} {item.unit || ''}
                                </strong>
                              )}
                              {item.name}
                            </span>

                            {item.recipeTitle && (
                              <span className="text-[10px] text-[#8C867E]">
                                From: {item.recipeTitle}
                              </span>
                            )}
                          </div>
                        </div>

                        <button
                          onClick={() => onDeleteItem(item.id)}
                          className="p-1.5 text-[#8C867E] hover:text-red-600 hover:bg-red-50 rounded-lg transition-all opacity-70 hover:opacity-100"
                          title="Delete item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
