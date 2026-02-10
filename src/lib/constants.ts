import type { NavItem, ContactInfo } from '@/types';

export const SITE_NAME = 'DK Tech';
export const SITE_DESCRIPTION = 'DK Tech - продажа и аренда техники BRP и Polaris в России. Квадроциклы, багги, снегоходы, водные мотоциклы.';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dk-tech.ru';

export const CONTACT_INFO: ContactInfo = {
  phone: '+7 (800) 555-35-35',
  email: 'info@dk-tech.ru',
  address: 'г. Москва, ул. Примерная, д. 1',
  workingHours: 'Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00',
  whatsapp: '+78005553535',
  telegram: '@dktech',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'nav.home', href: '/' },
  { label: 'nav.catalog', href: '/catalog' },
  { label: 'nav.rental', href: '/rental' },
  { label: 'nav.service', href: '/service' },
  { label: 'nav.about', href: '/about' },
  { label: 'nav.promotions', href: '/promotions' },
  { label: 'nav.configurator', href: '/configurator' },
  { label: 'nav.contacts', href: '/contacts' },
];

export const VEHICLE_TYPE_LABELS: Record<string, { ru: string; en: string }> = {
  atv: { ru: 'Квадроциклы', en: 'ATVs' },
  buggy: { ru: 'Багги', en: 'Buggies' },
  snowmobile: { ru: 'Снегоходы', en: 'Snowmobiles' },
  jetski: { ru: 'Водные мотоциклы', en: 'Jet Skis' },
};

export const BRAND_LABELS: Record<string, string> = {
  brp: 'BRP',
  polaris: 'Polaris',
};
