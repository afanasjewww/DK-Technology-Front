'use client';

import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Card, Badge } from '@/components/ui';
import { StaggerChildren, StaggerItem, HoverScale } from '@/components/motion';
import { formatPrice } from '@/utils';
import { BRAND_LABELS } from '@/lib/constants';
import type { Vehicle } from '@/types';

interface Props {
  vehicles: Vehicle[];
}

export function FeaturedVehiclesClient({ vehicles }: Props) {
  const t = useTranslations('catalog');

  return (
    <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {vehicles.slice(0, 6).map((vehicle) => (
        <StaggerItem key={vehicle.id}>
          <HoverScale>
            <Link href={`/catalog/${vehicle.slug}`}>
              <Card className="overflow-hidden group">
                <div className="relative h-48 sm:h-56 bg-dk-gray-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dk-gray-900/40 to-transparent z-10" />
                  <div className="w-full h-full bg-dk-gray-200 flex items-center justify-center">
                    <svg className="w-16 h-16 text-dk-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="m21 15-5-5L5 21" />
                    </svg>
                  </div>
                  <div className="absolute top-3 left-3 z-20 flex gap-2">
                    <Badge>{BRAND_LABELS[vehicle.brand]}</Badge>
                    {vehicle.isRentable && (
                      <Badge variant="green">{t('rent_available')}</Badge>
                    )}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-dk-gray-900 mb-1 group-hover:text-dk-red-500 transition-colors">
                    {vehicle.name}
                  </h3>
                  <p className="text-sm text-dk-gray-500 mb-3 line-clamp-2">
                    {vehicle.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-dk-red-500">
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
