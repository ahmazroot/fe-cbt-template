import * as React from 'react';
import { cn } from '@/lib/utils';

interface MCQOptionProps extends React.ComponentProps<'button'> {
  label: string; // e.g., "A", "B"
  content: string;
  isSelected?: boolean;
}

export function MCQOption({ label, content, isSelected, className, ...props }: MCQOptionProps) {
  return (
    <button
      className={cn(
        'flex w-full items-center gap-3 p-3 border rounded-lg transition-all text-left group',
        isSelected
          ? 'border-primary-600 bg-primary-50 ring-1 ring-primary-600'
          : 'border-slate-200 bg-white hover:bg-slate-50 hover:border-primary-200'
      )}
      {...props}
    >
      <div
        className={cn(
          'h-6 w-6 rounded-full border flex items-center justify-center text-xs font-bold transition-colors',
          isSelected
            ? 'bg-primary-600 border-primary-600 text-white'
            : 'border-slate-300 text-slate-500 group-hover:border-primary-600 group-hover:text-primary-600'
        )}
      >
        {label}
      </div>
      <span
        className={cn(
          'text-sm transition-colors',
          isSelected ? 'text-primary-900 font-medium' : 'text-slate-700'
        )}
      >
        {content}
      </span>
    </button>
  );
}
