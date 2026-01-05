'use client';

import * as React from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import * as Typography from '@/components/ui/typography';
import { AlertTriangleIcon, UserPlusIcon, Settings2Icon, CheckCircle2Icon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function ModalsSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center space-y-12 py-20 px-4 bg-slate-50">
      <div className="text-center space-y-2">
        <Typography.H2>Modals & Overlays</Typography.H2>
        <Typography.Muted>
          Contextual windows for focused interactions and critical confirmations.
        </Typography.Muted>
      </div>

      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8">
        {/* Pattern 1: Simple Confirmation */}
        <div className="p-8 rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50 space-y-6 flex flex-col items-center text-center">
          <div className="size-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
            <CheckCircle2Icon className="size-8" />
          </div>
          <div className="space-y-2">
            <Typography.H3>Confirmation Pattern</Typography.H3>
            <p className="text-sm text-slate-500">
              Standard pattern for verifying user intent before proceeding.
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">
                Open Confirmation
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm Action</DialogTitle>
                <DialogDescription>
                  Are you sure you want to publish this exam? This action will make it visible to
                  all students.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button>Yes, Publish Now</Button>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Pattern 2: Form Input */}
        <div className="p-8 rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50 space-y-6 flex flex-col items-center text-center">
          <div className="size-16 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
            <UserPlusIcon className="size-8" />
          </div>
          <div className="space-y-2">
            <Typography.H3>Form Input Pattern</Typography.H3>
            <p className="text-sm text-slate-500">
              Used for adding or editing data without leaving the current page.
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">
                Add New Member
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-106.25">
              <DialogHeader>
                <DialogTitle>Invite Member</DialogTitle>
                <DialogDescription>
                  Enter the details of the person you want to invite to your organization.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="tes" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="tes@example.com" />
                </div>
                <div className="space-y-2 text-left">
                  <Label>Role</Label>
                  <div className="flex gap-2">
                    <Badge>Admin</Badge>
                    <Badge variant="secondary">Editor</Badge>
                    <Badge variant="outline">Viewer</Badge>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Send Invitation</Button>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Pattern 3: Warning / Destructive */}
        <div className="p-8 rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50 space-y-6 flex flex-col items-center text-center">
          <div className="size-16 rounded-full bg-red-50 flex items-center justify-center text-red-600">
            <AlertTriangleIcon className="size-8" />
          </div>
          <div className="space-y-2">
            <Typography.H3>Destructive Pattern</Typography.H3>
            <p className="text-sm text-slate-500">
              High-contrast warning for irreversible actions like deletion.
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive" className="w-full">
                Delete Resource
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-120">
              <DialogHeader>
                <DialogTitle>Konfirmasi Aksi</DialogTitle>
              </DialogHeader>
              <div className="flex items-start gap-4 py-6">
                <div className="size-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                  <AlertTriangleIcon className="size-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-lg">Hapus Paket Voucher?</h4>
                  <p className="leading-relaxed">
                    Apakah Anda yakin ingin menghapus data paket ini? Tindakan ini tidak dapat
                    dibatalkan.
                  </p>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" variant="destructive">
                  Hapus
                </Button>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Pattern 4: Technical / Detailed */}
        <div className="p-8 rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50 space-y-6 flex flex-col items-center text-center">
          <div className="size-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
            <Settings2Icon className="size-8" />
          </div>
          <div className="space-y-2">
            <Typography.H3>Detailed Configuration</Typography.H3>
            <p className="text-sm text-slate-500">
              Deep-dive settings or information display using scrollable content.
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">
                View Settings
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl h-[80vh] flex flex-col">
              <DialogHeader>
                <DialogTitle>Advanced System Settings</DialogTitle>
                <DialogDescription>
                  Configure global parameters for the exam engine.
                </DialogDescription>
              </DialogHeader>
              <div className="flex-1 overflow-y-auto py-6 space-y-8 pr-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="space-y-3 p-4 rounded-xl border border-slate-100 bg-slate-50/30"
                  >
                    <Typography.H3>Module {i} Configuration</Typography.H3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      This section contains technical parameters for specific assessment modules.
                      Adjusting these values may affect performance.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="Key Value" />
                      <Input placeholder="Priority" />
                    </div>
                  </div>
                ))}
              </div>
              <DialogFooter>
                <Button>Save Changes</Button>
                <Button variant="outline">Reset Defaults</Button>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
