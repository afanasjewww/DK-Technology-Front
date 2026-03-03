import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Container, SectionHeading } from '@/components/ui';
import { Breadcrumbs } from '@/components/layout';
import { ServiceContent } from '@/components/service/ServiceContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('service');
  return { title: t('title'), description: t('subtitle') };
}

export default async function ServicePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('service');
  const tNav = await getTranslations('nav');

  return (
    <>
      <Breadcrumbs items={[
        { label: tNav('home'), href: '/' },
        { label: tNav('service'), href: '/service' },
      ]} />
      <section className="section-padding">
        <Container>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
          <ServiceContent />
        </Container>
      </section>
    </>
  );
}
