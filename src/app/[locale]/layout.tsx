import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import localFont from 'next/font/local';
import { routing } from '@/i18n/routing';
import { Header, Footer, CookieConsent, FloatingContacts } from '@/components/layout';

const inter = localFont({
  src: '../../../public/fonts/Inter-Variable.woff2',
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = localFont({
  src: '../../../public/fonts/Montserrat-Variable.ttf',
  variable: '--font-montserrat',
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
    <html lang={locale} className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingContacts />
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
