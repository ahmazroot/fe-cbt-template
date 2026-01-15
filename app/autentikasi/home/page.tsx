import { HomeView } from '@/modules/home/components/HomeView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - ProExam CBT System',
  description: 'Halaman dashboard ProExam untuk manajemen ujian dan peserta.',
};

export default function HomePage() {
  return <HomeView />;
}
