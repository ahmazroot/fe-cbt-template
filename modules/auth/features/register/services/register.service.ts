import { REGISTER_API } from './register.api';
import { RegisterPayload, RegisterResponse } from '../types/register.types';

export async function registerService(
  payload: RegisterPayload
): Promise<RegisterResponse> {
  const res = await fetch(REGISTER_API.REGISTER, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || 'Register gagal');
  }

  return res.json();
}
