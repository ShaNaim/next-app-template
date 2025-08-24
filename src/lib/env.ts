import { z } from "zod";

const envSchema = z.object({
  // App Configuration
  NEXT_PUBLIC_APP_NAME: z.string().default("Next.js Starter Template"),
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

const envValidation = envSchema.safeParse({
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NODE_ENV: process.env.NODE_ENV,
});

if (!envValidation.success) {
  console.error("❌ Invalid environment variables:", envValidation.error.flatten().fieldErrors);
  process.exit(1);
}

export const env = envValidation.data;

export type Env = z.infer<typeof envSchema>;
