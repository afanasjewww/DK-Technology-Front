import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui';
import { Breadcrumbs } from '@/components/layout';
import { VehicleDetail } from '@/components/catalog/VehicleDetail';
import { vehicles, getVehicleBySlug } from '@/lib';

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) return { title: 'Not Found' };
  return { title: vehicle.name, description: vehicle.description };
}

export default async function VehicleDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const vehicle = getVehicleBySlug(slug);
  const tNav = await getTranslations('nav');
  const tCatalog = await getTranslations('catalog');

  if (!vehicle) notFound();

  const related = vehicles.filter(v => v.type === vehicle.type && v.id !== vehicle.id).slice(0, 3);

  return (
    <>
      <Breadcrumbs items={[
        { label: tNav('home'), href: '/' },
        { label: tNav('catalog'), href: '/catalog' },
        { label: vehicle.name, href: `/catalog/${vehicle.slug}` },
      ]} />
      <section className="section-padding">
        <Container>
          <VehicleDetail vehicle={vehicle} related={related} />
        </Container>
      </section>
    </>
  );
}
