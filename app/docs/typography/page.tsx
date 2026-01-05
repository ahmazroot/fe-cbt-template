'use client';

import * as React from 'react';
import * as Typography from '@/components/ui/typography';

export default function TypographySection() {
    return (
        <section className="min-h-[80vh] flex flex-col items-center justify-center space-y-12 py-20">
            <div className="text-center space-y-2">
                <Typography.H2>Typography System</Typography.H2>
                <Typography.Muted>Standard text styles and hierarchies for the ProExam interface.</Typography.Muted>
            </div>

            <div className="w-full max-w-4xl rounded-3xl border border-slate-100 bg-white p-12 md:p-16 shadow-xl shadow-slate-200/50 space-y-12">
                {/* H1 Showcase */}
                <div className="group space-y-2">
                    <Typography.H1>Heading 1 (Page Title)</Typography.H1>
                    <div className="flex items-center gap-2">
                        <Typography.Mono>Typography.H1</Typography.Mono>
                        <Typography.Muted className="text-xs italic">text-4xl font-extrabold tracking-tight</Typography.Muted>
                    </div>
                </div>

                {/* H2 Showcase */}
                <div className="group space-y-2">
                    <Typography.H2>Heading 2 (Section Title)</Typography.H2>
                    <div className="flex items-center gap-2">
                        <Typography.Mono>Typography.H2</Typography.Mono>
                        <Typography.Muted className="text-xs italic">text-2xl font-bold tracking-tight</Typography.Muted>
                    </div>
                </div>

                {/* H3 Showcase */}
                <div className="group space-y-2">
                    <Typography.H3>Heading 3 (Card Title)</Typography.H3>
                    <div className="flex items-center gap-2">
                        <Typography.Mono>Typography.H3</Typography.Mono>
                        <Typography.Muted className="text-xs italic">text-lg font-semibold</Typography.Muted>
                    </div>
                </div>

                {/* Body Showcase */}
                <div className="group space-y-2">
                    <Typography.P>
                        Body text standard. Digunakan untuk paragraf umum. Memberikan kenyamanan baca yang optimal dengan line-height yang cukup.
                    </Typography.P>
                    <div className="flex items-center gap-2">
                        <Typography.Mono>Typography.P</Typography.Mono>
                        <Typography.Muted className="text-xs italic">text-base text-slate-600 leading-relaxed</Typography.Muted>
                    </div>
                </div>

                {/* Muted Showcase */}
                <div className="group space-y-2">
                    <Typography.Muted>
                        Small / Muted text. Digunakan untuk caption, hint, atau footer card yang memberikan informasi tambahan tanpa mendominasi visual.
                    </Typography.Muted>
                    <div className="flex items-center gap-2">
                        <Typography.Mono>Typography.Muted</Typography.Mono>
                        <Typography.Muted className="text-xs italic">text-sm text-slate-500</Typography.Muted>
                    </div>
                </div>
            </div>
        </section>
    );
}
