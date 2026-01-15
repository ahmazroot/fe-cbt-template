'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/modules/auth/stores/auth.store';

export function useAuthGuard() {
  const router = useRouter();

  const token = useAuthStore((state) => state.token);
  const hasHydrated = useAuthStore((state) => state.hasHydrated);

  React.useEffect(() => {
    if (!hasHydrated) return;

    if (!token) {
      router.replace('/autentikasi/login');
    }
  }, [token, hasHydrated, router]);

  return {
    token,
    hasHydrated,
    isAuthenticated: !!token,
  };
}
