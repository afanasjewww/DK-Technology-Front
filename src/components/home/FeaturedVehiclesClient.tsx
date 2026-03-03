'use client';

import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Card, Badge } from '@/components/ui';
import { StaggerChildren, StaggerItem, HoverScale } from '@/components/motion';
import { formatPrice } from '@/utils';
import { BRAND_LABELS } from '@/lib/constants';
import { useRandomImages, useRandomDescriptions } from '@/hooks/useRandomContent';
import type { Vehicle } from '@/types';

interface Props {
  vehicles: Vehicle[];
}

export function FeaturedVehiclesClient({ vehicles }: Props) {
  const t = useTranslations('catalog');
  const items = vehicles.slice(0, 6);
  const randomImages = useRandomImages(items.length);
  const randomDescriptions = useRandomDescriptions(items.length);

  return (
    <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((vehicle, i) => (
        <StaggerItem key={vehicle.id}>
          <HoverScale>
            <Link href={`/catalog/${vehicle.slug}`}>
              <Card className="overflow-hidden group">
                <div className="relative h-48 sm:h-56 bg-dk-gray-100 dark:bg-dk-gray-800 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dk-gray-900/40 to-transparent z-10" />
                  {randomImages[i] ? (
                    <Image
                      src={randomImages[i]}
                      alt={vehicle.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-dk-gray-200" />
                  )}
                  <div className="absolute top-3 left-3 z-20 flex gap-2">
                    <Badge>{BRAND_LABELS[vehicle.brand]}</Badge>
                    {vehicle.isRentable && (
                      <Badge variant="green">{t('rent_available')}</Badge>
                    )}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-dk-gray-900 dark:text-white mb-1 group-hover:text-dk-yellow-500 transition-colors">
                    {vehicle.name}
                  </h3>
                  <p className="text-sm text-dk-gray-500 dark:text-dk-gray-400 mb-3 line-clamp-2">
                    {randomDescriptions[i] || vehicle.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-dk-yellow-500">
                      {formatPrice(vehicle.price)}
                    </span>
                    <span className="text-sm text-dk-gray-400">
                      {vehicle.year}
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          </HoverScale>
        </StaggerItem>
      ))}
    </StaggerChildren>
  );
}
