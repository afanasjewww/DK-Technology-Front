'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/utils';
import { CONTACT_INFO } from '@/lib/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { key: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const pathname = usePathname();
  const t = useTranslations('nav');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-dk-gray-950/95 backdrop-blur-lg" />

          {/* Menu Content */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="relative flex flex-col items-center justify-center h-full pt-20 pb-10 px-6"
          >
            <div className="flex flex-col items-center gap-2 w-full max-w-sm">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      'block w-full text-center py-3 px-6 text-lg font-medium rounded-xl transition-colors',
                      pathname === link.href
                        ? 'text-dk-red-500 bg-dk-red-500/10'
                        : 'text-white hover:bg-dk-gray-800'
                    )}
                  >
                    {t(link.key)}
                  </Link>
                </motion.div>
              ))}

              {/* Account link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.05 }}
                className="w-full"
              >
                <Link
                  href="/account"
                  onClick={onClose}
                  className="block w-full text-center py-3 px-6 text-lg font-medium text-white hover:bg-dk-gray-800 rounded-xl transition-colors"
                >
                  {t('account')}
                </Link>
              </motion.div>
            </div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col items-center gap-3"
            >
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/[\s\-\(\)]/g, '')}`}
                className="text-lg text-dk-red-400 font-semibold hover:text-dk-red-300"
              >
                {CONTACT_INFO.phone}
              </a>
              <p className="text-sm text-dk-gray-400">{CONTACT_INFO.workingHours}</p>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
