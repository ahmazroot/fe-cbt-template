export interface AuthUser {
  id: string;
  username: string;
  role: string;
}

export interface AuthResponse {
  token: string;
  user: AuthUser;
}

export interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  hasHydrated: boolean;
}

export interface AuthActions {
  login: (payload: { user: AuthUser; token: string }) => void;
  logout: () => void;
  setToken: (token: string | null) => void;
  setLoading: (isLoading: boolean) => void;
  setHasHydrated: () => void;
}
