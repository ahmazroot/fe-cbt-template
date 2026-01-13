'use client';

import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/modules/auth/stores/auth.store';

export function HomeView() {
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    router.replace('/autentikasi/login');
  };

  return (
    <div className="flex min-h-screen items-center justify-center absolute inset-0 bg-wahcah-gradient opacity-90">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-2xl font-bold text-slate-900">Home</h1>

        <p className="mb-6 text-center text-sm text-slate-500">Anda berhasil login ke sistem</p>

        <button
          onClick={handleLogout}
          className="w-full rounded-lg bg-red-600 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
