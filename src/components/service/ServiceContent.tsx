'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal, StaggerChildren, StaggerItem } from '@/components/motion';
import { Button } from '@/components/ui';
import { services } from '@/lib';

const iconMap: Record<string, string> = {
  diagnostic: '🔍',
  wrench: '🔧',
  engine: '⚙️',
  suspension: '🛞',
  shield: '🛡️',
  parts: '📦',
};

export function ServiceContent() {
  const t = useTranslations('service');

  return (
    <div className="space-y-12">
      <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <StaggerItem key={service.id}>
            <div className="p-6 rounded-2xl bg-dk-gray-50 border border-dk-gray-100 hover:border-dk-red-200 hover:shadow-lg transition-all h-full flex flex-col">
              <div className="text-4xl mb-4">{iconMap[service.icon] || '🔧'}</div>
              <h3 className="text-lg font-bold text-dk-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-dk-gray-500 mb-4 flex-grow">{service.description}</p>
              <div className="text-dk-red-500 font-semibold">{service.price}</div>
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
