'use client';

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';

interface SwitchCardProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
    title: string;
    description?: string;
}

const SwitchCard = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitive.Root>,
    SwitchCardProps
>(({ className, title, description, id, ...props }, ref) => {
    const generatedId = React.useId();
    const switchId = id || generatedId;

    return (
        <div
            className={cn(
                'group flex items-center justify-between p-3 border border-slate-200 rounded-lg bg-white transition-colors has-[[data-state=checked]]:border-primary-600 has-[[data-state=checked]]:bg-primary-50/10',
                className
            )}
        >
            <div className="flex flex-col text-sm select-none pr-4">
                <Label
                    htmlFor={switchId}
                    className="font-medium text-slate-900 cursor-pointer group-hover:text-primary-700 transition-colors"
                >
                    {title}
                </Label>
                {description && <p className="text-xs text-slate-500 leading-tight">{description}</p>}
            </div>
            <SwitchPrimitive.Root
                ref={ref}
                id={switchId}
                className={cn(
                    'peer data-[state=checked]:bg-primary-600 data-[state=unchecked]:bg-slate-200 focus-visible:ring-primary-600 focus-visible:ring-offset-2 inline-flex h-6 w-11 shrink-0 items-center rounded-full border-2 border-transparent shadow-xs transition-all outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50'
                )}
                {...props}
            >
                <SwitchPrimitive.Thumb
                    className={cn(
                        'bg-white pointer-events-none block size-5 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
                    )}
                />
            </SwitchPrimitive.Root>
        </div>
    );
});

SwitchCard.displayName = 'SwitchCard';

export { SwitchCard };
