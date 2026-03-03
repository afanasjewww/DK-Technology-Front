'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container, SectionHeading } from '@/components/ui';
import { ScrollReveal } from '@/components/motion';

export function PartnersSection() {
  const t = useTranslations('home.partners');

  return (
    <section className="section-padding bg-dk-gray-100 dark:bg-dk-gray-950 transition-colors duration-300">
      <Container>
        <ScrollReveal>
          <div className="text-dk-gray-900 dark:text-white transition-colors">
            <SectionHeading title={t('title')} subtitle={t('subtitle')} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-20">
            <div className="group">
              <Image
                src="/svg/brands/brp-logo.svg"
                alt="BRP"
                width={160}
                height={60}
                className="h-12 sm:h-16 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300 dark:invert dark:brightness-100"
              />
            </div>
            <div className="group">
              <Image
                src="/svg/brands/polaris-logo.svg"
                alt="Polaris"
                width={160}
                height={60}
                className="h-12 sm:h-16 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300 dark:invert dark:brightness-100"
              />
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
