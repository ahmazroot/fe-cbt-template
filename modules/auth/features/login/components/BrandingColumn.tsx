'use client';

import { BadgeCheck, Quote } from 'lucide-react';
import { Logo } from '@/components/exam/logo';

export function BrandingColumn() {
    return (
        <div className="relative hidden h-full flex-col bg-slate-900 p-10 text-white lg:flex">
            <div className="absolute inset-0 bg-wahcah-gradient opacity-90"></div>
            <Logo className="relative z-20 text-white" />

            <div className="relative z-20 flex flex-1 items-center justify-center">
                <div className="absolute h-[300px] w-[300px] rounded-full bg-rose-600/30 blur-[100px]"></div>

                {/* Main Floating Card */}
                <div className="relative w-full max-w-[340px] animate-float rounded-2xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
                    {/* Card Header */}
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/30">
                                <BadgeCheck className="size-6" />
                            </div>
                            <div>
                                <p className="text-xs font-medium text-slate-300 uppercase tracking-wider">Status Ujian</p>
                                <h3 className="text-lg font-bold text-white">Lulus Kompetensi</h3>
                            </div>
                        </div>
                        <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold text-white shadow-sm ring-1 ring-white/20">
                            VOUCHER A
                        </span>
                    </div>

                    {/* Score Display */}
                    <div className="mt-6">
                        <div className="flex items-end gap-2">
                            <span className="text-6xl font-bold tracking-tighter text-white">94</span>
                            <span className="mb-2 text-xl font-medium text-slate-300">/ 100</span>
                        </div>
                        <p className="mt-1 text-xs text-slate-300">Hasil tervalidasi otomatis oleh sistem.</p>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-6 space-y-2">
                        <div className="flex justify-between text-xs font-medium text-slate-200">
                            <span>Akurasi Jawaban</span>
                            <span>Sangat Baik</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-900/50">
                            <div
                                className="h-full w-[94%] rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 shadow-[0_0_10px_rgba(52,211,153,0.5)] transition-all duration-1000"
                                style={{ width: '94%' }}
                            ></div>
                        </div>
                    </div>

                    {/* Footer Dummy Action */}
                    <div className="mt-6 flex gap-3 opacity-60">
                        <div className="h-2 w-1/3 rounded-full bg-white/30"></div>
                        <div className="h-2 w-1/4 rounded-full bg-white/30"></div>
                    </div>
                </div>

                {/* Floating Badge Element (Behind/Side) */}
                <div className="absolute -right-6 top-1/4 animate-float-delayed rounded-xl border border-white/10 bg-slate-900/60 p-4 shadow-xl backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <div className="relative flex h-3 w-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75"></span>
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-rose-500"></span>
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-400">Peserta Aktif</p>
                            <p className="font-bold text-white">1,240 User</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Quote */}
            <div className="relative z-20 mt-auto">
                <blockquote className="space-y-4">
                    <Quote className="size-12 text-white/20 mb-2 rotate-180" />

                    <p className="text-lg font-medium leading-relaxed text-slate-50 italic">
                        "Platform manajemen ujian voucher ini benar-benar mengubah cara kami menangani ribuan peserta remidi. Efisien, otomatis, dan transparan."
                    </p>
                    <footer className="text-sm font-medium text-primary-100 non-italic">
                        Sofia Andini &mdash; Ketua Akademik, Universitas Brawijaya
                    </footer>
                </blockquote>
            </div>
        </div>
    );
}
