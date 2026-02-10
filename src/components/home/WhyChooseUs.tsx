'use client';

import { useTranslations } from 'next-intl';
import { Container, SectionHeading } from '@/components/ui';
import { ScrollReveal, CountUp, StaggerChildren, StaggerItem } from '@/components/motion';

const stats = [
  { key: 'years', value: 10 },
  { key: 'vehicles_sold', value: 500 },
  { key: 'clients', value: 2000 },
  { key: 'service_points', value: 3 },
];

const advantages = [
  { key: 'advantage1', icon: '\u{1F3C5}' },
  { key: 'advantage2', icon: '\u{1F4B0}' },
  { key: 'advantage3', icon: '\u{1F527}' },
  { key: 'advantage4', icon: '\u{1F69A}' },
];

export function WhyChooseUs() {
  const t = useTranslations('home.why');

  return (
    <section className="relative section-padding bg-dk-gray-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(255,255,255,0.03) 60px, rgba(255,255,255,0.03) 62px)',
        }} className="absolute inset-0" />
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} light />
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat) => (
              <div key={stat.key} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-dk-red-500 mb-2">
                  <CountUp target={stat.value} suffix="+" />
                </div>
                <div className="text-sm text-dk-gray-400">{t(stat.key)}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Advantages Grid */}
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv) => (
            <StaggerItem key={adv.key}>
              <div className="p-6 rounded-2xl bg-dk-gray-900/50 border border-dk-gray-800 hover:border-dk-red-500/30 transition-colors">
                <div className="text-3xl mb-4">{adv.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {t(`${adv.key}_title`)}
                </h3>
                <p className="text-sm text-dk-gray-400 leading-relaxed">
                  {t(`${adv.key}_desc`)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
