import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Bakery Source | Fresh baked goods, thoughtfully delivered',
  description: 'The Bakery Source, Inc. is a wholesale bakery partner for grocery stores, caterers, and food teams.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
