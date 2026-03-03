import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Container, SectionHeading } from '@/components/ui';
import { Breadcrumbs } from '@/components/layout';
import { RentalContent } from '@/components/rental/RentalContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('rental');
  return { title: t('title'), description: t('subtitle') };
}

export default async function RentalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('rental');
  const tNav = await getTranslations('nav');

  return (
    <>
      <Breadcrumbs items={[
        { label: tNav('home'), href: '/' },
        { label: tNav('rental'), href: '/rental' },
      ]} />
      <section className="section-padding">
        <Container>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
          <RentalContent />
        </Container>
      </section>
    </>
  );
}
