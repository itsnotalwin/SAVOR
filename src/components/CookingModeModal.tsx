import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Timer, CheckCircle, Sparkles, Play, Pause, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Recipe } from '../types';
import { formatAmount, scaleAmount } from '../utils/unitConverter';

interface CookingModeModalProps {
  recipe: Recipe;
  targetServings: number;
  onClose: () => void;
}

export const CookingModeModal: React.FC<CookingModeModalProps> = ({
  recipe,
  targetServings,
  onClose,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  const [timerSeconds, setTimerSeconds] = useState<number | null>(null);
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [timerTotal, setTimerTotal] = useState<number>(0);

  const currentStep = recipe.instructions[currentStepIndex];
  const isLastStep = currentStepIndex === recipe.instructions.length - 1;

  // Initialize timer for current step if available
  useEffect(() => {
    if (currentStep?.timerMinutes && currentStep.timerMinutes > 0) {
      const sec = currentStep.timerMinutes * 60;
      setTimerSeconds(sec);
      setTimerTotal(sec);
      setTimerIsRunning(false);
    } else {
      setTimerSeconds(null);
      setTimerIsRunning(false);
    }
  }, [currentStepIndex, currentStep]);

  // Timer Countdown Effect
  useEffect(() => {
    let interval: any = null;
    if (timerIsRunning && timerSeconds !== null && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => {
          if (prev === null) return null;
          if (prev <= 1) {
            clearInterval(interval);
            setTimerIsRunning(false);
            // Play simple audio chime or trigger visual feedback
            try {
              const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
              const osc = audioCtx.createOscillator();
              osc.type = 'sine';
              osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
              osc.connect(audioCtx.destination);
              osc.start();
              osc.stop(audioCtx.currentTime + 0.4);
            } catch (e) {}
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerIsRunning, timerSeconds]);

  // Toggle step complete
  const handleNextStep = () => {
    setCompletedSteps(prev => ({ ...prev, [currentStepIndex]: true }));

    if (isLastStep) {
      // Confetti celebration!
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } else {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const formatTimer = (totalSec: number) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1C1B1A] text-white flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200 overflow-hidden">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10 max-w-4xl mx-auto w-full">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#D97757] font-bold">
            Cooking Mode • {targetServings} Servings
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-medium text-white truncate max-w-md">
            {recipe.title}
          </h2>
        </div>

        <button
          onClick={onClose}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Step Content */}
      <div className="max-w-3xl mx-auto w-full my-auto py-8 text-center space-y-8">
        
        {/* Step Counter Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D97757]/20 border border-[#D97757]/40 text-[#D97757] text-sm font-semibold">
          <span>Step {currentStepIndex + 1} of {recipe.instructions.length}</span>
        </div>

        {/* Step Text with huge display typography */}
        <p className="font-serif text-2xl sm:text-4xl leading-relaxed text-stone-100 font-normal px-2">
          {currentStep?.text}
        </p>

        {/* Step Tip */}
        {currentStep?.tip && (
          <div className="max-w-lg mx-auto p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-sm">
            💡 <strong>Chef's Tip:</strong> {currentStep.tip}
          </div>
        )}

        {/* Step Timer widget */}
        {timerSeconds !== null && (
          <div className="max-w-xs mx-auto p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-3xl font-bold">
              <Timer className="w-7 h-7" />
              <span>{formatTimer(timerSeconds)}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setTimerIsRunning(!timerIsRunning)}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                  timerIsRunning ? 'bg-amber-500 text-black' : 'bg-[#D97757] text-white hover:bg-[#C66545]'
                }`}
              >
                {timerIsRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{timerIsRunning ? 'Pause' : 'Start Timer'}</span>
              </button>

              <button
                onClick={() => {
                  setTimerIsRunning(false);
                  setTimerSeconds(timerTotal);
                }}
                className="p-2 rounded-xl bg-white/10 text-stone-300 hover:bg-white/20"
                title="Reset timer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Bottom Navigation */}
      <div className="max-w-3xl mx-auto w-full pt-4 border-t border-white/10 flex items-center justify-between gap-4">
        <button
          onClick={handlePrevStep}
          disabled={currentStepIndex === 0}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/10 text-white disabled:opacity-30 disabled:pointer-events-none hover:bg-white/20 transition-all font-medium text-sm"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Previous Step</span>
        </button>

        <div className="flex items-center gap-1">
          {recipe.instructions.map((_, idx) => (
            <div
              key={idx}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === currentStepIndex
                  ? 'bg-[#D97757] w-6'
                  : completedSteps[idx]
                  ? 'bg-emerald-500'
                  : 'bg-white/20'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNextStep}
          className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#D97757] text-white font-semibold hover:bg-[#C66545] transition-all text-sm shadow-lg active:scale-95"
        >
          <span>{isLastStep ? 'Finish Recipe 🎉' : 'Next Step'}</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
};
