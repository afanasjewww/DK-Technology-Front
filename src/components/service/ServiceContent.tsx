'use client';

import { useTranslations } from 'next-intl';
import { Search, Wrench, Cog, CircleDot, ShieldCheck, Package, type LucideIcon } from 'lucide-react';
import { ScrollReveal, StaggerChildren, StaggerItem } from '@/components/motion';
import { Button } from '@/components/ui';

const serviceItems: { key: string; icon: LucideIcon }[] = [
  { key: 's1', icon: Search },
  { key: 's2', icon: Wrench },
  { key: 's3', icon: Cog },
  { key: 's4', icon: CircleDot },
  { key: 's5', icon: ShieldCheck },
  { key: 's6', icon: Package },
];

export function ServiceContent() {
  const t = useTranslations('service');

  return (
    <div className="space-y-12">
      <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceItems.map((item) => (
          <StaggerItem key={item.key}>
            <div className="p-6 rounded-2xl bg-dk-gray-50 dark:bg-dk-gray-900 border border-dk-gray-200 dark:border-dk-gray-800 hover:border-dk-yellow-500 hover:shadow-lg hover:shadow-dk-yellow-500/10 transition-all h-full flex flex-col">
              <item.icon className="w-10 h-10 mb-4 text-dk-gray-500 dark:text-dk-gray-400" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-dk-gray-900 dark:text-white mb-2">{t(`${item.key}_title`)}</h3>
              <p className="text-sm text-dk-gray-500 dark:text-dk-gray-400 mb-4 flex-grow">{t(`${item.key}_desc`)}</p>
              <div className="text-dk-yellow-500 font-semibold">{t(`${item.key}_price`)}</div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <ScrollReveal>
        <div className="text-center">
          <a href="tel:+78005553535">
            <Button size="lg">{t('cta')}</Button>
          </a>
        </div>
      </ScrollReveal>
    </div>
  );
}
