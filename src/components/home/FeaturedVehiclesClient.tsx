'use client';

import { VehicleCard } from '@/components/ui';
import { StaggerChildren, StaggerItem } from '@/components/motion';
import { useRandomImages, useRandomDescriptions } from '@/hooks/useRandomContent';
import type { Vehicle } from '@/types';

interface Props {
  vehicles: Vehicle[];
}

export function FeaturedVehiclesClient({ vehicles }: Props) {
  const items = vehicles.slice(0, 6);
  const randomImages = useRandomImages(items.length);
  const randomDescriptions = useRandomDescriptions(items.length);

  return (
    <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((vehicle, i) => (
        <StaggerItem key={vehicle.id}>
          <VehicleCard
            vehicle={vehicle}
            image={randomImages[i]}
            description={randomDescriptions[i]}
          />
        </StaggerItem>
      ))}
    </StaggerChildren>
  );
}
