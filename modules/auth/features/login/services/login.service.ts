import axios from '@/lib/axios';
import { LoginDto, LoginResponse } from '../types/login.types';

export const loginService = async (payload: LoginDto): Promise<LoginResponse> => {
  const { data } = await axios.post<LoginResponse>('/api/auth/login', payload);
  return data;
};
