'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Container, Button } from '@/components/ui';

export function HeroSection() {
  const t = useTranslations('home.hero');

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-dk-gray-950">
      {/* Background gradient + pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dk-gray-950 via-dk-gray-900 to-dk-red-950/30" />
        {/* Diagonal racing stripes */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, white 40px, white 42px)',
        }} />
        {/* Animated gradient orb */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-dk-red-500/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-dk-red-600/5 rounded-full blur-[100px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-dk-red-500/10 border border-dk-red-500/20 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-dk-red-500 rounded-full animate-pulse" />
            <span className="text-sm text-dk-red-400 font-medium">BRP & Polaris</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            {t('title').split(' ').map((word, i) => (
              <span key={i}>
                {i === 1 ? (
                  <span className="text-gradient-red">{word}</span>
                ) : (
                  word
                )}{' '}
              </span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl text-dk-gray-300 mb-8 max-w-xl"
          >
            {t('subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/catalog">
              <Button size="lg">{t('cta_catalog')}</Button>
            </Link>
            <Link href="/rental">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dk-gray-900">
                {t('cta_rental')}
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl"
        >
          {[
            { value: '10+', label: 'лет опыта' },
            { value: '500+', label: 'единиц продано' },
            { value: '2000+', label: 'клиентов' },
            { value: '3', label: 'сервис-центра' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-dk-red-500">{stat.value}</div>
              <div className="text-xs sm:text-sm text-dk-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-dk-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
