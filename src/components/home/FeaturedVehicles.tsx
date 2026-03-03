import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Container, SectionHeading, Button } from '@/components/ui';
import { getFeaturedVehicles } from '@/lib';
import { FeaturedVehiclesClient } from './FeaturedVehiclesClient';

export async function FeaturedVehicles() {
  const t = await getTranslations('home.featured');
  const vehicles = getFeaturedVehicles();

  return (
    <section className="section-padding bg-dk-gray-100 dark:bg-dk-gray-950 border-t border-dk-gray-200 dark:border-dk-gray-800 transition-colors duration-300">
      <Container>
        <div className="text-dk-gray-900 dark:text-white">
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </div>
        <FeaturedVehiclesClient vehicles={vehicles} />
        <div className="text-center mt-12">
          <Link href="/catalog">
            <Button variant="outline" className="border-dk-gray-300 dark:border-dk-gray-500 text-dk-gray-900 dark:text-white hover:bg-dk-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-dk-gray-950 px-8 font-bold uppercase tracking-wider transition-colors">{t('view_all')}</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
