import type { VehicleType } from './vehicle';

export interface RentalPricing {
  vehicleType: VehicleType;
  label: string;
  hourly: number;
  daily: number;
  weekly: number;
  deposit: number;
}

export interface RentalBooking {
  name: string;
  phone: string;
  email: string;
  vehicleType: VehicleType;
  startDate: string;
  endDate: string;
  message?: string;
}
