'use client';

import * as React from 'react';
import { Timer } from '@/components/exam/timer';
import { QuestionNav } from '@/components/exam/question-nav';
import { MCQOption } from '@/components/exam/mcq-option';
import { Button } from '@/components/ui/button';
import * as Typography from '@/components/ui/typography';
import { TimerIcon, Layout, CheckCircle2, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function CBTSection() {
    const [selectedOption, setSelectedOption] = React.useState<string>('B');

    return (
        <section className="min-h-screen flex flex-col items-center justify-center space-y-12 py-20 px-4 bg-slate-50">
            <div className="text-center space-y-2">
                <Typography.H2>CBT specialized system</Typography.H2>
                <Typography.Muted>Specialized components for Computer Based Test interfaces.</Typography.Muted>
            </div>

            <div className="w-full max-w-6xl space-y-12">

                {/* Visual Section Header */}
                <div className="p-8 rounded-3xl bg-slate-900 shadow-2xl space-y-10 border border-slate-800 overflow-hidden relative">
                    {/* Decorative Background Element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full -mr-32 -mt-32" />

                    <div className="relative space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                            <TimerIcon className="size-3" /> Exam Interface
                        </div>
                        <h2 className="text-3xl font-bold text-white tracking-tight">CBT Component Showcase</h2>
                        <p className="text-slate-400 max-w-2xl">
                            High-fidelity components designed for focus, clarity, and reliability during digital assessments.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10 relative">
                        {/* Sidebar: Stats & Navigation */}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-1">Time Remaining</p>
                                <Timer timeLeft="01:45:22" />
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between items-end px-1">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Question Navigator</p>
                                    <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.2em]">12 / 25</p>
                                </div>
                                <QuestionNav
                                    totalQuestions={25}
                                    currentQuestion={12}
                                    answeredQuestions={[1, 2, 4, 5, 8, 9, 10]}
                                    doubtQuestions={[3, 11]}
                                />
                                <div className="grid grid-cols-2 gap-2 pt-2">
                                    <div className="flex items-center gap-2 text-[10px] text-slate-400">
                                        <div className="size-2 rounded-full bg-primary-600" /> Answered
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] text-slate-400">
                                        <div className="size-2 rounded-full bg-amber-500" /> Doubt
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main: Question View Content */}
                        <div className="lg:col-span-2 space-y-8 bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-slate-100">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <span className="bg-primary-900 text-white text-sm font-bold h-10 w-10 shrink-0 rounded-xl flex items-center justify-center shadow-lg shadow-primary-900/20">12</span>
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold text-slate-900 leading-tight">
                                            Apa fungsi utama dari protokol HTTP/2 dibandingkan versi sebelumnya?
                                        </h3>
                                        <p className="text-slate-500 leading-relaxed">
                                            Pilihlah salah satu jawaban yang paling tepat berdasarkan pengetahuan teknis mengenai optimasi jaringan dan protokol web modern.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <MCQOption
                                    label="A"
                                    content="Mengurangi enkripsi data untuk mempercepat transmisi"
                                    isSelected={selectedOption === 'A'}
                                    onClick={() => setSelectedOption('A')}
                                />
                                <MCQOption
                                    label="B"
                                    content="Memperkenalkan multiplexing untuk satu koneksi secara simultan"
                                    isSelected={selectedOption === 'B'}
                                    onClick={() => setSelectedOption('B')}
                                />
                                <MCQOption
                                    label="C"
                                    content="Menghapus penggunaan cookie dalam header permintaan"
                                    isSelected={selectedOption === 'C'}
                                    onClick={() => setSelectedOption('C')}
                                />
                                <MCQOption
                                    label="D"
                                    content="Hanya mendukung transmisi data dalam format XML"
                                    isSelected={selectedOption === 'D'}
                                    onClick={() => setSelectedOption('D')}
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-100 mt-8">
                                <Button variant="outline" className="w-full sm:w-auto px-8">Sebelumnya</Button>
                                <div className="flex gap-3 w-full sm:w-auto">
                                    <Button variant="secondary" className="flex-1 sm:flex-none bg-amber-50 text-amber-700 hover:bg-amber-100 border-amber-200">
                                        Ragu-ragu
                                    </Button>
                                    <Button className="flex-1 sm:flex-none px-8">
                                        Simpan & Lanjutkan
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Individual Component Details */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm space-y-4 text-center">
                        <div className="bg-slate-50 p-4 rounded-xl inline-block mb-2">
                            <Timer timeLeft="00:05:00" />
                        </div>
                        <Typography.H3>Critical Timer</Typography.H3>
                        <p className="text-sm text-slate-500">Auto-formatting timer with color shifts when time is running low.</p>
                    </div>

                    <div className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm space-y-4 text-center">
                        <div className="flex gap-2 justify-center mb-2">
                            <Badge variant="outline" className="bg-primary-50 text-primary-600 border-primary-100">Correct</Badge>
                            <Badge variant="outline" className="bg-red-50 text-red-600 border-red-100">Incorrect</Badge>
                        </div>
                        <Typography.H3>MCQ Validation</Typography.H3>
                        <p className="text-sm text-slate-500">Reusable options with various states (Selected, Hover, Correct/Incorrect).</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
