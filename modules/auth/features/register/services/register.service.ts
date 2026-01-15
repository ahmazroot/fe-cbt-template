import apiClient from '@/lib/api-client';
import type { RegisterPayload } from '../types/register.types';
import type { RegisterResponse } from '../types/register.types';

export const registerService = {
  async register(payload: RegisterPayload): Promise<RegisterResponse> {
    const response = await apiClient.post('/auth/register-test', payload);

    const data = response.data?.data ?? response.data?.result ?? response.data;

    if (!data) {
      throw new Error('Register gagal, response API kosong');
    }

    return data as RegisterResponse;
  },
};
