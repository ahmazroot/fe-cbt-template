import apiClient from '@/lib/api-client';
import type { ApiResponse } from '@/types/api';
import type { AuthResponse } from '@/modules/auth/types/auth.types';
import type { LoginDto } from '../types/login.types';

/**
 * Login Service
 * All API calls related to login
 */
export const loginService = {
  /**
   * Login user
   */
  async login(data: LoginDto): Promise<AuthResponse> {
    const response = await apiClient.post<ApiResponse<AuthResponse>>('/auth/login', data);
    return response.data.data;
  },
};
