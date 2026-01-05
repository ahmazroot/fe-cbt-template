'use client';

import * as React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { StandardCard } from '@/components/ui/standard-card';
import { StatsCard } from '@/components/ui/stats-card';
import * as Typography from '@/components/ui/typography';
import {
  PackageIcon,
  UsersIcon,
  TrendingUpIcon,
  ArrowRightIcon,
  MoreVerticalIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function CardsSection() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center space-y-12 py-20 px-4">
      <div className="text-center space-y-2">
        <Typography.H2>Card System</Typography.H2>
        <Typography.Muted>Content containers and information grouping patterns.</Typography.Muted>
      </div>

      <div className="w-full max-w-5xl space-y-12">
        {/* Stats Cards Showcase */}
        <div className="space-y-6">
          <Typography.H3 className="text-center">Metric & Stats Cards</Typography.H3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatsCard
              title="Total Students"
              value="12,450"
              description="+12% from last month"
              icon={<UsersIcon className="size-6" />}
            />
            <StatsCard
              title="Active Exams"
              value="84"
              description="5 starting soon"
              icon={<PackageIcon className="size-6" />}
            />
            <StatsCard
              title="Average Score"
              value="78.5%"
              description="Consistent performance"
              icon={<TrendingUpIcon className="size-6" />}
            />
          </div>
        </div>

        {/* Standard Cards Showcase */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Typography.H3>Standard Card</Typography.H3>
            <StandardCard
              title="Course Overview"
              description="Detailed breakdown of current curriculum."
            >
              <div className="space-y-4">
                <div className="h-32 bg-slate-50 rounded-xl border border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-sm">
                  Rich Content/Chart Area
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="size-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400"
                      >
                        JD
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="text-xs">
                    View Details <ArrowRightIcon className="ml-2 size-3" />
                  </Button>
                </div>
              </div>
            </StandardCard>
          </div>

          <div className="space-y-6">
            <Typography.H3>Base Card (Configurable)</Typography.H3>
            <Card className="shadow-lg shadow-slate-200/50 border-slate-100">
              <CardHeader className="flex flex-row items-start justify-between space-y-0">
                <div className="space-y-1.5">
                  <Badge variant="outline" className="mb-1">
                    Announcement
                  </Badge>
                  <CardTitle className="text-lg">System Maintenance</CardTitle>
                  <CardDescription>Scheduled for Jan 15, 2026</CardDescription>
                </div>
                <Button variant="ghost" size="icon" className="size-8">
                  <MoreVerticalIcon className="size-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The system will be offline for approximately 2 hours to perform database
                  migrations and performance optimizations.
                </p>
              </CardContent>
              <CardFooter className="pt-2">
                <Button className="w-full" variant="outline">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Minimal Patterns */}
        <div className="space-y-6">
          <Typography.H3 className="text-center">Hover States & Minimal Styles</Typography.H3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-primary-100 transition-all cursor-pointer group"
              >
                <div className="size-10 rounded-xl bg-slate-50 group-hover:bg-primary-50 flex items-center justify-center mb-4 transition-colors">
                  <PackageIcon className="size-5 text-slate-400 group-hover:text-primary-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1 group-hover:text-primary-900 transition-colors text-sm">
                  Category {i}
                </h4>
                <p className="text-xs text-slate-500">12 Items</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
