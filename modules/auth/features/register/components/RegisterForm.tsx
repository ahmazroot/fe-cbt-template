'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

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

import { registerService } from '../services/register.service';

const registerSchema = z
  .object({
    Firstname: z.string().min(2, 'Firstname minimal 2 karakter'),
    Lastname: z.string().min(2, 'Lastname minimal 2 karakter'),
    Email: z.string().email('Email tidak valid'),
    Password: z.string().min(8, 'Password minimal 8 karakter'),
    ConfirmPassword: z.string().min(8),
  })
  .refine((data) => data.Password === data.ConfirmPassword, {
    message: 'Password dan Konfirmasi Password tidak sama',
    path: ['ConfirmPassword'],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);
  const [error, setError] = React.useState('');

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      Firstname: '',
      Lastname: '',
      Email: '',
      Password: '',
      ConfirmPassword: '',
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: RegisterFormValues) {
    try {
      setError('');

      const data = await registerService.register({
        Firstname: values.Firstname,
        Lastname: values.Lastname,
        Email: values.Email,
        Password: values.Password,
      });

      void data;

      router.push('/autentikasi/login');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Register gagal');
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Firstname */}
        <FormField
          control={form.control}
          name="Firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Firstname</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Firstname" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Lastname */}
        <FormField
          control={form.control}
          name="Lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lastname</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Lastname" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="Email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} type="email" placeholder="nama@email.com" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="Password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-slate-400"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="ConfirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Konfirmasi Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    type={showConfirm ? 'text' : 'password'}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-3 text-slate-400"
                  >
                    {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Button Register (Loading tanpa ubah UI) */}
        <Button type="submit" className="w-full mt-2" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin inline" />}
          Register
        </Button>
      </form>
    </Form>
  );
}
