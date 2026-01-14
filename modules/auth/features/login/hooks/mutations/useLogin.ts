import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { loginService } from '@/modules/auth/features/login/services/login.service';
import type { AuthResponse } from '@/modules/auth/types/auth.types';
import type { LoginDto } from '@/modules/auth/features/login/types/login.types';
import { useAuthStore } from '@/modules/auth/stores/auth.store';
import { useRouter } from 'next/navigation';
import { loginKeys } from '../login.keys';

/**
 * Login mutation
 */
export function useLogin(): UseMutationResult<AuthResponse, Error, LoginDto> {
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  return useMutation({
    mutationKey: loginKeys.all,
    mutationFn: loginService.login,

    onSuccess: (data) => {
      login(data);
      router.replace('/');
    },
  });
}
