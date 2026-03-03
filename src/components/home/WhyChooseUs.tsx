'use client';

import { useTranslations } from 'next-intl';
import { Award, BadgeDollarSign, Wrench, Truck, type LucideIcon } from 'lucide-react';
import { Container, SectionHeading } from '@/components/ui';
import { ScrollReveal, CountUp, StaggerChildren, StaggerItem } from '@/components/motion';

const stats = [
  { key: 'years', value: 10 },
  { key: 'vehicles_sold', value: 500 },
  { key: 'clients', value: 2000 },
  { key: 'service_points', value: 3 },
];

const advantages: { key: string; icon: LucideIcon }[] = [
  { key: 'advantage1', icon: Award },
  { key: 'advantage2', icon: BadgeDollarSign },
  { key: 'advantage3', icon: Wrench },
  { key: 'advantage4', icon: Truck },
];

export function WhyChooseUs() {
  const t = useTranslations('home.why');

  return (
    <section className="relative section-padding bg-dk-gray-900 dark:bg-dk-gray-950 overflow-hidden border-t border-dk-gray-700 dark:border-dk-gray-800 transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(255,198,0,0.03) 60px, rgba(255,198,0,0.03) 62px)',
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
              <div key={stat.key} className="text-center p-6 bg-dk-gray-800 dark:bg-dk-gray-900 border border-dk-gray-700 dark:border-dk-gray-800 rounded-none shadow-xl transition-colors">
                <div className="text-4xl sm:text-5xl font-black text-dk-yellow-500 mb-2">
                  <CountUp target={stat.value} suffix="+" />
                </div>
                <div className="text-sm font-bold tracking-widest uppercase text-dk-gray-400 transition-colors">{t(stat.key)}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Advantages Grid */}
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv) => (
            <StaggerItem key={adv.key}>
              <div className="p-8 rounded-none bg-dk-gray-800 dark:bg-dk-gray-900 border border-dk-gray-700 dark:border-dk-gray-800 hover:border-dk-yellow-500 transition-colors group h-full flex flex-col">
                <adv.icon className="w-10 h-10 mb-6 text-dk-gray-500 group-hover:text-dk-yellow-500 transition-colors duration-300" strokeWidth={1.5} />
                <h3 className="text-xl font-black text-white mb-3 uppercase tracking-wide group-hover:text-dk-yellow-500 transition-colors">
                  {t(`${adv.key}_title`)}
                </h3>
                <p className="text-sm text-dk-gray-400 leading-relaxed font-medium transition-colors">
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
