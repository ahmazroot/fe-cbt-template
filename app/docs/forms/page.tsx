'use client';

import * as React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { FileUpload } from '@/components/ui/file-upload';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import * as Typography from '@/components/ui/typography';
import { CheckCircle2, Loader2, ExternalLink, AlertCircle } from 'lucide-react';
import { CheckboxCard } from '@/components/ui/checkbox-card';
import { SwitchCard } from '@/components/ui/switch-card';
import useFileUpload from '@/hooks/use-file-upload';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function FormsSection() {
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>(
    'idle'
  );
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  const {
    file,
    previewUrl,
    fileName,
    handleFileChange,
    handleRemove,
    fileInputRef,
    handleThumbnailClick,
  } = useFileUpload({
    onUpload: async (file) => {
      if (!file) {
        setUploadStatus('idle');
        setUploadedUrl(null);
        return;
      }

      setUploadStatus('uploading');
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/files/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) throw new Error('Upload gagal');

        const data = await response.json();
        setUploadedUrl(data.location);
        setUploadStatus('success');
      } catch (error) {
        console.error(error);
        setUploadStatus('error');
      }
    },
  });

  const onClear = () => {
    handleRemove();
    setUploadStatus('idle');
    setUploadedUrl(null);
  };

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center space-y-12 py-20">
      <div className="text-center space-y-2">
        <Typography.H2>Form System</Typography.H2>
        <Typography.Muted>
          Input controls and data entry patterns for the ProExam interface.
        </Typography.Muted>
      </div>

      <div className="w-full max-w-4xl rounded-3xl border border-slate-100 bg-white p-12 md:p-16 shadow-xl shadow-slate-200/50 space-y-16">
        {/* Inputs ... (rest of the sections omitted for brevity in this tool call, but I will keep them) */}
        <div className="space-y-8">
          <Typography.H3>Text Inputs</Typography.H3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label htmlFor="base-input">Standard Input</Label>
              <Input id="base-input" placeholder="Placeholder text..." />
              <Typography.Muted className="text-xs italic">Default state</Typography.Muted>
            </div>
            <div className="space-y-2">
              <Label htmlFor="disabled-input">Disabled Input</Label>
              <Input id="disabled-input" disabled placeholder="Can't type here" />
              <Typography.Muted className="text-xs italic">Disabled state</Typography.Muted>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-slate-50" />

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <Typography.H3>Checkboxes & Switches</Typography.H3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 rounded-xl border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-colors">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="cursor-pointer">
                  Accept terms and conditions
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-xl border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-colors">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode" className="cursor-pointer">
                  Airplane Mode
                </Label>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-50">
              <Typography.Muted className="text-xs font-bold uppercase tracking-wider">
                Specialized Cards
              </Typography.Muted>
              <div className="grid gap-3">
                <CheckboxCard
                  title="Sertifikat Otomatis"
                  description="Generate PDF setelah lulus."
                />
                <SwitchCard
                  title="Maintenance Mode"
                  description="Nonaktifkan akses publik sementara."
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Typography.H3>Radio Group</Typography.H3>
            <RadioGroup defaultValue="comfortable" className="space-y-3">
              <div className="flex items-center space-x-3 p-3 rounded-xl border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-colors">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1" className="cursor-pointer">
                  Default Option
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-xl border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-colors">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2" className="cursor-pointer">
                  Comfortable Padding
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="h-px w-full bg-slate-50" />

        {/* File Upload Demo */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Typography.H3>Dynamic File Upload</Typography.H3>
            {uploadStatus === 'uploading' && (
              <div className="flex items-center gap-2 text-primary animate-pulse">
                <Loader2 className="size-4 animate-spin" />
                <span className="text-xs font-medium">Mengunggah...</span>
              </div>
            )}
          </div>

          <div className=" mx-auto space-y-4">
            <div className="space-y-2">
              <Label>File Upload</Label>
              <FileUpload
                file={file}
                previewUrl={previewUrl}
                fileName={fileName}
                onChange={handleFileChange}
                onRemove={onClear}
                // accept="image/*"
                fileInputRef={fileInputRef}
                handleThumbnailClick={handleThumbnailClick}
                isLoading={uploadStatus === 'uploading'}
                className="w-full"
              />
            </div>

            {uploadStatus === 'success' && uploadedUrl && (
              <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-700 animate-in fade-in slide-in-from-bottom-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4" />
                  <span className="text-xs font-medium">Berhasil diunggah ke Dummy API!</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="h-7 text-emerald-700 hover:text-emerald-800 hover:bg-emerald-100"
                >
                  <a
                    href={uploadedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    Lihat File <ExternalLink className="size-3" />
                  </a>
                </Button>
              </div>
            )}

            {uploadStatus === 'error' && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-100 text-red-700 text-xs font-medium">
                <AlertCircle className="size-4" />
                <span>Gagal mengunggah file. Pastikan file valid atau coba lagi nanti.</span>
              </div>
            )}

            <Typography.Muted className="text-center mt-4">
              Demonstrasi integrasi `useFileUpload` hook dengan Platzi Fake Store API.
            </Typography.Muted>
          </div>
        </div>
      </div>
    </section>
  );
}
