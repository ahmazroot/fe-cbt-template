'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ExamTabItem {
    id: string;
    label: string;
}

import { TabsContent } from '@/components/ui/tabs';
export { TabsContent };


interface ExamTabsProps {
    tabs?: ExamTabItem[];
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    className?: string;
    children?: React.ReactNode;
    /**
     * If true, adds a nice container background and padding
     */
    withContainer?: boolean;
}

/**
 * Enhanced Tabs component for the ProExam ecosystem.
 * Combines the flexibility of standard Tabs with a high-fidelity design.
 */
export function ExamTabs({
    tabs,
    defaultValue,
    value,
    onValueChange,
    className,
    children,
    withContainer = false
}: ExamTabsProps) {

    const tabsList = (
        <TabsList>
            {tabs ? tabs.map((tab) => (
                <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="px-6"
                >
                    {tab.label}
                </TabsTrigger>
            )) : null}
        </TabsList>
    );

    return (
        <div className={cn(
            withContainer && "rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/50",
            className
        )}>
            <Tabs
                defaultValue={defaultValue || (tabs && tabs[0]?.id)}
                value={value}
                onValueChange={onValueChange}
                className="w-full"
            >
                {tabs && tabsList}
                {children}
            </Tabs>
        </div>
    );
}
