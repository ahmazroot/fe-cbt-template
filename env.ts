import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  /**
   * Server-side environment variables schema
   * These are only available on the server and never exposed to the client
   */
  server: {
    NODE_ENV: z.enum(['development', 'production']).default('development'),
    // Add your server-side environment variables here
    // Example:
    // DATABASE_URL: z.string().url(),
    // JWT_SECRET: z.string().min(32),
  },

  /**
   * Client-side environment variables schema
   * These must be prefixed with NEXT_PUBLIC_ and are exposed to the browser
   */
  client: {
    NEXT_PUBLIC_NODE_ENV: z.enum(['development', 'production']).default('development'),
    NEXT_PUBLIC_APP_NAME: z.string().default('FE-CBT'),
    NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
    NEXT_PUBLIC_API_URL: z.string().url().default('http://localhost:3000'),
    // Add your client-side environment variables here
    // Example:
    // NEXT_PUBLIC_API_URL: z.string().url(),
  },

  /**
   * Runtime environment variables
   * You can destructure all the keys here for validation
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    // Add your runtime environment variables here
    // Make sure to add them to both the schema above and here
  },

  /**
   * Skip validation of environment variables on build for Docker builds
   * Only set to true if you know what you're doing
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  /**
   * Makes it so that empty strings are treated as undefined
   * `SOME_VAR: z.string()` and `SOME_VAR=''` will throw an error
   */
  // emptyStringAsUndefined: true,
});