'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal, StaggerChildren, StaggerItem } from '@/components/motion';

const advantages = [
  { icon: '🏅', key: 'advantage1' },
  { icon: '💰', key: 'advantage2' },
  { icon: '🔧', key: 'advantage3' },
  { icon: '🚚', key: 'advantage4' },
];

export function AboutContent() {
  const t = useTranslations('about');
  const tWhy = useTranslations('home.why');

  return (
    <div className="space-y-16">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-dk-gray-900 mb-4">{t('story_title')}</h3>
          <p className="text-dk-gray-600 leading-relaxed">{t('story_text')}</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-dk-gray-900 mb-4">{t('mission_title')}</h3>
          <p className="text-dk-gray-600 leading-relaxed">{t('mission_text')}</p>
        </div>
      </ScrollReveal>

      <div>
        <h3 className="text-2xl font-bold text-dk-gray-900 mb-8 text-center">{t('advantages_title')}</h3>
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map(adv => (
            <StaggerItem key={adv.key}>
              <div className="p-6 rounded-2xl bg-dk-gray-50 border border-dk-gray-100 hover:border-dk-red-200 hover:shadow-lg transition-all text-center">
                <div className="text-4xl mb-4">{adv.icon}</div>
                <h4 className="font-bold text-dk-gray-900 mb-2">{tWhy(`${adv.key}_title`)}</h4>
                <p className="text-sm text-dk-gray-500">{tWhy(`${adv.key}_desc`)}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </div>
  );
}
