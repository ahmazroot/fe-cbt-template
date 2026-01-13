// services/auth.service.ts

export interface User {
  id: number;
  name: string;
  email: string;
  password: string; // simulasi password
}

export interface AuthResponse {
  status: number;
  message: string;
  token: string;
  user: Omit<User, 'password'>;
}

const users: User[] = [];

export const AuthService = {
  login(email: string, password: string): AuthResponse {
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      throw new Error('Email atau password salah');
    }

    const token = 'fake-jwt-token-' + Date.now();

    localStorage.setItem('token', token);
    localStorage.setItem(
      'user',
      JSON.stringify({ id: user.id, name: user.name, email: user.email })
    );

    return {
      status: 200,
      message: 'Login berhasil',
      token,
      user: { id: user.id, name: user.name, email: user.email },
    };
  },

  register(name: string, email: string, password: string): AuthResponse {
    const exists = users.find((u) => u.email === email);
    if (exists) {
      throw new Error('Email sudah terdaftar');
    }

    const newUser: User = {
      id: Date.now(),
      name,
      email,
      password, // password DISIMPAN (simulasi)
    };

    users.push(newUser);

    const token = 'fake-jwt-token-' + Date.now();

    localStorage.setItem('token', token);
    localStorage.setItem(
      'user',
      JSON.stringify({ id: newUser.id, name: newUser.name, email: newUser.email })
    );

    return {
      status: 201,
      message: 'Register berhasil',
      token,
      user: { id: newUser.id, name: newUser.name, email: newUser.email },
    };
  },

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  },

  getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
};
