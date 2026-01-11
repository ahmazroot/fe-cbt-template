import { useMutation } from '@tanstack/react-query';
import { registerService } from '../../services/register.service';
import { REGISTER_KEYS } from '../register.keys';
import type {
  RegisterPayload,
  RegisterResponse,
} from '../../types/register.types';

export function useRegister() {
  return useMutation<RegisterResponse, Error, RegisterPayload>({
    mutationKey: REGISTER_KEYS.register,
    mutationFn: (payload) => registerService(payload),
  });
}
