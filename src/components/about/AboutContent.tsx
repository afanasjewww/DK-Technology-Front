'use client';

import { useTranslations } from 'next-intl';
import { Award, BadgeDollarSign, Wrench, Truck, type LucideIcon } from 'lucide-react';
import { ScrollReveal, StaggerChildren, StaggerItem } from '@/components/motion';

const advantages: { icon: LucideIcon; key: string }[] = [
  { icon: Award, key: 'advantage1' },
  { icon: BadgeDollarSign, key: 'advantage2' },
  { icon: Wrench, key: 'advantage3' },
  { icon: Truck, key: 'advantage4' },
];

export function AboutContent() {
  const t = useTranslations('about');
  const tWhy = useTranslations('home.why');

  return (
    <div className="space-y-16">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-dk-gray-900 dark:text-white mb-4">{t('story_title')}</h3>
          <p className="text-dk-gray-600 dark:text-dk-gray-300 leading-relaxed">{t('story_text')}</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-dk-gray-900 dark:text-white mb-4">{t('mission_title')}</h3>
          <p className="text-dk-gray-600 dark:text-dk-gray-300 leading-relaxed">{t('mission_text')}</p>
        </div>
      </ScrollReveal>

      <div>
        <h3 className="text-2xl font-bold text-dk-gray-900 dark:text-white mb-8 text-center">{t('advantages_title')}</h3>
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map(adv => (
            <StaggerItem key={adv.key}>
              <div className="p-6 rounded-2xl bg-dk-gray-50 dark:bg-dk-gray-900 border border-dk-gray-200 dark:border-dk-gray-800 hover:border-dk-yellow-500 hover:shadow-lg hover:shadow-dk-yellow-500/10 transition-all text-center">
                <adv.icon className="w-10 h-10 mx-auto mb-4 text-dk-gray-500 dark:text-dk-gray-400" strokeWidth={1.5} />
                <h4 className="font-bold text-dk-gray-900 dark:text-white mb-2">{tWhy(`${adv.key}_title`)}</h4>
                <p className="text-sm text-dk-gray-500 dark:text-dk-gray-400">{tWhy(`${adv.key}_desc`)}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </div>
  );
}
