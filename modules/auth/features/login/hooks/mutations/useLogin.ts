import { useMutation } from '@tanstack/react-query';
import { loginService } from '../../services/login.service';
import { useAuthStore } from '@/modules/auth/stores/auth.store';
import type { LoginDto } from '../../types/login.types';
import type { AuthResponse } from '@/modules/auth/types/auth.types';

export function useLogin() {
  const login = useAuthStore((s) => s.login);

  return useMutation<AuthResponse, Error, LoginDto>({
    mutationFn: loginService.login,

    onSuccess: (data) => {
      if (!data?.token) {
        throw new Error('Token tidak ditemukan');
      }

      login({
        token: data.token,
        user: data.user ?? null,
      });

      console.log('Login success', data);
    },
  });
}
