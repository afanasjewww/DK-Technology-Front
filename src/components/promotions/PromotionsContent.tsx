'use client';

import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui';
import { StaggerChildren, StaggerItem } from '@/components/motion';
import { getActivePromotions } from '@/lib';

export function PromotionsContent() {
  const t = useTranslations('promotions');
  const promotions = getActivePromotions();

  return (
    <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {promotions.map((promo) => (
        <StaggerItem key={promo.id}>
          <div className="rounded-2xl bg-dk-gray-50 border border-dk-gray-100 hover:border-dk-red-200 hover:shadow-lg transition-all overflow-hidden h-full flex flex-col">
            <div className="h-48 bg-gradient-to-br from-dk-red-500 to-dk-red-700 flex items-center justify-center relative">
              <span className="text-white text-6xl font-bold opacity-20">%</span>
              <Badge variant="red" className="absolute top-4 right-4">{promo.discount}</Badge>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-dk-gray-900 mb-2">{promo.title}</h3>
              <p className="text-sm text-dk-gray-500 mb-4 flex-grow">{promo.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-dk-gray-400">
                  {t('valid_until')} {new Date(promo.endDate).toLocaleDateString('ru-RU')}
                </span>
                <span className="text-sm font-semibold text-dk-red-500 hover:text-dk-red-600 cursor-pointer transition-colors">
                  {t('details')} →
                </span>
              </div>
            </div>
          </div>
        </StaggerItem>
      ))}
    </StaggerChildren>
  );
}
