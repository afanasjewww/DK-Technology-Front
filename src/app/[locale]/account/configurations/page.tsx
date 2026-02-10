import { setRequestLocale, getTranslations } from 'next-intl/server';
import { SectionHeading } from '@/components/ui';

export default async function ConfigurationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('account');

  return (
    <div>
      <SectionHeading title={t('configurations')} centered={false} />
      <div className="p-8 bg-dk-gray-50 rounded-2xl text-center text-dk-gray-500">
        Сохранённых конфигураций пока нет. Создайте свою в конструкторе.
      </div>
    </div>
  );
}
