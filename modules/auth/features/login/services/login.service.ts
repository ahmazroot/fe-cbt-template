import apiClient from '@/lib/api-client';
import type { LoginDto } from '../types/login.types';
import type { AuthResponse } from '@/modules/auth/types/auth.types';

/**
 * Login Service
 * Handle all login-related API calls
 */
export const loginService = {
  /**
   * Login user
   * Through Next.js API Route (CORS-safe)
   */
  async login(payload: LoginDto): Promise<AuthResponse> {
    const response = await apiClient.post('/api/auth/login', payload);

    /**
     * Handle flexible backend response formats
     */
    const data =
      response.data?.data ??
      response.data?.result ??
      response.data;

    if (!data?.token && !data?.access_token) {
      throw new Error('Token tidak ditemukan pada response API');
    }

    return {
      ...data,
      token: data.token ?? data.access_token,
    };
  },
};
