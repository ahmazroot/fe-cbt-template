'use client';

import { useAuthGuard } from '@/modules/home/hooks/use-auth-guard';
import { useLogout } from '@/modules/home/hooks/use-logout';

export function HomeView() {
  const { token } = useAuthGuard();
  const { handleLogout } = useLogout();

  if (!token) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-700 mb-6">Selamat datang di dashboard ProExam CBT System!</p>

      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}
