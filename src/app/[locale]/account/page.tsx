import { setRequestLocale, getTranslations } from 'next-intl/server';
import { SectionHeading } from '@/components/ui';
import { AccountDashboard } from '@/components/account/AccountDashboard';

export default async function AccountPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('account');

  return (
    <>
      <SectionHeading title={t('title')} subtitle={t('dashboard')} />
      <AccountDashboard />
    </>
  );
}
