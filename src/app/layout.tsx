import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DK Tech',
  description: 'DK Tech - продажа и аренда техники BRP и Polaris',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
