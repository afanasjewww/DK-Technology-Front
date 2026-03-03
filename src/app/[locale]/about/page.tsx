import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Container, SectionHeading } from '@/components/ui';
import { Breadcrumbs } from '@/components/layout';
import { AboutContent } from '@/components/about/AboutContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');
  return { title: t('title'), description: t('subtitle') };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');
  const tNav = await getTranslations('nav');

  return (
    <>
      <Breadcrumbs items={[
        { label: tNav('home'), href: '/' },
        { label: tNav('about'), href: '/about' },
      ]} />
      <section className="section-padding">
        <Container>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
          <AboutContent />
        </Container>
      </section>
    </>
  );
}
