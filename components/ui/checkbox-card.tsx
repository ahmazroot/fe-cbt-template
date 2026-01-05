'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CheckboxCardProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  title: string;
  description?: string;
}

const CheckboxCard = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxCardProps
>(({ className, title, description, id, ...props }, ref) => {
  const generatedId = React.useId();
  const checkboxId = id || generatedId;

  return (
    <label
      htmlFor={checkboxId}
      className={cn(
        'group flex items-center gap-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors has-[[data-state=checked]]:border-primary-600 has-[[data-state=checked]]:bg-primary-50/30',
        className
      )}
    >
      <CheckboxPrimitive.Root
        ref={ref}
        id={checkboxId}
        className={cn(
          'peer border-slate-300 data-[state=checked]:bg-primary-600 data-[state=checked]:text-white data-[state=checked]:border-primary-600 focus-visible:ring-primary-600 focus-visible:ring-offset-2 size-4 shrink-0 rounded border shadow-xs transition-all outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50'
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="grid place-content-center text-current transition-none">
          <CheckIcon className="size-3.5" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <div className="flex flex-col text-sm select-none">
        <p className="font-medium text-slate-900 group-hover:text-primary-700 transition-colors">
          {title}
        </p>
        {description && <p className="text-xs text-slate-500 leading-tight">{description}</p>}
      </div>
    </label>
  );
});

CheckboxCard.displayName = 'CheckboxCard';

export { CheckboxCard };
