import { setRequestLocale, getTranslations } from 'next-intl/server';
import { SectionHeading } from '@/components/ui';

export default async function OrdersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('account');

  return (
    <div>
      <SectionHeading title={t('orders')} centered={false} />
      <div className="p-8 bg-dk-gray-50 rounded-2xl text-center text-dk-gray-500">
        У вас пока нет заказов
      </div>
    </div>
  );
}
