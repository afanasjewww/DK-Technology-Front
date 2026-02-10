'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui';

export function CookieConsent() {
  const [show, setShow] = useState(false);
  const t = useTranslations('cookie');

  useEffect(() => {
    const consent = localStorage.getItem('dk-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('dk-cookie-consent', 'accepted');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm z-50"
        >
          <div className="bg-dk-gray-900 border border-dk-gray-700 rounded-2xl p-4 shadow-2xl">
            <p className="text-sm text-dk-gray-300 mb-3">
              {t('message')}
            </p>
            <div className="flex gap-2">
              <Button size="sm" onClick={accept}>
                {t('accept')}
              </Button>
              <Button size="sm" variant="ghost" onClick={accept} className="text-dk-gray-400">
                {t('settings')}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
