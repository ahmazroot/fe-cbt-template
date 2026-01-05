import apiClient from '@/lib/api-client';
import type { ApiResponse, PaginatedResponse, PaginationParams } from '@/types/api';
import type {
  User,
  CreateUserDto,
  UpdateUserDto,
} from '@/modules/users/features/user-management/types/user.types';

/**
 * User Service
 * All API calls related to users
 */
export const userService = {
  /**
   * Get all users with pagination
   */
  async getUsers(params?: PaginationParams): Promise<PaginatedResponse<User>> {
    const response = await apiClient.get<PaginatedResponse<User>>('/users', { params });
    return response.data;
  },

  /**
   * Get user by ID
   */
  async getUserById(id: string): Promise<User> {
    const response = await apiClient.get<ApiResponse<User>>(`/users/${id}`);
    return response.data.data;
  },

  /**
   * Create new user
   */
  async createUser(data: CreateUserDto): Promise<User> {
    const response = await apiClient.post<ApiResponse<User>>('/users', data);
    return response.data.data;
  },

  /**
   * Update user
   */
  async updateUser(id: string, data: UpdateUserDto): Promise<User> {
    const response = await apiClient.patch<ApiResponse<User>>(`/users/${id}`, data);
    return response.data.data;
  },

  /**
   * Delete user
   */
  async deleteUser(id: string): Promise<void> {
    await apiClient.delete(`/users/${id}`);
  },
};
