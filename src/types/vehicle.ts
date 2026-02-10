export type VehicleType = 'atv' | 'buggy' | 'snowmobile' | 'jetski';
export type VehicleBrand = 'brp' | 'polaris';

export interface VehicleSpec {
  engine: string;
  power: string;
  weight: string;
  maxSpeed: string;
  fuelCapacity: string;
}

export interface Vehicle {
  id: string;
  slug: string;
  name: string;
  type: VehicleType;
  brand: VehicleBrand;
  year: number;
  price: number;
  rentalPrice: number;
  images: string[];
  description: string;
  specs: VehicleSpec;
  isAvailable: boolean;
  isRentable: boolean;
  isFeatured: boolean;
}
