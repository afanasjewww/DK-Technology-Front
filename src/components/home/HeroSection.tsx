'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Container, Button } from '@/components/ui';

const heroImages = [
  '/images/vehicles/background/ATV.png',
  '/images/vehicles/background/buggy.png',
  '/images/vehicles/background/snowmobile.png',
  '/images/vehicles/background/jet-ski.png',
];

const SLIDE_INTERVAL = 7000;

export function HeroSection() {
  const t = useTranslations('home.hero');
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white dark:bg-dk-gray-950 clip-diagonal-right pb-32 transition-colors duration-300">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentIndex]}
              alt="DK Technology"
              fill
              className="object-cover grayscale-industrial opacity-60 -scale-x-100"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 dark:from-dk-gray-950 dark:via-dk-gray-950/80 to-transparent transition-colors duration-300 z-10" />
      </div>

      <Container className="relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-dk-yellow-500/10 border border-dk-yellow-500/20 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-dk-yellow-500 rounded-full animate-pulse-yellow" />
            <span className="text-sm text-dk-yellow-400 font-bold uppercase tracking-wider">BRP & Polaris Dealer</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-dk-gray-900 dark:text-white leading-[1.1] mb-6 uppercase tracking-tighter transition-colors"
          >
            {t('title').split(' ').map((word, i) => (
              <span key={i}>
                {i === 1 ? (
                  <span className="text-gradient-yellow">{word}</span>
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
            className="text-lg sm:text-xl text-dk-gray-600 dark:text-dk-gray-300 mb-8 max-w-xl font-medium transition-colors"
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
              <Button size="lg" className="bg-dk-yellow-500 text-dk-gray-950 hover:bg-dk-yellow-400 font-bold uppercase tracking-wide">
                {t('cta_catalog')}
              </Button>
            </Link>
            <Link href="/rental">
              <Button size="lg" variant="outline" className="border-dk-gray-300 dark:border-dk-gray-500 text-dk-gray-900 dark:text-white hover:bg-dk-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-dk-gray-950 font-bold uppercase tracking-wide transition-colors">
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
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl border-t border-dk-gray-800 pt-8"
        >
          {[
            { value: '10+', label: t('stat_years') },
            { value: '500+', label: t('stat_sold') },
            { value: '2000+', label: t('stat_clients') },
            { value: '3', label: t('stat_centers') },
          ].map((stat, i) => (
            <div key={i} className="text-left">
              <div className="text-3xl sm:text-4xl font-black text-dk-yellow-500">{stat.value}</div>
              <div className="text-sm text-dk-gray-600 dark:text-dk-gray-400 mt-1 uppercase font-bold tracking-wider transition-colors">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
