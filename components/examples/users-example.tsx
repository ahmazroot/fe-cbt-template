'use client';

import { useUsers } from '@/modules/users/features/user-management/hooks/queries/useUsers';
import { useCreateUser } from '@/modules/users/features/user-management/hooks/mutations/useCreateUser';
import { useDeleteUser } from '@/modules/users/features/user-management/hooks/mutations/useDeleteUser';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

/**
 * Example Component showing how to use React Query hooks
 */
export function UsersExample() {
  // Fetch users with pagination
  const { data, isLoading, error } = useUsers({ page: 1, limit: 10 });

  // Mutations
  const createUser = useCreateUser();
  const deleteUser = useDeleteUser();

  const handleCreateUser = async () => {
    try {
      await createUser.mutateAsync({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
        role: 'student',
      });
      toast.success('User created successfully!');
    } catch (error) {
      toast.error('Failed to create user');
    }
  };

  const handleDeleteUser = async (id: string) => {
    try {
      await deleteUser.mutateAsync(id);
      toast.success('User deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete user');
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Users</h2>
        <Button onClick={handleCreateUser} disabled={createUser.isPending}>
          {createUser.isPending ? 'Creating...' : 'Create User'}
        </Button>
      </div>

      <div className="space-y-2">
        {data?.data.map((user) => (
          <div key={user.id} className="flex justify-between items-center p-4 border rounded">
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <Button
              variant="destructive"
              onClick={() => handleDeleteUser(user.id)}
              disabled={deleteUser.isPending}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>

      {data && (
        <div className="text-sm text-gray-500">
          Page {data.pagination.page} of {data.pagination.totalPages} (Total:{' '}
          {data.pagination.total})
        </div>
      )}
    </div>
  );
}
