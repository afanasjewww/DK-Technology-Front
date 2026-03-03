import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import localFont from 'next/font/local';
import { routing } from '@/i18n/routing';
import { Header, Footer, CookieConsent, FloatingContacts } from '@/components/layout';
import { ThemeProvider } from '@/components/theme-provider';

const inter = localFont({
  src: '../../../public/fonts/Inter-Variable.woff2',
  variable: '--font-inter',
  display: 'swap',
});

const rajdhani = localFont({
  src: [
    { path: '../../../public/fonts/Rajdhani-Medium.ttf', weight: '500' },
    { path: '../../../public/fonts/Rajdhani-SemiBold.ttf', weight: '600' },
    { path: '../../../public/fonts/Rajdhani-Bold.ttf', weight: '700' },
  ],
  variable: '--font-rajdhani',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${rajdhani.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-dk-gray-50 dark:bg-dk-gray-950 text-dk-gray-900 dark:text-dk-gray-100 transition-colors duration-300">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingContacts />
            <CookieConsent />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
