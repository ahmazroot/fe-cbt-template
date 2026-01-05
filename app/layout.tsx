import type { Metadata } from 'next';
import { Inter, Geist_Mono } from 'next/font/google';
import './globals.css';
import { env } from '@/env';
import { QueryProvider } from '@/providers/query-provider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: env.NEXT_PUBLIC_APP_NAME,
    template: `%s | ${env.NEXT_PUBLIC_APP_NAME}`,
  },
  description:
    'Platform Computer-Based Test (CBT) untuk evaluasi dan assessment digital yang efisien dan modern.',
  keywords: [
    'CBT',
    'Computer-Based Test',
    'Online Assessment',
    'Digital Examination',
    'E-Learning',
    'Online Test',
  ],
  authors: [{ name: 'FE-CBT Team' }],
  creator: 'FE-CBT Team',
  publisher: 'FE-CBT',
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: env.NEXT_PUBLIC_APP_URL,
    title: env.NEXT_PUBLIC_APP_NAME,
    description:
      'Platform Computer-Based Test (CBT) untuk evaluasi dan assessment digital yang efisien dan modern.',
    siteName: env.NEXT_PUBLIC_APP_NAME,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${env.NEXT_PUBLIC_APP_NAME} - Computer-Based Test Platform`,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: env.NEXT_PUBLIC_APP_NAME,
    description:
      'Platform Computer-Based Test (CBT) untuk evaluasi dan assessment digital yang efisien dan modern.',
    images: ['/twitter-image.png'],
    creator: '@fe_cbt',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // PWA
  manifest: '/manifest.json',

  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  // Verification
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
