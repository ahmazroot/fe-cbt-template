import * as React from 'react';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimerProps extends React.ComponentProps<'div'> {
  timeLeft: string; // Format: "HH:MM:SS"
}

export function Timer({ timeLeft, className, ...props }: TimerProps) {
  return (
    <div
      className={cn(
        'rounded-lg bg-slate-900 text-white p-3 flex items-center justify-between shadow-md border border-slate-800',
        className
      )}
      {...props}
    >
      <span className="text-xs font-medium text-slate-400 uppercase tracking-tight">
        Sisa Waktu
      </span>
      <div className="flex items-center gap-2 font-mono text-lg font-bold text-emerald-400">
        <Clock className="size-4" />
        {timeLeft}
      </div>
    </div>
  );
}
