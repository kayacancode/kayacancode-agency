import React from 'react'
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kaya Jones',
  description: 'Applied AI engineer and founder building intelligent automation systems.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
