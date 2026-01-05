import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { userService } from '@/modules/users/features/user-management/services/user.service';
import type { PaginatedResponse, PaginationParams } from '@/types/api';
import type { User } from '@/modules/users/features/user-management/types/user.types';
import { userKeys } from '../user.keys';

/**
 * Get all users with pagination
 */
export function useUsers(
  params?: PaginationParams
): UseQueryResult<PaginatedResponse<User>, Error> {
  return useQuery({
    queryKey: userKeys.list(params),
    queryFn: () => userService.getUsers(params),
  });
}
