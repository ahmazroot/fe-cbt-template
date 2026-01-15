'use client';

import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/modules/auth/stores/auth.store';

export function useLogout() {
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    router.replace('/autentikasi/login');
  };

  return { handleLogout };
}
