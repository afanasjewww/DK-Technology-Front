import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Container, SectionHeading, Button } from '@/components/ui';
import { getFeaturedVehicles } from '@/lib';
import { FeaturedVehiclesClient } from './FeaturedVehiclesClient';

export async function FeaturedVehicles() {
  const t = await getTranslations('home.featured');
  const vehicles = getFeaturedVehicles();

  return (
    <section className="section-padding bg-dk-gray-50">
      <Container>
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        <FeaturedVehiclesClient vehicles={vehicles} />
        <div className="text-center mt-10">
          <Link href="/catalog">
            <Button variant="outline">{t('view_all')}</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
