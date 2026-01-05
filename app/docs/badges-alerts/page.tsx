'use client';

import * as React from 'react';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import * as Typography from '@/components/ui/typography';
import { Info, AlertCircle, CheckCircle2, AlertTriangle, Bell, ShieldCheck } from 'lucide-react';

export default function BadgesAlertsSection() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center space-y-12 py-20 px-4">
      <div className="text-center space-y-2">
        <Typography.H2>Status & Feedback</Typography.H2>
        <Typography.Muted>
          Visual indicators for status, priority, and system feedback.
        </Typography.Muted>
      </div>

      <div className="w-full max-w-4xl rounded-3xl border border-slate-100 bg-white p-12 md:p-16 shadow-xl shadow-slate-200/50 space-y-16">
        {/* Badges Section */}
        <div className="space-y-8">
          <div className="text-center space-y-1">
            <Typography.H3>Badges</Typography.H3>
            <Typography.Muted className="text-xs italic">
              Compact status indicators
            </Typography.Muted>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <div className="flex flex-col items-center gap-2">
              <Badge>Default</Badge>
              <Typography.Mono className="text-[10px]">
                variant=&quot;default&rdquo;
              </Typography.Mono>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge variant="secondary">Secondary</Badge>
              <Typography.Mono className="text-[10px]">
                variant=&quot;secondary&quot;
              </Typography.Mono>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge variant="outline">Outline</Badge>
              <Typography.Mono className="text-[10px]">variant=&quot;outline&quot;</Typography.Mono>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge variant="success">Success</Badge>
              <Typography.Mono className="text-[10px]">variant=&quot;success&quot;</Typography.Mono>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge variant="warning">Warning</Badge>
              <Typography.Mono className="text-[10px]">
                variant=&quot;warning/pending&quot;
              </Typography.Mono>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge variant="destructive">Destructive</Badge>
              <Typography.Mono className="text-[10px]">
                variant=&quot;destructive&quot;
              </Typography.Mono>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center pt-4 border-t border-slate-50">
            <div className="flex flex-col items-center gap-2">
              <Badge className="gap-1.5">
                <Bell /> Active
              </Badge>
              <Typography.Mono className="text-[10px]">with Icon</Typography.Mono>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge variant="success" className="gap-1.5">
                <ShieldCheck /> Verified
              </Badge>
              <Typography.Mono className="text-[10px]">Success + Icon</Typography.Mono>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-slate-50" />

        {/* Alerts Section */}
        <div className="space-y-8">
          <div className="text-center space-y-1">
            <Typography.H3>Alerts</Typography.H3>
            <Typography.Muted className="text-xs italic">
              Call-to-action feedback messages
            </Typography.Muted>
          </div>

          <div className="grid gap-6">
            {/* Default Alert */}
            <div className="space-y-2">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>
                  A new system update is available. Please review the changelog for details.
                </AlertDescription>
              </Alert>
              <Typography.Mono className="text-center text-[10px]">
                variant=&quot;default&quot;
              </Typography.Mono>
            </div>

            {/* Success Alert */}
            <div className="space-y-2">
              <Alert variant="success">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                  Your profile has been successfully updated. All changes are saved.
                </AlertDescription>
              </Alert>
              <Typography.Mono className="text-center text-[10px]">
                variant=&quot;success&ldquo;
              </Typography.Mono>
            </div>

            {/* Warning Alert */}
            <div className="space-y-2">
              <Alert variant="warning">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Soft Warning</AlertTitle>
                <AlertDescription>
                  Your storage is almost full. Please consider upgrading your plan.
                </AlertDescription>
              </Alert>
              <Typography.Mono className="text-center text-[10px]">
                variant=&#34;warning&rdquo;
              </Typography.Mono>
            </div>

            {/* Destructive Alert */}
            <div className="space-y-2">
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error Occurred</AlertTitle>
                <AlertDescription>
                  Failed to connect to the server. Please check your internet connection.
                </AlertDescription>
              </Alert>
              <Typography.Mono className="text-center text-[10px]">
                variant=&ldquo;destructive&quot;
              </Typography.Mono>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
