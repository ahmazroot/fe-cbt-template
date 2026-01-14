'use client';
import * as React from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { LogoIcon } from '@/components/exam/logo-icon';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useRegister } from '../hooks/mutations/useRegister';
import { AlertSuccess } from './AlertSuccess';

const registerSchema = z.object({
  email: z.string().email({ message: 'Email tidak valid' }),
  password: z.string().min(8, { message: 'Password minimal 8 karakter' }),
  firstname: z.string().min(2, { message: 'Nama depan minimal 2 karakter' }),
  lastname: z.string().min(2, { message: 'Nama belakang minimal 2 karakter' }),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const registerMutation = useRegister();
  const [showSuccess, setShowSuccess] = React.useState(false);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
    },
  });

  function onSubmit(values: RegisterFormValues) {
    registerMutation.mutate(values, {
      onSuccess: () => {
        setShowSuccess(true);
        form.reset();
      },
    });
  }

  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-95">
      {/* Mobile Logo (Only shows on mobile) */}
      <div className="flex flex-col space-y-2 text-center">
        <div className="mb-4 flex justify-center lg:hidden">
          <LogoIcon />
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Selamat Datang Kembali</h1>
        <p className="text-sm text-slate-500">
          Masukkan kredensial Anda untuk mengakses dashboard.
        </p>
      </div>

      {/* Form */}
      <div className="grid gap-6">
        {showSuccess && <AlertSuccess />}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Firstname</FormLabel>
                  <FormControl>
                    <Input placeholder="Harry" type="text" {...field} className="h-11 shadow-sm" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lastname</FormLabel>
                  <FormControl>
                    <Input placeholder="Potter" type="text" {...field} className="h-11 shadow-sm" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="nama@institusi.com"
                      type="email"
                      {...field}
                      className="h-11 shadow-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>
                  </div>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="••••••••"
                        type={showPassword ? 'text' : 'password'}
                        {...field}
                        className="h-11 shadow-sm pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 focus:outline-none"
                      >
                        {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" size="lg" className="w-full mt-2">
              Daftar Akun
            </Button>
          </form>
        </Form>
      </div>

      {/* Footer Link */}
      <p className="px-8 text-center text-sm text-slate-500">
        Sudah punya akun Chairman?{' '}
        <Link
          href="/autentikasi/login"
          className="underline underline-offset-4 hover:text-primary-600 text-slate-900 font-medium"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
