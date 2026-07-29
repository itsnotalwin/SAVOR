import React from 'react';
import { Utensils, Download, WifiOff, Plus, Sparkles, SlidersHorizontal } from 'lucide-react';
import { ActiveTab } from '../types';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenCreateRecipe: () => void;
  pantryCount: number;
  deferredPrompt: any;
  onInstallPWA: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenCreateRecipe,
  deferredPrompt,
  onInstallPWA,
}) => {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-[#E6DFD5] backdrop-blur-sand transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#D97757] text-white flex items-center justify-center shadow-xs">
            <Utensils className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-serif text-[#242220] tracking-tight font-medium leading-none">
                Savor
              </h1>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#F3EFEA] text-[#8C867E] border border-[#E0D8CB]">
                <WifiOff className="w-3 h-3 text-[#D97757]" />
                Offline PWA
              </span>
            </div>
            <p className="text-xs text-[#635E59] hidden sm:block font-sans mt-0.5">
              Artisanal Recipe & Shopping Companion
            </p>
          </div>
        </div>

        {/* Navigation Desktop Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-[#F2EFEA] p-1 rounded-xl border border-[#E6DFD5]">
          <button
            onClick={() => setActiveTab('recipes')}
            className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'recipes'
                ? 'bg-white text-[#242220] shadow-xs'
                : 'text-[#635E59] hover:text-[#242220]'
            }`}
          >
            Recipes
          </button>
          <button
            onClick={() => setActiveTab('shopping')}
            className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'shopping'
                ? 'bg-white text-[#242220] shadow-xs'
                : 'text-[#635E59] hover:text-[#242220]'
            }`}
          >
            Shopping List
          </button>
          <button
            onClick={() => setActiveTab('planner')}
            className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'planner'
                ? 'bg-white text-[#242220] shadow-xs'
                : 'text-[#635E59] hover:text-[#242220]'
            }`}
          >
            Meal Plan
          </button>
          <button
            onClick={() => setActiveTab('pantry')}
            className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'pantry'
                ? 'bg-white text-[#242220] shadow-xs'
                : 'text-[#635E59] hover:text-[#242220]'
            }`}
          >
            Pantry Match
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'settings'
                ? 'bg-white text-[#242220] shadow-xs'
                : 'text-[#635E59] hover:text-[#242220]'
            }`}
          >
            Backup & Settings
          </button>
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2">
          {deferredPrompt && (
            <button
              onClick={onInstallPWA}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FBF1ED] text-[#D97757] hover:bg-[#F6E3DB] border border-[#F0D5CB] text-xs font-semibold transition-all active:scale-95"
              title="Install Savor as a Native App on your device"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Install App</span>
            </button>
          )}

          <button
            onClick={onOpenCreateRecipe}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#D97757] text-white hover:bg-[#C66545] font-medium text-xs sm:text-sm shadow-xs transition-all active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>New Recipe</span>
          </button>
        </div>
      </div>
    </header>
  );
};
