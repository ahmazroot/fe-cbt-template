'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { useLogin } from '../hooks/mutations/useLogin';
import type { LoginDto } from '../types/login.types';

type LoginFormValues = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { mutate, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    // ⬇️ KONVERSI ke format LoginDto
    const payload: LoginDto = {
      Email: values.email,
      Password: values.password,
    };

    mutate(payload);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {/* EMAIL */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Email</label>
        <input
          type="email"
          {...register('email', { required: 'Email wajib diisi' })}
          className="rounded-md border px-3 py-2"
          placeholder="email@example.com"
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
      </div>

      {/* PASSWORD */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Password</label>
        <input
          type="password"
          {...register('password', { required: 'Password wajib diisi' })}
          className="rounded-md border px-3 py-2"
          placeholder="********"
        />
        {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        disabled={isPending}
        className="rounded-md bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {isPending ? 'Loading...' : 'Login'}
      </button>
    </form>
  );
}
