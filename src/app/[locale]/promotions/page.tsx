import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Container, SectionHeading } from '@/components/ui';
import { Breadcrumbs } from '@/components/layout';
import { PromotionsContent } from '@/components/promotions/PromotionsContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('promotions');
  return { title: t('title') };
}

export default async function PromotionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('promotions');
  const tNav = await getTranslations('nav');

  return (
    <>
      <Breadcrumbs items={[
        { label: tNav('home'), href: '/' },
        { label: tNav('promotions'), href: '/promotions' },
      ]} />
      <section className="section-padding">
        <Container>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
          <PromotionsContent />
        </Container>
      </section>
    </>
  );
}
