'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { StaggerChildren, StaggerItem } from '@/components/motion';

const sections = [
  { key: 'profile', icon: '👤', href: '/account/profile' },
  { key: 'orders', icon: '📦', href: '/account/orders' },
  { key: 'favorites', icon: '❤️', href: '/account/favorites' },
  { key: 'configurations', icon: '⚙️', href: '/account/configurations' },
];

export function AccountDashboard() {
  const t = useTranslations('account');

  return (
    <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {sections.map((section) => (
        <StaggerItem key={section.key}>
          <Link
            href={section.href}
            className="block p-6 rounded-2xl bg-dk-gray-50 border border-dk-gray-100 hover:border-dk-red-200 hover:shadow-lg transition-all text-center"
          >
            <div className="text-4xl mb-4">{section.icon}</div>
            <h3 className="font-bold text-dk-gray-900">{t(section.key)}</h3>
          </Link>
        </StaggerItem>
      ))}
    </StaggerChildren>
  );
}
