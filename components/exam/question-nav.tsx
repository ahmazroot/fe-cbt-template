import * as React from 'react';
import { cn } from '@/lib/utils';

interface QuestionNavProps extends React.ComponentProps<'div'> {
  totalQuestions: number;
  currentQuestion: number;
  answeredQuestions: number[];
  doubtQuestions: number[];
  onQuestionClick?: (questionNumber: number) => void;
}

export function QuestionNav({
  totalQuestions,
  currentQuestion,
  answeredQuestions,
  doubtQuestions,
  onQuestionClick,
  className,
  ...props
}: QuestionNavProps) {
  return (
    <div className={cn('rounded-xl border border-slate-100 bg-white p-6', className)} {...props}>
      <h3 className="font-bold text-sm text-slate-900 mb-4 uppercase tracking-wider">
        Navigasi Soal
      </h3>
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: totalQuestions }, (_, i) => {
          const num = i + 1;
          const isActive = currentQuestion === num;
          const isAnswered = answeredQuestions.includes(num);
          const isDoubt = doubtQuestions.includes(num);

          return (
            <button
              key={num}
              onClick={() => onQuestionClick?.(num)}
              className={cn(
                'h-8 w-8 rounded text-xs font-bold flex items-center justify-center transition-all',
                isActive
                  ? 'bg-primary-900 text-white shadow-md shadow-primary-900/20'
                  : isAnswered
                    ? 'bg-emerald-500 text-white'
                    : isDoubt
                      ? 'bg-amber-400 text-white'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              )}
            >
              {num}
            </button>
          );
        })}
      </div>
      <div className="mt-6 flex flex-wrap gap-4 text-[10px] text-slate-500 border-t border-slate-50 pt-4">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-primary-900"></span> Aktif
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500"></span> Dijawab
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-amber-400"></span> Ragu
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-slate-200 border border-slate-300"></span> Belum
        </div>
      </div>
    </div>
  );
}
