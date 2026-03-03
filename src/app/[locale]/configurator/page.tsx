import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import { Breadcrumbs } from '@/components/layout';
import { ConfiguratorPlaceholder } from '@/components/configurator/ConfiguratorPlaceholder';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('configurator');
  return { title: t('title'), description: t('subtitle') };
}

export default async function ConfiguratorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations('nav');

  return (
    <>
      <Breadcrumbs items={[
        { label: tNav('home'), href: '/' },
        { label: tNav('configurator'), href: '/configurator' },
      ]} />
      <ConfiguratorPlaceholder />
    </>
  );
}
