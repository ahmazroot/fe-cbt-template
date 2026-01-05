import { useMutation, useQueryClient, type UseMutationResult } from '@tanstack/react-query';
import { userService } from '@/modules/users/services/user.service';
import { userKeys } from '../user.keys';
import type { User, UpdateUserDto } from '@/modules/users/user.types';

/**
 * Update user mutation
 */
export function useUpdateUser(): UseMutationResult<
    User,
    Error,
    { id: string; data: UpdateUserDto }
> {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }) => userService.updateUser(id, data),
        onSuccess: (updatedUser) => {
            // Invalidate user detail query
            queryClient.invalidateQueries({ queryKey: userKeys.detail(updatedUser.id) });
            // Invalidate users list
            queryClient.invalidateQueries({ queryKey: userKeys.lists() });
        },
    });
}
