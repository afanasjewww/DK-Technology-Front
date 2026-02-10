import type { RentalPricing } from '@/types';

export const rentalPricing: RentalPricing[] = [
  {
    vehicleType: 'atv',
    label: 'Квадроциклы',
    hourly: 2000,
    daily: 8000,
    weekly: 45000,
    deposit: 30000,
  },
  {
    vehicleType: 'buggy',
    label: 'Багги / UTV',
    hourly: 3500,
    daily: 15000,
    weekly: 80000,
    deposit: 50000,
  },
  {
    vehicleType: 'snowmobile',
    label: 'Снегоходы',
    hourly: 2500,
    daily: 10000,
    weekly: 55000,
    deposit: 35000,
  },
  {
    vehicleType: 'jetski',
    label: 'Водные мотоциклы',
    hourly: 3000,
    daily: 12000,
    weekly: 65000,
    deposit: 40000,
  },
];

export const rentalConditions = [
  'Минимальный возраст арендатора - 21 год',
  'Наличие водительского удостоверения категории A или B',
  'Залог вносится перед получением техники',
  'Полная страховка включена в стоимость аренды',
  'Доставка техники по Московской области - от 3 000 ₽',
  'Инструктаж по управлению - бесплатно',
  'Отмена бронирования за 24 часа - бесплатно',
];
