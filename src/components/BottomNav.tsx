import React from 'react';
import { BookOpen, ShoppingBag, Calendar, Sparkles, Settings } from 'lucide-react';
import { ActiveTab } from '../types';

interface BottomNavProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  shoppingCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  setActiveTab,
  shoppingCount,
}) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#E6DFD5] pb-safe px-2 py-1 shadow-lg no-print">
      <div className="flex items-center justify-around max-w-md mx-auto">
        <button
          onClick={() => setActiveTab('recipes')}
          className={`flex flex-col items-center justify-center w-16 py-1 rounded-xl text-xs font-medium transition-all ${
            activeTab === 'recipes'
              ? 'text-[#D97757]'
              : 'text-[#8C867E] hover:text-[#242220]'
          }`}
        >
          <BookOpen className={`w-5 h-5 mb-0.5 ${activeTab === 'recipes' ? 'stroke-[2.5px]' : 'stroke-[1.8px]'}`} />
          <span>Recipes</span>
        </button>

        <button
          onClick={() => setActiveTab('shopping')}
          className={`relative flex flex-col items-center justify-center w-16 py-1 rounded-xl text-xs font-medium transition-all ${
            activeTab === 'shopping'
              ? 'text-[#D97757]'
              : 'text-[#8C867E] hover:text-[#242220]'
          }`}
        >
          <div className="relative">
            <ShoppingBag className={`w-5 h-5 mb-0.5 ${activeTab === 'shopping' ? 'stroke-[2.5px]' : 'stroke-[1.8px]'}`} />
            {shoppingCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-[#D97757] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {shoppingCount > 99 ? '99+' : shoppingCount}
              </span>
            )}
          </div>
          <span>Shopping</span>
        </button>

        <button
          onClick={() => setActiveTab('planner')}
          className={`flex flex-col items-center justify-center w-16 py-1 rounded-xl text-xs font-medium transition-all ${
            activeTab === 'planner'
              ? 'text-[#D97757]'
              : 'text-[#8C867E] hover:text-[#242220]'
          }`}
        >
          <Calendar className={`w-5 h-5 mb-0.5 ${activeTab === 'planner' ? 'stroke-[2.5px]' : 'stroke-[1.8px]'}`} />
          <span>Planner</span>
        </button>

        <button
          onClick={() => setActiveTab('pantry')}
          className={`flex flex-col items-center justify-center w-16 py-1 rounded-xl text-xs font-medium transition-all ${
            activeTab === 'pantry'
              ? 'text-[#D97757]'
              : 'text-[#8C867E] hover:text-[#242220]'
          }`}
        >
          <Sparkles className={`w-5 h-5 mb-0.5 ${activeTab === 'pantry' ? 'stroke-[2.5px]' : 'stroke-[1.8px]'}`} />
          <span>Pantry</span>
        </button>

        <button
          onClick={() => setActiveTab('settings')}
          className={`flex flex-col items-center justify-center w-16 py-1 rounded-xl text-xs font-medium transition-all ${
            activeTab === 'settings'
              ? 'text-[#D97757]'
              : 'text-[#8C867E] hover:text-[#242220]'
          }`}
        >
          <Settings className={`w-5 h-5 mb-0.5 ${activeTab === 'settings' ? 'stroke-[2.5px]' : 'stroke-[1.8px]'}`} />
          <span>Settings</span>
        </button>
      </div>
    </nav>
  );
};
