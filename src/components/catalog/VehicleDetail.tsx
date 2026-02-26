'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button, Badge, Card } from '@/components/ui';
import { ScrollReveal, HoverScale } from '@/components/motion';
import { formatPrice } from '@/utils';
import { BRAND_LABELS } from '@/lib/constants';
import { useRandomImages, useRandomDescriptions } from '@/hooks/useRandomContent';
import type { Vehicle } from '@/types';

interface Props {
  vehicle: Vehicle;
  related: Vehicle[];
}

export function VehicleDetail({ vehicle, related }: Props) {
  const t = useTranslations('catalog');
  const randomImages = useRandomImages(1 + related.length);
  const randomDescriptions = useRandomDescriptions(1);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Image */}
        <div className="relative h-64 sm:h-96 bg-dk-gray-100 rounded-2xl overflow-hidden">
          {randomImages[0] ? (
            <Image
              src={randomImages[0]}
              alt={vehicle.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          ) : (
            <div className="w-full h-full bg-dk-gray-200" />
          )}
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
          <p className="text-dk-gray-500 mb-6">{randomDescriptions[0] || vehicle.description}</p>

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
            {related.map((v, i) => (
              <HoverScale key={v.id}>
                <Link href={`/catalog/${v.slug}`}>
                  <Card className="group">
                    <div className="relative h-40 bg-dk-gray-100 overflow-hidden">
                      {randomImages[i + 1] ? (
                        <Image
                          src={randomImages[i + 1]}
                          alt={v.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-dk-gray-200" />
                      )}
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
