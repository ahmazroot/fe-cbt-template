import { LoginView } from '@/modules/auth/features/login/components/LoginView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - ProExam CBT System',
  description: 'Akses dashboard ProExam System untuk manajemen ujian voucher dan peserta.',
};

export default function LoginPage() {
  return <LoginView />;
}
