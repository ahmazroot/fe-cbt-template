import * as React from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';

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

const registerSchema = z.object({
  email: z.string().email({ message: 'Email tidak valid' }),
  password: z.string().min(8, { message: 'Password minimal 8 karakter' }),
  firstname: z.string().min(1, { message: 'Firstname wajib diisi' }),
  lastname: z.string().min(1, { message: 'Lastname wajib diisi' }),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
    },
  });

  const registerRequest = async (payload: {
    Email: string;
    Password: string;
    Firstname: string;
    Lastname: string;
  }) => {
    const res = await axios.post('/api/auth/register', payload);
    return res.data;
  };

  const registerMutation = useMutation({
    mutationFn: registerRequest,
    onSuccess: () => {
      router.replace('/autentikasi/login');
    },
    onError: (error) => {
      console.error('REGISTER ERROR', error);
    },
  });

  function onSubmit(values: RegisterFormValues) {
    registerMutation.mutate({
      Email: values.email,
      Password: values.password,
      Firstname: values.firstname,
      Lastname: values.lastname,
    });
  }

  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[380px]">
      {/* Mobile Logo (Only shows on mobile) */}
      <div className="flex flex-col space-y-2 text-center">
        <div className="mb-4 flex justify-center lg:hidden">
          <LogoIcon />
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Daftar</h1>
        <p className="text-sm text-slate-500">Daftar untuk mengakses sistem.</p>
      </div>

      {/* Form */}
      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
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

            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Firstname</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Firstname"
                      type="text"
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
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lastname</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Lastname"
                      type="text"
                      {...field}
                      className="h-11 shadow-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" size="lg" className="w-full mt-2">
              Daftar
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
