import { BrandingColumn } from '@/modules/auth/features/login/components/BrandingColumn';
import { RegisterForm } from './RegisterForm';

export function RegisterView() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <BrandingColumn />
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight">Daftar Institusi</h1>
            <p className="text-sm text-slate-500">Buat akun baru untuk mengakses sistem</p>
          </div>

          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
