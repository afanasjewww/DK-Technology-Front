'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Container, SectionHeading } from '@/components/ui';
import { ScrollReveal, StaggerChildren, StaggerItem } from '@/components/motion';
import { cn } from '@/utils';

const categories = [
  { key: 'atv', image: '/images/vehicles/ATM.png', bg: '/images/vehicles/pictures/quad_atv_env_1772494991316.png', href: '/catalog?type=atv' },
  { key: 'buggy', image: '/images/vehicles/Buggy.png', bg: '/images/vehicles/pictures/offroad_can_am_1772492816969.png', href: '/catalog?type=buggy' },
  { key: 'snowmobile', image: '/images/vehicles/snowmobile.png', bg: '/images/vehicles/pictures/snowmobile_polaris_1772492831724.png', href: '/catalog?type=snowmobile' },
  { key: 'jetski', image: '/images/vehicles/Jetski.png', bg: '/images/vehicles/pictures/watercraft_seadoo_env_1772494975130.png', href: '/catalog?type=jetski' },
];

export function CategoryShowcase() {
  const t = useTranslations('home.categories');

  return (
    <section className="section-padding bg-dk-gray-900 dark:bg-dk-gray-950 -mt-16 pt-32 pb-24 relative z-0 transition-colors duration-300">
      <Container>
        <ScrollReveal>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} light />
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12">
          {categories.map((cat) => (
            <StaggerItem key={cat.key}>
              <Link href={cat.href}>
                <div className={cn(
                  'group relative aspect-3/4 overflow-hidden rounded-none',
                  'border border-dk-gray-700 dark:border-dk-gray-800',
                  'transition-all duration-500 cursor-pointer',
                  'hover:-translate-y-2 hover:shadow-2xl hover:shadow-dk-yellow-500/20 hover:border-dk-yellow-500'
                )}>
                  {/* Background action photo */}
                  <Image
                    src={cat.bg}
                    alt={t(cat.key)}
                    fill
                    className="object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-50 group-hover:scale-110 transition-all duration-700"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-dk-gray-950 via-dk-gray-950/40 to-transparent" />

                  {/* Yellow accent line on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-dk-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

                  {/* Vehicle icon */}
                  <div className="absolute top-1 left-1 sm:top-1 sm:left-1 w-16 h-16 sm:w-20 sm:h-20 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    <Image
                      src={cat.image}
                      alt=""
                      fill
                      className="object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                      sizes="80px"
                    />
                  </div>

                  {/* Text content at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-1 uppercase tracking-wide group-hover:text-dk-yellow-500 transition-colors duration-300">
                      {t(cat.key)}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-dk-gray-300 group-hover:text-white/90 transition-colors duration-300">
                      {t(`${cat.key}_desc`)}
                    </p>
                    <div className="mt-3 flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-dk-yellow-500 text-sm font-bold uppercase tracking-wider">{t('explore')}</span>
                      <span className="text-dk-yellow-500 font-bold">&rarr;</span>
                    </div>
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
