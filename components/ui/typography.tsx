import * as React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function H1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn('text-4xl font-extrabold text-slate-900 tracking-tight', className)}>
      {children}
    </h1>
  );
}

export function H2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn('text-2xl font-bold text-slate-900 tracking-tight', className)}>
      {children}
    </h2>
  );
}

export function H3({ children, className }: TypographyProps) {
  return <h3 className={cn('text-lg font-semibold text-slate-900', className)}>{children}</h3>;
}

export function P({ children, className }: TypographyProps) {
  return <p className={cn('text-base text-slate-600 leading-relaxed', className)}>{children}</p>;
}

export function Muted({ children, className }: TypographyProps) {
  return <p className={cn('text-sm text-slate-500', className)}>{children}</p>;
}

export function Mono({ children, className }: TypographyProps) {
  return (
    <code
      className={cn(
        'relative rounded bg-slate-100 px-[0.3rem] py-[0.2rem] font-mono text-xs font-semibold text-slate-400',
        className
      )}
    >
      {children}
    </code>
  );
}
