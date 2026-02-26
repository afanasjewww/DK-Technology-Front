'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui';
import { StaggerChildren, StaggerItem } from '@/components/motion';
import { getActivePromotions } from '@/lib';
import { useRandomImages } from '@/hooks/useRandomContent';

export function PromotionsContent() {
  const t = useTranslations('promotions');
  const promotions = getActivePromotions();
  const randomImages = useRandomImages(promotions.length);

  return (
    <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {promotions.map((promo, i) => (
        <StaggerItem key={promo.id}>
          <div className="rounded-2xl bg-dk-gray-50 border border-dk-gray-100 hover:border-dk-red-200 hover:shadow-lg transition-all overflow-hidden h-full flex flex-col">
            <div className="relative h-48 overflow-hidden">
              {randomImages[i] ? (
                <Image
                  src={randomImages[i]}
                  alt={promo.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-dk-red-500 to-dk-red-700" />
              )}
              <div className="absolute inset-0 bg-black/30" />
              <Badge variant="red" className="absolute top-4 right-4 z-10">{promo.discount}</Badge>
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
