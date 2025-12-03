import React from 'react'
import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Kaya Jones - Software Engineer',
  description: 'Applied AI engineer and founder specializing in intelligent automation, context driven agent systems, and full stack SaaS development.',
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
      <body className="font-serif antialiased">{children}</body>
    </html>
  );
}
