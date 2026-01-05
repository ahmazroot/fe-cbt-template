/**
 * User Domain Types
 */

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'teacher' | 'student';
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'teacher' | 'student';
}

export interface UpdateUserDto {
  name?: string;
  email?: string;
  role?: 'admin' | 'teacher' | 'student';
}
