'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { registerService } from '../../services/register.service';
import { REGISTER_KEYS } from '../register.keys';
import type { RegisterPayload, RegisterResponse } from '../../types/register.types';

export function useRegister() {
  const router = useRouter();

  return useMutation<RegisterResponse, Error, RegisterPayload>({
    mutationKey: REGISTER_KEYS.register,
    mutationFn: (payload) => registerService.register(payload),

    onSuccess: () => {
      router.replace('/autentikasi/login');
    },
  });
}
