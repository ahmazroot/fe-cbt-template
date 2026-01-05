import * as React from 'react';
import { cn } from '@/lib/utils';

interface StatsCardProps extends React.ComponentProps<'div'> {
    title: string;
    value: string | number;
    description?: string;
    icon?: React.ReactNode;
}

export function StatsCard({ title, value, description, icon, className, ...props }: StatsCardProps) {
    return (
        <div
            className={cn(
                'rounded-xl border border-slate-100 bg-white text-slate-950 shadow-sm shadow-slate-200/50 p-6 flex items-center gap-4 border-l-4 border-l-primary-600',
                className
            )}
            {...props}
        >
            {icon && (
                <div className="h-12 w-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                    {icon}
                </div>
            )}
            <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{title}</p>
                <p className="text-2xl font-bold text-slate-900 leading-tight">{value}</p>
                {description && (
                    <p className="text-[10px] text-emerald-600 font-medium mt-1">{description}</p>
                )}
            </div>
        </div>
    );
}
