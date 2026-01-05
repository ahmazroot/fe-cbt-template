'use client';

import * as React from 'react';
import { Logo } from '@/components/exam/logo';
import { LogoIcon } from '@/components/exam/logo-icon';

export default function BrandingSection() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-slate-900">Branding Assets</h2>
        <p className="text-slate-500">
          Visual identity and logo variants for the ProExam ecosystem.
        </p>
      </div>

      <div className="w-full max-w-4xl rounded-3xl border border-slate-100 bg-white p-12 md:p-20 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">
        <div className="flex flex-col items-center text-center space-y-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
            Sidebar Icon
          </p>
          <div className="p-4 bg-slate-50 rounded-2xl ring-1 ring-slate-100">
            <LogoIcon className="h-12 w-12" />
          </div>
        </div>

        <div className="h-px w-24 bg-slate-100 md:h-32 md:w-px" />

        <div className="flex flex-col items-center text-center space-y-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Full Logo</p>
          <div className="p-4 bg-slate-50 rounded-2xl ring-1 ring-slate-100">
            <Logo showText={true} className="text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
