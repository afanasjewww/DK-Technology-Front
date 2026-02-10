'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Container, Button } from '@/components/ui';
import { ScrollReveal } from '@/components/motion';

export function PromoBanner() {
  const t = useTranslations('home.promo');

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Red diagonal background */}
      <div className="absolute inset-0 bg-gradient-to-r from-dk-red-700 via-dk-red-500 to-dk-red-600" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(0,0,0,0.1) 30px, rgba(0,0,0,0.1) 32px)',
      }} />

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('title')}
            </h2>
            <p className="text-lg text-white/80 mb-8">
              {t('subtitle')}
            </p>
            <Link href="/promotions">
              <Button size="lg" className="bg-white text-dk-red-500 hover:bg-dk-gray-100 hover:text-dk-red-600">
                {t('cta')}
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
