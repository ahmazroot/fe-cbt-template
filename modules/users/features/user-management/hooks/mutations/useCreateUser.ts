import { useMutation, useQueryClient, type UseMutationResult } from '@tanstack/react-query';
import { userService } from '@/modules/users/features/user-management/services/user.service';
import { userKeys } from '../user.keys';
import type {
  User,
  CreateUserDto,
} from '@/modules/users/features/user-management/types/user.types';

/**
 * Create user mutation
 */
export function useCreateUser(): UseMutationResult<User, Error, CreateUserDto> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userService.createUser,
    onSuccess: () => {
      // Invalidate users list to refetch
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });
    },
  });
}
