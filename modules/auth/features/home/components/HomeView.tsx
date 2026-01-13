'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/modules/auth/stores/auth.store';

export function HomeView() {
  const router = useRouter();

  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);

  React.useEffect(() => {
    if (!token) {
      router.replace('/autentikasi/login');
    }
  }, [token, router]);

  const handleLogout = () => {
    logout();
    router.replace('/autentikasi/login');
  };

  if (!token) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-700 mb-6">Selamat datang di dashboard ProExam CBT System!</p>

      <div className="space-x-4">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
