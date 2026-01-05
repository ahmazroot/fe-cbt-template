import { User } from '@/modules/users/features/user-management/types/user.types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}

interface AuthActions {
    login: (user: User, token: string) => void;
    logout: () => void;
    setToken: (token: string) => void;
    setLoading: (isLoading: boolean) => void;
}

type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            // Initial State
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,

            // Actions
            login: (user, token) =>
                set({
                    user,
                    token,
                    isAuthenticated: true,
                }),

            logout: () =>
                set({
                    user: null,
                    token: null,
                    isAuthenticated: false,
                }),

            setToken: (token) =>
                set({
                    token,
                }),

            setLoading: (isLoading) =>
                set({
                    isLoading,
                }),
        }),
        {
            name: 'auth-storage', // unique name for localStorage key
            partialize: (state) => ({ token: state.token, user: state.user, isAuthenticated: state.isAuthenticated }), // only persist these fields
        }
    )
);
