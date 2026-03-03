import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Container, SectionHeading } from '@/components/ui';
import { Breadcrumbs } from '@/components/layout';
import { ContactsContent } from '@/components/contacts/ContactsContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contacts');
  return { title: t('title'), description: t('subtitle') };
}

export default async function ContactsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contacts');
  const tNav = await getTranslations('nav');

  return (
    <>
      <Breadcrumbs items={[
        { label: tNav('home'), href: '/' },
        { label: tNav('contacts'), href: '/contacts' },
      ]} />
      <section className="section-padding">
        <Container>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
          <ContactsContent />
        </Container>
      </section>
    </>
  );
}
