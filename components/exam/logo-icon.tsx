'use client';

import * as React from 'react';
import { GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoIconProps {
    className?: string;
}

export function LogoIcon({ className }: LogoIconProps) {
    return (
        <div
            className={cn(
                "flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-rose-600 text-white shadow-md shadow-indigo-500/20",
                className
            )}
        >
            <GraduationCap className="size-5" />
        </div>
    );
}
