import React, { useRef, useState } from 'react';
import {
  Download,
  Upload,
  RotateCcw,
  Wifi,
  Smartphone,
  CheckCircle,
  FileJson,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { exportAppDataJSON, importAppDataJSON, resetToDefaultData } from '../utils/localStorage';

interface SettingsModalProps {
  onDataImported: () => void;
  deferredPrompt: any;
  onInstallPWA: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  onDataImported,
  deferredPrompt,
  onInstallPWA,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importStatus, setImportStatus] = useState<string | null>(null);

  // Export JSON file download
  const handleExport = () => {
    const jsonStr = exportAppDataJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `savor-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Import JSON file
  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const success = importAppDataJSON(content);
        if (success) {
          setImportStatus('Data successfully imported!');
          onDataImported();
          setTimeout(() => setImportStatus(null), 3000);
        } else {
          alert('Failed to parse JSON file. Please verify format.');
        }
      }
    };
    reader.readAsText(file);
  };

  // Reset Data
  const handleReset = () => {
    if (confirm('Are you sure you want to reset all data to default starter recipes? Custom items will be lost.')) {
      resetToDefaultData();
      onDataImported();
      alert('Data reset to default!');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      
      {/* Header */}
      <div className="pb-4 border-b border-[#E6DFD5]">
        <h1 className="font-serif text-3xl sm:text-4xl text-[#242220] font-medium leading-tight">
          Backup & Settings
        </h1>
        <p className="text-xs sm:text-sm text-[#635E59] mt-0.5">
          100% Client-Side Local Storage & PWA Management
        </p>
      </div>

      {/* PWA App Installation Card */}
      <div className="p-6 bg-white rounded-3xl border border-[#E6DFD5] shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-[#D97757]">
          <Smartphone className="w-6 h-6" />
          <h2 className="font-serif text-xl font-medium text-[#242220]">
            PWA Mobile & Desktop App
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-[#635E59] leading-relaxed">
          Savor works completely offline without requiring any backend server. You can install it straight from GitHub Pages or web hosting onto your home screen for instant access like a native app.
        </p>

        {deferredPrompt ? (
          <button
            onClick={onInstallPWA}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D97757] text-white text-xs font-semibold hover:bg-[#C66545] transition-all shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>Install Savor to Home Screen</span>
          </button>
        ) : (
          <div className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 p-3 rounded-2xl border border-emerald-200">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>App is installed or ready for offline use in your browser!</span>
          </div>
        )}
      </div>

      {/* Backup & Data Sync */}
      <div className="p-6 bg-white rounded-3xl border border-[#E6DFD5] shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-[#D97757]">
          <FileJson className="w-6 h-6" />
          <h2 className="font-serif text-xl font-medium text-[#242220]">
            Data Export & Import (JSON)
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-[#635E59] leading-relaxed">
          Export your entire collection of recipes, shopping lists, and meal plans into a single JSON file to backup your data or transfer between devices.
        </p>

        {importStatus && (
          <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 p-3 rounded-xl border border-emerald-200">
            {importStatus}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F3EFEA] hover:bg-[#E0D8CB] text-[#242220] text-xs font-semibold border border-[#E0D8CB] transition-all"
          >
            <Download className="w-4 h-4 text-[#D97757]" />
            <span>Export Backup (JSON)</span>
          </button>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F3EFEA] hover:bg-[#E0D8CB] text-[#242220] text-xs font-semibold border border-[#E0D8CB] transition-all"
          >
            <Upload className="w-4 h-4 text-[#D97757]" />
            <span>Import Backup (JSON)</span>
          </button>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImportFile}
            accept=".json"
            className="hidden"
          />
        </div>
      </div>

      {/* Reset Data */}
      <div className="p-6 bg-white rounded-3xl border border-[#E6DFD5] shadow-xs space-y-3">
        <h2 className="font-serif text-xl font-medium text-[#242220]">
          Reset Dataset
        </h2>
        <p className="text-xs text-[#635E59]">
          Revert all recipes and shopping lists back to the starter sample dataset.
        </p>
        <button
          onClick={handleReset}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 text-xs font-semibold transition-all"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset to Starter Data</span>
        </button>
      </div>

      {/* Anthropic Aesthetic Badge */}
      <div className="p-6 bg-[#F3EFEA] rounded-3xl border border-[#E0D8CB] text-center space-y-2">
        <p className="text-xs text-[#635E59] font-medium">
          Crafted with Claude Anthropic Terracotta Palette & System Aesthetics
        </p>
        <p className="text-[11px] text-[#8C867E]">
          Savor v1.0.0 • Client-side local persistence • PWA Offline Ready
        </p>
      </div>

    </div>
  );
};
