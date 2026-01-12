import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  /**
   * Server-side environment variables schema
   */
  server: {
    NODE_ENV: z.enum(['development', 'production']).default('development'),
    // DATABASE_URL: z.string().url(),
    // JWT_SECRET: z.string().min(32),
  },

  /**
   * Client-side environment variables schema
   * Harus prefix NEXT_PUBLIC_
   */
  client: {
    NEXT_PUBLIC_APP_NAME: z.string().default('FE-CBT'),
    NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
    NEXT_PUBLIC_API_URL: z.string().url(),
    NEXT_PUBLIC_API_VERSION: z.string().default('v1'),
  },

  /**
   * Runtime environment variables
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_API_VERSION: process.env.NEXT_PUBLIC_API_VERSION,
  },

  /**
   * Skip validation of environment variables on build
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
