'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Card, Badge, Button } from '@/components/ui';
import { StaggerChildren, StaggerItem, HoverScale } from '@/components/motion';
import { formatPrice, cn } from '@/utils';
import { BRAND_LABELS } from '@/lib/constants';
import { useRandomImages, useRandomDescriptions } from '@/hooks/useRandomContent';
import type { Vehicle, VehicleType, VehicleBrand } from '@/types';

const vehicleTypes: { value: VehicleType | 'all'; label: string }[] = [
  { value: 'all', label: 'Все' },
  { value: 'atv', label: 'Квадроциклы' },
  { value: 'buggy', label: 'Багги' },
  { value: 'snowmobile', label: 'Снегоходы' },
  { value: 'jetski', label: 'Водные мотоциклы' },
];

const brands: { value: VehicleBrand | 'all'; label: string }[] = [
  { value: 'all', label: 'Все' },
  { value: 'brp', label: 'BRP' },
  { value: 'polaris', label: 'Polaris' },
];

export function CatalogClient({ vehicles }: { vehicles: Vehicle[] }) {
  const [selectedType, setSelectedType] = useState<VehicleType | 'all'>('all');
  const [selectedBrand, setSelectedBrand] = useState<VehicleBrand | 'all'>('all');
  const t = useTranslations('catalog');
  const randomImages = useRandomImages(vehicles.length);
  const randomDescriptions = useRandomDescriptions(vehicles.length);

  const filtered = useMemo(() => {
    return vehicles.filter(v => {
      if (selectedType !== 'all' && v.type !== selectedType) return false;
      if (selectedBrand !== 'all' && v.brand !== selectedBrand) return false;
      return true;
    });
  }, [vehicles, selectedType, selectedBrand]);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <div className="flex flex-wrap gap-2">
          {vehicleTypes.map(type => (
            <button
              key={type.value}
              onClick={() => setSelectedType(type.value)}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                selectedType === type.value
                  ? 'bg-dk-red-500 text-white'
                  : 'bg-dk-gray-100 text-dk-gray-600 hover:bg-dk-gray-200'
              )}
            >
              {type.label}
            </button>
          ))}
        </div>
        <div className="w-px bg-dk-gray-200 hidden sm:block" />
        <div className="flex flex-wrap gap-2">
          {brands.map(brand => (
            <button
              key={brand.value}
              onClick={() => setSelectedBrand(brand.value)}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                selectedBrand === brand.value
                  ? 'bg-dk-red-500 text-white'
                  : 'bg-dk-gray-100 text-dk-gray-600 hover:bg-dk-gray-200'
              )}
            >
              {brand.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-dk-gray-500 text-lg">{t('no_results')}</p>
          <Button variant="outline" className="mt-4" onClick={() => { setSelectedType('all'); setSelectedBrand('all'); }}>
            {t('reset')}
          </Button>
        </div>
      ) : (
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(vehicle => {
            const idx = vehicles.findIndex(v => v.id === vehicle.id);
            return (
            <StaggerItem key={vehicle.id}>
              <HoverScale>
                <Link href={`/catalog/${vehicle.slug}`}>
                  <Card className="group">
                    <div className="relative h-48 bg-dk-gray-100 overflow-hidden">
                      {randomImages[idx] ? (
                        <Image
                          src={randomImages[idx]}
                          alt={vehicle.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-dk-gray-200" />
                      )}
                      <div className="absolute top-3 left-3 flex gap-2 z-10">
                        <Badge>{BRAND_LABELS[vehicle.brand]}</Badge>
                        {vehicle.isRentable && <Badge variant="green">Аренда</Badge>}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-dk-gray-900 group-hover:text-dk-red-500 transition-colors mb-1">{vehicle.name}</h3>
                      <p className="text-sm text-dk-gray-500 line-clamp-2 mb-3">{randomDescriptions[idx] || vehicle.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-dk-red-500">{formatPrice(vehicle.price)}</span>
                        <span className="text-sm text-dk-gray-400">{vehicle.year}</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </HoverScale>
            </StaggerItem>
          );
          })}
        </StaggerChildren>
      )}
    </div>
  );
}
