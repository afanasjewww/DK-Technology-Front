import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DK Techno',
  description: 'DK Techno — ДК ТЕХНОЛОДЖИС, ООО. Продажа и аренда техники BRP и Polaris в России.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
