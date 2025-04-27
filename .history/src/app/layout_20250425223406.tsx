import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kayacancode - AI-Powered Business Development',
  description: 'Empowering founders with full-stack development and AI integration to ship smarter, faster, better.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://fast.wistia.com/embed/medias-loading.js" strategy="beforeInteractive" />
        <Script src="https://fast.wistia.com/assets/external/E-v1.js" strategy="beforeInteractive" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
} 