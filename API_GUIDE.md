# API Layer Architecture Guide

## 🏗️ Architecture Overview

```
fe-cbt/
├── lib/
│   └── api-client.ts          # Axios instance + interceptors
├── types/
│   └── api.ts                 # TypeScript API types
├── modules/
│   |── auth/
│       ├── features/
│       │   └── login/
│       │       ├── stores/
│       │       ├── types/
│       │       │   └── login.types.ts
│       │       ├── components/
│       │       ├── hooks/
│       │       │   ├── login.keys.ts
│       │       │   ├── queries/
│       │       │   └── mutations/
│       │       │       └── use-login.ts
│       │       └── services/
│       │           └── login.service.ts
│       ├── stores/
│       │   └── auth.store.ts
│       └── types/
│           └── auth.types.ts

```

## 📚 Layers Explanation

### 1. **API Client Layer** (`lib/api-client.ts`)

- Axios instance dengan default configuration
- Request interceptor: add auth token
- Response interceptor: handle errors globally
- Automatic redirect untuk 401 (unauthorized)

### 2. **Types Layer** (`types/api.ts` & `modules/*/features/*/*.types.ts`)

- TypeScript interfaces untuk API responses (Global)
- Domain types & DTOs:
  - **Shared/Domain Entities**: `modules/<module>/types/*.types.ts` (e.g., `User`, `Product`)
  - **Feature-Specific DTOs**: `modules/<module>/features/<feature>/types/*.types.ts` (e.g., `CreateUserDto`, `LoginDto`)

### 3. **Services Layer** (`modules/*/features/*/services/*.service.ts`)

- Pure functions untuk API calls
- No React dependencies
- Return Promise dengan typed responses
- Reusable across application

### 4. **Hooks Layer** (`modules/*/features/*/hooks/(queries|mutations)/use-*.ts`)

- React Query hooks (`useQuery`, `useMutation`)
- Cache management terintegrasi dengan query keys
- Automatic refetch dan invalidation
- Loading, error, success states

### 4.1. **Query Keys Layer** (`modules/*/features/*/hooks/*.keys.ts`)

- Sentralisasi semua string keys untuk React Query
- Memastikan konsistensi key di seluruh modular hooks
- Mempermudah invalidasi cache secara granular
- Menggunakan `as const` untuk type-safety

Contoh Struktur `user.keys.ts`:

```typescript
export const userKeys = {
  all: ['users'] as const,
  lists: () => [...userKeys.all, 'list'] as const,
  list: (params) => [...userKeys.lists(), params] as const,
  detail: (id) => [...userKeys.all, 'detail', id] as const,
};
```

### 5. **Components Layer**

- UI components menggunakan hooks
- Display data dan handle user interactions

---

## 🚀 Usage Examples

### Fetching Data

```typescript
'use client';

import { useUsers } from '@/modules/users/features/user-management/hooks/queries/useUsers';

export function UsersList() {
  const { data, isLoading, error } = useUsers({ page: 1, limit: 10 });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data?.data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### Creating Data

```typescript
import { useCreateUser } from '@/modules/users/features/user-management/hooks/mutations/useCreateUser';
import { toast } from 'sonner';

export function CreateUserForm() {
  const createUser = useCreateUser();

  const handleSubmit = async (values) => {
    try {
      await createUser.mutateAsync(values);
      toast.success('User created!');
    } catch (error) {
      toast.error('Failed to create user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <button disabled={createUser.isPending}>
        {createUser.isPending ? 'Creating...' : 'Create'}
      </button>
    </form>
  );
}
```

### Updating Data

```typescript
import { useUpdateUser } from '@/modules/users/features/user-management/hooks/mutations/useUpdateUser';

export function EditUserForm({ userId }) {
  const updateUser = useUpdateUser();

  const handleUpdate = async (values) => {
    await updateUser.mutateAsync({
      id: userId,
      data: values,
    });
  };

  // ...
}
```

### Deleting Data

```typescript
import { useDeleteUser } from '@/modules/users/features/user-management/hooks/mutations/useDeleteUser';

export function DeleteUserButton({ userId }) {
  const deleteUser = useDeleteUser();

  return (
    <button
      onClick={() => deleteUser.mutate(userId)}
      disabled={deleteUser.isPending}
    >
      Delete
    </button>
  );
}
```

---

## 🔧 Adding New API Endpoints

### Step 1: Define Types

**Shared Domain Types:**

```typescript
// modules/products/types/product.types.ts
export interface Product {
  id: string;
  name: string;
  price: number;
}
```

**Feature-Specific DTOs:**

```typescript
// modules/products/features/product-list/types/product-list.types.ts
export interface CreateProductDto {
  name: string;
  price: number;
}
```

### Step 2: Create Service

```typescript
// modules/products/features/product-list/services/product.service.ts
import apiClient from '@/lib/api-client';
import type { Product } from '@/modules/products/types/product.types';
import type { CreateProductDto } from '../types/product-list.types';

export const productService = {
  async getProducts() {
    const response = await apiClient.get<Product[]>('/products');
    return response.data;
  },

  async createProduct(data: CreateProductDto) {
    const response = await apiClient.post<Product>('/products', data);
    return response.data;
  },
};
```

### Step 3: Create Hooks

```typescript
// modules/products/features/product-list/hooks/queries/useProducts.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { productService } from '@/modules/products/features/product-list/services/product.service';
import { productKeys } from '../product.keys';

export const productKeys = {
  all: ['products'] as const,
  lists: () => [...productKeys.all, 'list'] as const,
};

export function useProducts() {
  return useQuery({
    queryKey: productKeys.lists(),
    queryFn: productService.getProducts,
  });
}

export function useCreateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: productService.createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
    },
  });
}
```

### Step 4: Use in Components

```typescript
// modules/products/features/product-list/components/products-list.tsx
import { useProducts } from '@/modules/products/features/product-list/hooks/queries/useProducts';
import { useCreateProduct } from '@/modules/products/features/product-list/hooks/mutations/useCreateProduct';

export function ProductsList() {
  const { data, isLoading } = useProducts();
  const createProduct = useCreateProduct();

  // ...
}
```

---

## ⚙️ Configuration

### Environment Variables

Add API URL ke `.env.development` dan `.env.production`:

```bash
# .env.development
NEXT_PUBLIC_API_URL=http://localhost:8000/api

# .env.production
NEXT_PUBLIC_API_URL=https://api.domain.com
```

### Auth Token

Axios client sudah dikonfigurasi untuk:

- Read token dari `localStorage.getItem('auth_token')`
- Add ke header: `Authorization: Bearer <token>`
- Auto redirect ke `/login` jika 401
- Refresh token jika 401 (jika perlu)

Untuk set token setelah login:

```typescript
localStorage.setItem('auth_token', your_token);
```

---

## 🎯 Best Practices

### 1. **Query Keys Organization**

```typescript
export const userKeys = {
  all: ['users'] as const,
  lists: () => [...userKeys.all, 'list'] as const,
  list: (params) => [...userKeys.lists(), params] as const,
  details: () => [...userKeys.all, 'detail'] as const,
  detail: (id) => [...userKeys.details(), id] as const,
};
```

### 2. **Error Handling**

```typescript
try {
  await mutation.mutateAsync(data);
  toast.success('Success!');
} catch (error) {
  if (axios.isAxiosError(error)) {
    toast.error(error.response?.data?.message || 'Failed');
  }
}
```

### 3. **Cache Invalidation**

```typescript
onSuccess: () => {
  // Invalidate specific query
  queryClient.invalidateQueries({ queryKey: userKeys.detail(id) });

  // Invalidate all user lists
  queryClient.invalidateQueries({ queryKey: userKeys.lists() });
};
```

### 4. **Optimistic Updates**

```typescript
const updateUser = useMutation({
  mutationFn: userService.updateUser,
  onMutate: async (newUser) => {
    // Cancel outgoing refetches
    await queryClient.cancelQueries({ queryKey: userKeys.detail(newUser.id) });

    // Snapshot previous value
    const previousUser = queryClient.getQueryData(userKeys.detail(newUser.id));

    // Optimistically update to new value
    queryClient.setQueryData(userKeys.detail(newUser.id), newUser);

    return { previousUser };
  },
  onError: (err, newUser, context) => {
    // Rollback on error
    queryClient.setQueryData(userKeys.detail(newUser.id), context?.previousUser);
  },
});
```
