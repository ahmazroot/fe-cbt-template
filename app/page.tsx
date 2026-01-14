'use client';

import { useAuthStore } from '@/modules/auth/stores/auth.store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HomePage() {
  const { token, hasHydrated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!hasHydrated) return;

    if (!token) {
      router.replace('/autentikasi/login');
    }
  }, [token, hasHydrated]);

  if (!hasHydrated) return null;

  return <div>WELCOME</div>;
}
