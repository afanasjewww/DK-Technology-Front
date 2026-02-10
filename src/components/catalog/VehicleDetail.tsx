'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button, Badge, Card } from '@/components/ui';
import { ScrollReveal, HoverScale } from '@/components/motion';
import { formatPrice } from '@/utils';
import { BRAND_LABELS } from '@/lib/constants';
import type { Vehicle } from '@/types';

interface Props {
  vehicle: Vehicle;
  related: Vehicle[];
}

export function VehicleDetail({ vehicle, related }: Props) {
  const t = useTranslations('catalog');

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Image */}
        <div className="relative h-64 sm:h-96 bg-dk-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
          <svg className="w-24 h-24 text-dk-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>
          </svg>
        </div>

        {/* Info */}
        <div>
          <div className="flex gap-2 mb-4">
            <Badge>{BRAND_LABELS[vehicle.brand]}</Badge>
            <Badge variant={vehicle.isAvailable ? 'green' : 'gray'}>
              {vehicle.isAvailable ? t('in_stock') : t('out_of_stock')}
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-dk-gray-900 mb-2">{vehicle.name}</h1>
          <p className="text-dk-gray-500 mb-6">{vehicle.description}</p>

          <div className="text-3xl font-bold text-dk-red-500 mb-6">{formatPrice(vehicle.price)}</div>

          {vehicle.isRentable && (
            <p className="text-sm text-dk-gray-500 mb-6">
              Аренда: <span className="font-semibold text-dk-gray-700">{formatPrice(vehicle.rentalPrice)}</span> / сутки
            </p>
          )}

          <div className="flex flex-wrap gap-3 mb-8">
            <Button size="lg">{t('order_call')}</Button>
            {vehicle.isRentable && (
              <Link href="/rental">
                <Button size="lg" variant="outline">Арендовать</Button>
              </Link>
            )}
          </div>

          {/* Specs */}
          <div>
            <h2 className="text-xl font-bold text-dk-gray-900 mb-4">{t('specs')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(vehicle.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between p-3 bg-dk-gray-50 rounded-lg">
                  <span className="text-sm text-dk-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                  <span className="text-sm font-semibold text-dk-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-dk-gray-900 mb-6">{t('related')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map(v => (
              <HoverScale key={v.id}>
                <Link href={`/catalog/${v.slug}`}>
                  <Card className="group">
                    <div className="h-40 bg-dk-gray-100 flex items-center justify-center">
                      <svg className="w-12 h-12 text-dk-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>
                      </svg>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold group-hover:text-dk-red-500 transition-colors">{v.name}</h3>
                      <p className="text-lg font-bold text-dk-red-500 mt-1">{formatPrice(v.price)}</p>
                    </div>
                  </Card>
                </Link>
              </HoverScale>
            ))}
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}
