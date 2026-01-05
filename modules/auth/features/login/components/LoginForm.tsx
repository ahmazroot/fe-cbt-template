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

const loginSchema = z.object({
    email: z.string().email({ message: 'Email tidak valid' }),
    password: z.string().min(8, { message: 'Password minimal 8 karakter' }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
    const [showPassword, setShowPassword] = React.useState(false);

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    function onSubmit(values: LoginFormValues) {
        console.log(values);
    }

    return (
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[380px]">
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
                                        <Link href="#" className="text-sm font-medium text-primary-600 hover:text-primary-500 hover:underline">
                                            Lupa password?
                                        </Link>
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
                            Masuk ke Dashboard
                        </Button>
                    </form>
                </Form>

                {/* Divider */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-slate-200"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-slate-500 lowercase first-letter:uppercase">Atau lanjutkan dengan</span>
                    </div>
                </div>

                {/* Social Login */}
                <Button variant="outline" size="lg" className="w-full border-slate-200">
                    <svg className="h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                        <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                    </svg>
                    Google
                </Button>
            </div>

            {/* Footer Link */}
            <p className="px-8 text-center text-sm text-slate-500">
                Belum punya akun Chairman? {' '}
                <Link href="#" className="underline underline-offset-4 hover:text-primary-600 text-slate-900 font-medium">
                    Daftar Institusi
                </Link>
            </p>
        </div>
    );
}
