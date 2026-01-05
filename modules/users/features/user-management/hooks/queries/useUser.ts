import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { userService } from '@/modules/users/services/user.service';
import { userKeys } from '../user.keys';
import type { User } from '@/modules/users/user.types';

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
