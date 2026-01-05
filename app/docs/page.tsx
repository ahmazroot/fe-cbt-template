'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckboxCard } from '@/components/ui/checkbox-card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { SwitchCard } from '@/components/ui/switch-card';
import { StatsCard } from '@/components/ui/stats-card';
import { StandardCard } from '@/components/ui/standard-card';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileUpload } from '@/components/ui/file-upload';
import { ExamDataTable, ColumnDef } from '@/components/exam/exam-table';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExamTabs } from '@/components/exam/exam-tabs';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { QuestionNav } from '@/components/exam/question-nav';
import { Timer } from '@/components/exam/timer';
import { MCQOption } from '@/components/exam/mcq-option';
import { ExamPagination } from '@/components/exam/pagination';
import { Label } from '@/components/ui/label';
import { InfoIcon, AlertCircleIcon, CheckCircle2Icon, TimerIcon, PackageIcon } from 'lucide-react';
import { Logo } from '@/components/exam/logo';
import { LogoIcon } from '@/components/exam/logo-icon';
import * as Typography from '@/components/ui/typography';

export default function DocsPage() {
    const [selectedOption, setSelectedOption] = React.useState<string>('B');

    // Exam Tabs State
    const [activeExamTab, setActiveExamTab] = React.useState('account');

    // Dynamic Pagination Logic
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = 10;

    // Account Table Data
    const accountData = [
        { attribute: 'Username', value: 'proexam_user', status: 'Active' },
        { attribute: 'Joined Date', value: 'Jan 1, 2026', status: 'Verified' },
    ];

    const accountColumns: ColumnDef<typeof accountData[0]>[] = [
        { header: 'Attribute', accessorKey: 'attribute', className: 'font-medium' },
        { header: 'Value', accessorKey: 'value' },
        {
            header: 'Status',
            cell: (item) => (
                <Badge variant="outline" className={item.status === 'Active' ? "bg-emerald-50 text-emerald-700 border-emerald-200" : ""}>
                    {item.status}
                </Badge>
            )
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-16">
                {/* Header */}
                <section className="space-y-4">
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Wahcah UI Kit</h1>
                </section>

                {/* Branding Assets */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">Branding Assets</h2>
                    <div className="rounded-xl border border-slate-100 bg-white p-8 flex items-center gap-12">
                        <div className="text-center space-y-3">
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Sidebar Icon</p>
                            <LogoIcon />
                        </div>
                        <div className="border-l border-slate-200 pl-12 space-y-3">
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Full Logo</p>
                            <Logo showText={true} />
                        </div>
                    </div>
                </section>

                {/* Typography */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">2. Typography</h2>
                    <div className="rounded-xl border border-slate-100 bg-white p-8 space-y-6">
                        <div>
                            <Typography.H1>Heading 1 (Page Title)</Typography.H1>
                            <Typography.Mono className="mt-1">text-4xl font-extrabold tracking-tight</Typography.Mono>
                        </div>
                        <div>
                            <Typography.H2>Heading 2 (Section Title)</Typography.H2>
                            <Typography.Mono className="mt-1">text-2xl font-bold tracking-tight</Typography.Mono>
                        </div>
                        <div>
                            <Typography.H3>Heading 3 (Card Title)</Typography.H3>
                            <Typography.Mono className="mt-1">text-lg font-semibold</Typography.Mono>
                        </div>
                        <div>
                            <Typography.P>
                                Body text standard. Digunakan untuk paragraf umum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography.P>
                            <Typography.Mono className="mt-1">text-base text-slate-600 leading-relaxed</Typography.Mono>
                        </div>
                        <div>
                            <Typography.Muted>
                                Small / Muted text. Digunakan untuk caption, hint, atau footer card.
                            </Typography.Muted>
                            <Typography.Mono className="mt-1">text-sm text-slate-500</Typography.Mono>
                        </div>
                    </div>
                </section>

                {/* Buttons */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">Buttons</h2>
                    <div className="flex flex-wrap gap-4 items-center">
                        <Button>Default Button</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link Button</Button>
                    </div>
                </section>

                {/* Form Elements */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">Form Elements</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Inputs & Selection</CardTitle>
                                <CardDescription>Commonly used form controls.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" placeholder="name@example.com" />
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox id="terms" />
                                    <Label htmlFor="terms">Accept terms and conditions</Label>
                                </div>

                                <div className="space-y-3">
                                    <Label>Checkbox Cards</Label>
                                    <CheckboxCard
                                        title="Sertifikat Otomatis"
                                        description="Generate PDF setelah lulus."
                                    />
                                    <CheckboxCard
                                        title="Remidi Aktif"
                                        description="Izinkan ujian ulang."
                                        defaultChecked
                                    />
                                </div>

                                <div className="space-y-3">
                                    <Label>Pick an option</Label>
                                    <RadioGroup defaultValue="option-one">
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="option-one" id="option-one" />
                                            <Label htmlFor="option-one">Option One</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="option-two" id="option-two" />
                                            <Label htmlFor="option-two">Option Two</Label>
                                        </div>
                                    </RadioGroup>
                                </div>

                                <div className="space-y-3">
                                    <Label>Switch Cards</Label>
                                    <SwitchCard
                                        title="Maintenance Mode"
                                        description="Nonaktifkan akses publik sementara."
                                    />
                                    <SwitchCard
                                        title="Mode Gelap"
                                        description="Gunakan tema visual gelap."
                                        defaultChecked
                                    />
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Switch id="airplane-mode" />
                                    <Label htmlFor="airplane-mode">Airplane Mode</Label>
                                </div>
                            </CardContent>
                        </Card>


                        <div className="space-y-6">
                            <div className="space-y-3 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                                <Label>File Upload Component</Label>
                                <FileUpload id="docs-upload-demo" />
                            </div>

                            <h3 className="text-lg font-semibold text-slate-800">Badges</h3>
                            <div className="flex flex-wrap gap-2">
                                <Badge>Default</Badge>
                                <Badge variant="secondary">Secondary</Badge>
                                <Badge variant="outline">Outline</Badge>
                                <Badge variant="success">Success</Badge>
                                <Badge variant="warning">Warning</Badge>
                                <Badge variant="destructive">Destructive</Badge>
                            </div>

                            <h3 className="text-lg font-semibold text-slate-800">Alerts</h3>
                            <div className="space-y-4">
                                <Alert>
                                    <InfoIcon className="h-4 w-4" />
                                    <AlertTitle>Heads up!</AlertTitle>
                                    <AlertDescription>You can add components to your app using the cli.</AlertDescription>
                                </Alert>
                                <Alert variant="success">
                                    <CheckCircle2Icon className="h-4 w-4" />
                                    <AlertTitle>Success</AlertTitle>
                                    <AlertDescription>Your changes have been saved successfully.</AlertDescription>
                                </Alert>
                                <Alert variant="warning">
                                    <AlertCircleIcon className="h-4 w-4" />
                                    <AlertTitle>Warning</AlertTitle>
                                    <AlertDescription>Please check your connection before proceeding.</AlertDescription>
                                </Alert>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Navigation & Layout */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                        Cards & Layout
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <StatsCard
                            title="Total Paket"
                            value="5 Jenis"
                            icon={<PackageIcon className="size-6" />}
                        />
                        <StatsCard
                            title="Siswa Aktif"
                            value="1,240"
                            icon={<InfoIcon className="size-6" />}
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <StandardCard title="Standard Card" description="Digunakan untuk kontainer umum.">
                            <div className="h-24 bg-slate-50 rounded border border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-sm">
                                Content Area
                            </div>
                        </StandardCard>
                        <StandardCard
                            title="Analisis Mingguan"
                            description="Data statistik performa siswa."
                        >
                            <div className="h-24 bg-slate-50 rounded border border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-sm">
                                Content Area
                            </div>
                        </StandardCard>
                    </div>


                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-800">Navigation Tabs (Enhanced Component)</h3>
                        <ExamTabs
                            withContainer
                            value={activeExamTab}
                            onValueChange={setActiveExamTab}
                            tabs={[
                                { id: 'account', label: 'Detail Akun' },
                                { id: 'history', label: 'Riwayat Transaksi' },
                                { id: 'settings', label: 'Pengaturan' },
                            ]}
                        >
                            <div className="p-10 bg-slate-50 mt-4 rounded-xl text-sm text-slate-500 text-center">
                                Tab Content Area (Current Active: {
                                    activeExamTab === 'account' ? 'Detail Akun' :
                                        activeExamTab === 'history' ? 'Riwayat Transaksi' : 'Pengaturan'
                                })
                            </div>
                        </ExamTabs>
                    </div>
                </section >


                <ExamTabs
                    withContainer
                    defaultValue="account"
                    tabs={[
                        { id: 'account', label: 'Account Settings' },
                        { id: 'password', label: 'Security' },
                        { id: 'notifications', label: 'Notifications' },
                    ]}
                >
                    <TabsContent value="account" className="mt-6 space-y-6">
                        <div className="space-y-2">
                            <Typography.H3>Account Details</Typography.H3>
                            <Typography.Muted>Informasi profil dan keanggotaan sistem.</Typography.Muted>
                        </div>

                        <ExamDataTable
                            data={accountData}
                            columns={accountColumns}
                            pagination={{
                                currentPage,
                                totalPages,
                                onPageChange: setCurrentPage
                            }}
                        />
                    </TabsContent>
                </ExamTabs>

                {/* CBT Specialized Elements */}
                <section className="p-8 rounded-3xl bg-slate-900 shadow-2xl space-y-10 border border-slate-800">
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                            <TimerIcon className="size-3" /> CBT Exam Components
                        </div>
                        <h2 className="text-3xl font-bold text-white">Specialized CBT Elements</h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10">
                        {/* Left: Timer & Nav */}
                        <div className="space-y-6">
                            <Timer timeLeft="01:45:22" />
                            <QuestionNav
                                totalQuestions={25}
                                currentQuestion={12}
                                answeredQuestions={[1, 2, 4, 5, 8, 9, 10]}
                                doubtQuestions={[3, 11]}
                            />
                        </div>

                        {/* Right: Question View */}
                        <div className="lg:col-span-2 space-y-6 bg-white p-8 rounded-2xl shadow-xl">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="bg-primary-900 text-white text-sm font-bold h-8 w-8 rounded-lg flex items-center justify-center">12</span>
                                    <h3 className="text-lg font-bold text-slate-900">Apa fungsi utama dari protokol HTTP/2 dibandingkan versi sebelumnya?</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed pl-11">
                                    Pilihlah salah satu jawaban yang paling tepat berdasarkan pengetahuan teknis mengenai optimasi jaringan dan protokol web modern.
                                </p>
                            </div>

                            <div className="space-y-3 pl-11">
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

                            <div className="flex justify-between items-center pt-6 border-t border-slate-100 mt-6 pl-11">
                                <Button variant="outline">Sebelumnya</Button>
                                <div className="flex gap-3">
                                    <Button variant="secondary" className="bg-amber-100 text-amber-700 hover:bg-amber-200 border-none">Ragu-ragu</Button>
                                    <Button>Simpan & Lanjutkan</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dialog Showcase */}
                <section className="text-center py-10">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size="lg" className="h-14 px-10 text-lg rounded-2xl shadow-xl shadow-primary-900/30">
                                Luncurkan Simulasi Ujian
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Konfirmasi Memulai Ujian</DialogTitle>
                                <DialogDescription>
                                    Anda akan memulai sesi ujian Matematika Dasar. Pastikan koneksi internet stabil.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="py-4 space-y-4">
                                <div className="flex justify-between text-sm py-2 border-b border-slate-50">
                                    <span className="text-slate-500">Durasi</span>
                                    <span className="font-bold text-slate-900">120 Menit</span>
                                </div>
                                <div className="flex justify-between text-sm py-2 border-b border-slate-50">
                                    <span className="text-slate-500">Jumlah Soal</span>
                                    <span className="font-bold text-slate-900">50 Butir</span>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button variant="outline">Batal</Button>
                                <Button>Mulai Sekarang</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </section>
            </div >
        </div >
    );
}
