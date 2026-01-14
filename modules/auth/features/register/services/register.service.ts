import apiClient from '@/lib/api-client';
import type { ApiResponse } from '@/types/api';
import type { AuthResponse } from '@/modules/auth/types/auth.types';
import type { RegisterDto } from '../types/register.types';

/**
 * Register Service
 * All API calls related to register
 */
export const registerService = {
  /**
   * Register user
   */
  async register(data: RegisterDto): Promise<AuthResponse> {
    const response = await apiClient.post<ApiResponse<AuthResponse>>('/auth/register-test', data);
    return response.data.data;
  },
};
