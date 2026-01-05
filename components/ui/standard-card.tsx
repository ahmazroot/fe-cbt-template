import * as React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface StandardCardProps extends React.ComponentProps<'div'> {
    title: string;
    description?: string;
    action?: React.ReactNode;
}

export function StandardCard({
    title,
    description,
    action,
    children,
    className,
    ...props
}: StandardCardProps) {
    return (
        <div
            className={cn(
                'rounded-xl border border-slate-100 bg-white text-slate-950 shadow-sm shadow-slate-200/50 p-6',
                className
            )}
            {...props}
        >
            <div className="flex justify-between items-start mb-4 gap-4">
                <div>
                    <h3 className="font-bold text-lg text-slate-900 leading-none mb-1.5">{title}</h3>
                    {description && <p className="text-slate-500 text-sm leading-tight">{description}</p>}
                </div>
                {action === undefined ? (
                    <Button variant="ghost" size="icon-sm" className="text-slate-400 hover:text-primary-600 -mt-1 -mr-2">
                        <MoreHorizontal />
                    </Button>
                ) : (
                    action
                )}
            </div>
            <div>{children}</div>
        </div>
    );
}
