'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (!user) {
      router.push('/login');
    }
  }, [router]);

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-[90%] max-w-md text-center">
        <h1 className="text-3xl font-bold mb-2">Selamat Datang 👋</h1>
        <p className="text-gray-500 mb-6">Anda sudah login ke aplikasi CBT</p>

        <button
          onClick={() => router.push('/dashboard')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
        >
          Masuk Dashboard
        </button>
      </div>
    </main>
  );
}
