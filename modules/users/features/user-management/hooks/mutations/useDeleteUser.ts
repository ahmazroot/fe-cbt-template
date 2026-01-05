import { useMutation, useQueryClient, type UseMutationResult } from '@tanstack/react-query';
import { userService } from '@/modules/users/features/user-management/services/user.service';
import { userKeys } from '../user.keys';

/**
 * Delete user mutation
 */
export function useDeleteUser(): UseMutationResult<void, Error, string> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userService.deleteUser,
    onSuccess: () => {
      // Invalidate users list
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });
    },
  });
}
