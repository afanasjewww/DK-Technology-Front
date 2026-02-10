import type { Promotion } from '@/types';

export const promotions: Promotion[] = [
  {
    id: '1',
    slug: 'spring-sale-2024',
    title: 'Весенняя распродажа',
    description: 'Скидки до 15% на квадроциклы Can-Am Outlander. Успейте купить технику мечты по выгодной цене!',
    image: '/images/vehicles/outlander-700.webp',
    discount: 'до 15%',
    startDate: '2024-03-01',
    endDate: '2024-05-31',
    isActive: true,
    vehicleIds: ['1', '9'],
  },
  {
    id: '2',
    slug: 'rental-weekend',
    title: 'Выходные на технике',
    description: 'Аренда любого квадроцикла или багги на выходные со скидкой 20%. Проведите время на природе!',
    image: '/images/vehicles/maverick-x3.webp',
    discount: '20% на аренду',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    isActive: true,
  },
  {
    id: '3',
    slug: 'trade-in',
    title: 'Trade-in: Обмен старой техники',
    description: 'Сдайте вашу старую технику и получите скидку до 200 000 ₽ на покупку новой модели BRP или Polaris.',
    image: '/images/vehicles/rzr-pro-xp.webp',
    discount: 'до 200 000 ₽',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    isActive: true,
  },
  {
    id: '4',
    slug: 'winter-snowmobiles',
    title: 'Зимний сезон снегоходов',
    description: 'Специальные цены на снегоходы Ski-Doo и Polaris. Бесплатная доставка по Московской области.',
    image: '/images/vehicles/summit-x-850.webp',
    discount: 'Бесплатная доставка',
    startDate: '2024-10-01',
    endDate: '2025-03-31',
    isActive: true,
    vehicleIds: ['5', '6', '11'],
  },
];

export function getActivePromotions(): Promotion[] {
  return promotions.filter(p => p.isActive);
}
