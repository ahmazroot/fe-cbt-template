import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { userService } from '@/modules/users/features/user-management/services/user.service';
import { userKeys } from '../user.keys';
import type { User } from '@/modules/users/features/user-management/types/user.types';

/**
 * Get user by ID
 */
export function useUser(id: string): UseQueryResult<User, Error> {
  return useQuery({
    queryKey: userKeys.detail(id),
    queryFn: () => userService.getUserById(id),
    enabled: !!id, // Only fetch if ID is provided
  });
}
