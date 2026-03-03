'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Container, Button } from '@/components/ui';
import { ScrollReveal } from '@/components/motion';

export function PromoBanner() {
  const t = useTranslations('home.promo');

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-dk-yellow-500 clip-diagonal-left -mt-8 z-20">
      {/* High impact yellow background with geometric pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-dk-yellow-600 via-dk-yellow-500 to-dk-yellow-400" />
      <div className="absolute -inset-25 animate-[stripe-scroll_12s_linear_infinite]" style={{
        backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(0,0,0,0.06) 20px, rgba(0,0,0,0.06) 28px)',
      }} />

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-dk-gray-950 mb-6 uppercase tracking-tight">
              {t('title')}
            </h2>
            <p className="text-xl font-bold text-dk-gray-900 mb-10 tracking-wide">
              {t('subtitle')}
            </p>
            <Link href="/promotions">
              <Button size="lg" className="bg-dk-gray-950 text-dk-yellow-500 hover:bg-dk-gray-900 border-2 border-transparent hover:border-dk-gray-950 px-10 py-6 text-lg font-black uppercase tracking-widest shadow-2xl">
                {t('cta')}
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
