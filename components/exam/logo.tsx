'use client';

import * as React from 'react';
import { LogoIcon } from './logo-icon';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 font-bold text-lg tracking-tight text-slate-900',
        className
      )}
    >
      <LogoIcon />
      {showText && <span>ProExam</span>}
    </div>
  );
}
