'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { User, Package, Heart, Settings, type LucideIcon } from 'lucide-react';
import { StaggerChildren, StaggerItem } from '@/components/motion';

const sections: { key: string; icon: LucideIcon; href: string }[] = [
  { key: 'profile', icon: User, href: '/account/profile' },
  { key: 'orders', icon: Package, href: '/account/orders' },
  { key: 'favorites', icon: Heart, href: '/account/favorites' },
  { key: 'configurations', icon: Settings, href: '/account/configurations' },
];

export function AccountDashboard() {
  const t = useTranslations('account');

  return (
    <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {sections.map((section) => (
        <StaggerItem key={section.key}>
          <Link
            href={section.href}
            className="block p-6 rounded-2xl bg-dk-gray-50 dark:bg-dk-gray-900 border border-dk-gray-100 dark:border-dk-gray-800 hover:border-dk-yellow-500 hover:shadow-lg transition-all text-center"
          >
            <section.icon className="w-10 h-10 mx-auto mb-4 text-dk-gray-500 dark:text-dk-gray-400" strokeWidth={1.5} />
            <h3 className="font-bold text-dk-gray-900 dark:text-white">{t(section.key)}</h3>
          </Link>
        </StaggerItem>
      ))}
    </StaggerChildren>
  );
}
