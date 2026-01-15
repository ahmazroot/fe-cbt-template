import { RegisterView } from '@/modules/auth/features/register/components/RegisterView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register - ProExam CBT System',
  description: 'Pendaftaran akun ProExam CBT System',
};

export default function RegisterPage() {
  return <RegisterView />;
}
