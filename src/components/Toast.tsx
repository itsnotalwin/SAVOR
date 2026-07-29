import React from 'react';
import { CheckCircle2, ShoppingBag, Info } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#242220] text-white px-5 py-3 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
      <div className="w-6 h-6 rounded-full bg-[#D97757] text-white flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-4 h-4" />
      </div>
      <span className="text-xs sm:text-sm font-medium pr-1">{message}</span>
    </div>
  );
};
