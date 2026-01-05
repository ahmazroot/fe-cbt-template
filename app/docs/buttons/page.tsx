'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle, Filter, Trash2 } from 'lucide-react';
import * as Typography from '@/components/ui/typography';

export default function ButtonsSection() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center space-y-12 py-20">
      <div className="text-center space-y-2">
        <Typography.H2>Button System</Typography.H2>
        <Typography.Muted>
          Action triggers and visual hierarchy for the ProExam interface.
        </Typography.Muted>
      </div>

      <div className="w-full max-w-4xl rounded-3xl border border-slate-100 bg-white p-12 md:p-16 shadow-xl shadow-slate-200/50 space-y-12">
        <div className="space-y-6">
          <Typography.H3>Variations</Typography.H3>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            {/* Primary */}
            <div className="flex flex-col items-center gap-2">
              <Button>Simpan Data</Button>
              <Typography.Mono>variant=&quot;default&ldquo;</Typography.Mono>
            </div>

            {/* Primary with Icon */}
            <div className="flex flex-col items-center gap-2">
              <Button className="gap-2">
                <PlusCircle className="size-4" />
                Buat Paket
              </Button>
              <Typography.Mono>with Icon</Typography.Mono>
            </div>

            {/* Secondary */}
            <div className="flex flex-col items-center gap-2">
              <Button variant="secondary">Secondary</Button>
              <Typography.Mono>variant=&quot;secondary&quot;</Typography.Mono>
            </div>

            {/* Outline */}
            <div className="flex flex-col items-center gap-2">
              <Button variant="outline">
                <Filter className="mr-2 size-4" /> Filter
              </Button>
              <Typography.Mono>variant=&quot;outline&quot;</Typography.Mono>
            </div>

            {/* Ghost */}
            <div className="flex flex-col items-center gap-2">
              <Button variant="ghost">Cancel</Button>
              <Typography.Mono>variant=&quot;ghost&quot;</Typography.Mono>
            </div>

            {/* Destructive */}
            <div className="flex flex-col items-center gap-2">
              <Button variant="destructive">
                <Trash2 className="mr-2 size-4" /> Delete
              </Button>
              <Typography.Mono>variant=&rdquo;destructive&#34;</Typography.Mono>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-slate-50" />

        <div className="space-y-6">
          <Typography.H3>Sizes</Typography.H3>
          <div className="flex flex-wrap gap-8 items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <Button size="sm">Small Button</Button>
              <Typography.Mono>size=&quot;sm&quot;</Typography.Mono>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button size="default">Default Button</Button>
              <Typography.Mono>size=&#34;default&quot;</Typography.Mono>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button size="lg">Large Button</Button>
              <Typography.Mono>size=&quot;lg&quot;</Typography.Mono>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
