'use client';

import * as React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExamTabs } from '@/components/exam/exam-tabs';
import * as Typography from '@/components/ui/typography';
import { Layout, User, Settings, History, Shield, Bell } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function TabsSection() {
  const [activeTab, setActiveTab] = React.useState('account');

  return (
    <section className="min-h-screen flex flex-col items-center justify-center space-y-12 py-20 px-4 bg-slate-50">
      <div className="text-center space-y-2">
        <Typography.H2>Tabbed Navigation</Typography.H2>
        <Typography.Muted>
          Flexible navigation patterns for switching between related views.
        </Typography.Muted>
      </div>

      <div className="w-full max-w-4xl space-y-16">
        {/* Standard UI Tabs */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <Typography.H3>Standard Tabs</Typography.H3>
            <Typography.Muted className="text-xs italic">
              Lightweight, inline navigation
            </Typography.Muted>
          </div>

          <div className="flex justify-center">
            <Tabs defaultValue="overview" className="w-[400px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4">
                <Card className="border-slate-100 shadow-sm">
                  <CardContent className="pt-6 text-sm text-slate-500 text-center">
                    Overview Dashboard Content
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="analytics" className="mt-4">
                <Card className="border-slate-100 shadow-sm">
                  <CardContent className="pt-6 text-sm text-slate-500 text-center">
                    Real-time Analytics Data
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="h-px w-full bg-slate-100" />

        {/* ExamTabs Showcase (High Fidelity) */}
        <div className="space-y-8">
          <div className="text-center space-y-1">
            <Typography.H3>ExamTabs (Enhanced)</Typography.H3>
            <Typography.Muted className="text-xs italic">
              High-fidelity container for major navigation modules
            </Typography.Muted>
          </div>

          <ExamTabs
            withContainer
            value={activeTab}
            onValueChange={setActiveTab}
            tabs={[
              { id: 'account', label: 'User Profile' },
              { id: 'security', label: 'Security' },
              { id: 'notifications', label: 'Notifications' },
            ]}
          >
            <div className="mt-6 p-12 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-center space-y-4 transition-all">
              {activeTab === 'account' && (
                <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <User className="size-8 mx-auto text-primary-600" />
                  <Typography.H3>General Account</Typography.H3>
                  <Typography.Muted>
                    Update your personal information and profile settings.
                  </Typography.Muted>
                </div>
              )}
              {activeTab === 'security' && (
                <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <Shield className="size-8 mx-auto text-emerald-600" />
                  <Typography.H3>Security Settings</Typography.H3>
                  <Typography.Muted>
                    Manage passwords and two-factor authentication.
                  </Typography.Muted>
                </div>
              )}
              {activeTab === 'notifications' && (
                <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <Bell className="size-8 mx-auto text-amber-500" />
                  <Typography.H3>Notification Center</Typography.H3>
                  <Typography.Muted>
                    Configure how you want to be notified about updates.
                  </Typography.Muted>
                </div>
              )}
            </div>
          </ExamTabs>
          <Typography.Mono className="block text-center text-[10px] text-slate-400">
            ExamTabs with withContainer prop and custom content
          </Typography.Mono>
        </div>

        {/* Vertical / Icon Concept */}
        <div className="space-y-6">
          <Typography.H3 className="text-center">Sidebar Nav Concept</Typography.H3>
          <div className="flex gap-8 items-start max-w-2xl mx-auto">
            <div className="flex flex-col gap-1 w-48">
              <button className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-primary-900 text-white text-sm font-medium shadow-lg shadow-primary-900/20">
                <Layout className="size-4" /> Dashboard
              </button>
              <button className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 text-sm font-medium transition-colors">
                <History className="size-4" /> Transactions
              </button>
              <button className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 text-sm font-medium transition-colors">
                <Settings className="size-4" /> Settings
              </button>
            </div>
            <div className="flex-1 p-8 rounded-2xl border border-slate-100 bg-white min-h-[160px] flex items-center justify-center text-slate-400 text-sm">
              Vertical Layout View
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
