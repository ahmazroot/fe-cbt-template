'use client';

import { useMutation } from '@tanstack/react-query';
import { registerService } from '../../services/register.service';
import type { RegisterDto } from '../../types/register.types';

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: RegisterDto) => registerService.register(data),
  });
};
