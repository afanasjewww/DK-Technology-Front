import type { NavItem, ContactInfo } from '@/types';

export const SITE_NAME = 'DK Techno';
export const SITE_DESCRIPTION = 'DK Techno - продажа и аренда техники BRP и Polaris в России. Квадроциклы, багги, снегоходы, водные мотоциклы.';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brp-russia.ru';
export const COMPANY_LEGAL_NAME = 'ДК ТЕХНОЛОДЖИС, ООО';

export const CONTACT_INFO: ContactInfo = {
  phone: '+7 (921) 758-69-68',
  email: 'office@dk-tehno.ru',
  address: 'г. Санкт-Петербург, 3-ий Верхний переулок, д. 5М',
  workingHours: 'Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00',
  whatsapp: '+79217586968',
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
