export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: string;
}

export const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Диагностика',
    description: 'Полная компьютерная диагностика техники BRP и Polaris. Выявление неисправностей и рекомендации по ремонту.',
    icon: 'diagnostic',
    price: 'от 3 000 ₽',
  },
  {
    id: '2',
    title: 'Техническое обслуживание',
    description: 'Плановое ТО согласно регламенту производителя. Замена масла, фильтров, проверка всех систем.',
    icon: 'wrench',
    price: 'от 5 000 ₽',
  },
  {
    id: '3',
    title: 'Ремонт двигателя',
    description: 'Капитальный и текущий ремонт двигателей Rotax и ProStar. Оригинальные запчасти.',
    icon: 'engine',
    price: 'от 15 000 ₽',
  },
  {
    id: '4',
    title: 'Ходовая часть',
    description: 'Ремонт и замена подвески, трансмиссии, тормозной системы. Регулировка и настройка.',
    icon: 'suspension',
    price: 'от 8 000 ₽',
  },
  {
    id: '5',
    title: 'Гарантийное обслуживание',
    description: 'Авторизованный гарантийный сервис BRP и Polaris. Все работы по гарантии бесплатно.',
    icon: 'shield',
    price: 'Бесплатно',
  },
  {
    id: '6',
    title: 'Запчасти и аксессуары',
    description: 'Оригинальные запчасти BRP и Polaris под заказ. Доставка по всей России.',
    icon: 'parts',
    price: 'По запросу',
  },
];
