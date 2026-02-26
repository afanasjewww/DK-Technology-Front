'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Container, SectionHeading } from '@/components/ui';
import { ScrollReveal, StaggerChildren, StaggerItem } from '@/components/motion';
import { cn } from '@/utils';

const categories = [
  { key: 'atv', image: '/images/vehicles/ATM.png', href: '/catalog?type=atv' },
  { key: 'buggy', image: '/images/vehicles/Buggy.png', href: '/catalog?type=buggy' },
  { key: 'snowmobile', image: '/images/vehicles/snowmobile.png', href: '/catalog?type=snowmobile' },
  { key: 'jetski', image: '/images/vehicles/Jetski.png', href: '/catalog?type=jetski' },
];

export function CategoryShowcase() {
  const t = useTranslations('home.categories');

  return (
    <section className="section-padding bg-dk-gray-50">
      <Container>
        <ScrollReveal>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <StaggerItem key={cat.key}>
              <Link href={cat.href}>
                <div className={cn(
                  'group relative p-6 sm:p-8 rounded-2xl border-2 border-dk-gray-100',
                  'bg-dk-gray-50 hover:bg-dk-red-500 hover:border-dk-red-500',
                  'transition-all duration-300 text-center cursor-pointer',
                  'hover:-translate-y-2 hover:shadow-xl hover:shadow-dk-red-500/20'
                )}>
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4">
                    <Image
                      src={cat.image}
                      alt={t(cat.key)}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 96px, 128px"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-dk-gray-900 group-hover:text-white transition-colors mb-2">
                    {t(cat.key)}
                  </h3>
                  <p className="text-sm text-dk-gray-500 group-hover:text-white/80 transition-colors">
                    {t(`${cat.key}_desc`)}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold text-white">&rarr;</span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
