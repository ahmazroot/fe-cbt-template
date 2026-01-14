import { RegisterView } from '@/modules/auth/features/register/components/RegisterView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register - ProExam CBT System',
  description: 'Akses dashboard ProExam System untuk manajemen ujian voucher dan peserta.',
};

export default function RegisterPage() {
  return <RegisterView />;
}
