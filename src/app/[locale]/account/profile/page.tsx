import { setRequestLocale, getTranslations } from 'next-intl/server';
import { SectionHeading } from '@/components/ui';

export default async function ProfilePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('account');

  return (
    <div>
      <SectionHeading title={t('profile')} centered={false} />
      <div className="max-w-2xl p-8 bg-dk-gray-50 rounded-2xl text-center text-dk-gray-500">
        Раздел профиля в разработке
      </div>
    </div>
  );
}
