import { Space_Grotesk, Inter } from 'next/font/google';

export const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});
