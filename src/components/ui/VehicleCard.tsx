'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Card } from './Card';
import { Badge } from './Badge';
import { formatPrice } from '@/utils';
import { BRAND_LABELS } from '@/lib/constants';
import { HoverScale } from '@/components/motion';
import type { Vehicle } from '@/types';

interface VehicleCardProps {
  vehicle: Vehicle;
  image?: string;
  description?: string;
  compact?: boolean;
}

export function VehicleCard({ vehicle, image, description, compact = false }: VehicleCardProps) {
  const t = useTranslations('catalog');

  if (compact) {
    return (
      <HoverScale>
        <Link href={`/catalog/${vehicle.slug}`}>
          <Card className="group">
            <div className="relative h-40 bg-dk-gray-100 dark:bg-dk-gray-800 overflow-hidden">
              {image ? (
                <Image
                  src={image}
                  alt={vehicle.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              ) : (
                <div className="w-full h-full bg-dk-gray-200" />
              )}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-dk-gray-900 dark:text-white group-hover:text-dk-yellow-500 transition-colors">
                {vehicle.name}
              </h3>
              <p className="text-lg font-bold text-dk-yellow-500 mt-1">{formatPrice(vehicle.price)}</p>
            </div>
          </Card>
        </Link>
      </HoverScale>
    );
  }

  return (
    <HoverScale>
      <Link href={`/catalog/${vehicle.slug}`}>
        <Card className="overflow-hidden group">
          <div className="relative h-48 sm:h-56 bg-dk-gray-100 dark:bg-dk-gray-800 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-dk-gray-900/40 to-transparent z-10" />
            {image ? (
              <Image
                src={image}
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
              {description || vehicle.description}
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
  );
}
