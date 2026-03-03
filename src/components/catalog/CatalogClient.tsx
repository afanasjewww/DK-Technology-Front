'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Button, VehicleCard } from '@/components/ui';
import { StaggerChildren, StaggerItem } from '@/components/motion';
import { cn } from '@/utils';
import { useRandomImages, useRandomDescriptions } from '@/hooks/useRandomContent';
import type { Vehicle, VehicleType, VehicleBrand } from '@/types';

const vehicleTypeKeys: (VehicleType | 'all')[] = ['all', 'atv', 'buggy', 'snowmobile', 'jetski'];
const brandOptions: { value: VehicleBrand | 'all'; label: string }[] = [
  { value: 'all', label: '' },
  { value: 'brp', label: 'BRP' },
  { value: 'polaris', label: 'Polaris' },
];

export function CatalogClient({ vehicles }: { vehicles: Vehicle[] }) {
  const [selectedType, setSelectedType] = useState<VehicleType | 'all'>('all');
  const [selectedBrand, setSelectedBrand] = useState<VehicleBrand | 'all'>('all');
  const t = useTranslations('catalog');
  const tCat = useTranslations('home.categories');
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
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-dk-gray-700 dark:text-dk-gray-300">{t('type')}:</span>
          {vehicleTypeKeys.map(typeKey => (
            <button
              key={typeKey}
              onClick={() => setSelectedType(typeKey)}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                selectedType === typeKey
                  ? 'bg-dk-yellow-500 text-dk-gray-950 font-bold'
                  : 'bg-dk-gray-100 dark:bg-dk-gray-800 text-dk-gray-600 dark:text-dk-gray-300 hover:bg-dk-gray-200 dark:hover:bg-dk-gray-700'
              )}
            >
              {typeKey === 'all' ? t('all_types') : tCat(typeKey)}
            </button>
          ))}
        </div>
        <div className="w-px bg-dk-gray-200 dark:bg-dk-gray-700 hidden sm:block" />
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-dk-gray-700 dark:text-dk-gray-300">{t('brand')}:</span>
          {brandOptions.map(brand => (
            <button
              key={brand.value}
              onClick={() => setSelectedBrand(brand.value)}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                selectedBrand === brand.value
                  ? 'bg-dk-yellow-500 text-dk-gray-950 font-bold'
                  : 'bg-dk-gray-100 dark:bg-dk-gray-800 text-dk-gray-600 dark:text-dk-gray-300 hover:bg-dk-gray-200 dark:hover:bg-dk-gray-700'
              )}
            >
              {brand.value === 'all' ? t('all_brands') : brand.label}
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
        <StaggerChildren key={`${selectedType}-${selectedBrand}`} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(vehicle => {
            const idx = vehicles.findIndex(v => v.id === vehicle.id);
            return (
            <StaggerItem key={vehicle.id}>
              <VehicleCard
                vehicle={vehicle}
                image={randomImages[idx]}
                description={randomDescriptions[idx]}
              />
            </StaggerItem>
          );
          })}
        </StaggerChildren>
      )}
    </div>
  );
}
