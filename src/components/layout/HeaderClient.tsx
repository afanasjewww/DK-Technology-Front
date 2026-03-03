'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/utils';

import { Container } from '@/components/ui';
import { MobileMenu } from './MobileMenu';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { CONTACT_INFO, HEADER_NAV_LINKS } from '@/lib/constants';

export function HeaderClient() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('nav');

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'bg-dk-gray-50/90 dark:bg-dk-gray-950/90 backdrop-blur-md border-b border-dk-gray-200/50 dark:border-dk-gray-800/50'
        )}
      >
        <Container>
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="relative w-56 h-16 sm:w-72 sm:h-18 flex items-center">
                <img
                  src="/images/hero/logo_main.png"
                  alt="ДК Технолоджис"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {HEADER_NAV_LINKS.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 whitespace-nowrap',
                    pathname === link.href
                      ? 'text-dk-yellow-600 bg-dk-yellow-500/10 dark:text-dk-yellow-500'
                      : 'text-dk-gray-600 hover:text-dk-gray-900 hover:bg-dk-gray-100 dark:text-dk-gray-300 dark:hover:text-white dark:hover:bg-dk-gray-800'
                  )}
                >
                  {t(link.key)}
                </Link>
              ))}
            </nav>

            {/* Right side: Phone + ThemeToggle + Language + CTA */}
            <div className="hidden lg:flex items-center gap-4 ml-6">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/[\s\-\(\)]/g, '')}`}
                className="text-sm text-dk-gray-600 hover:text-dk-gray-900 dark:text-dk-gray-300 dark:hover:text-white transition-colors"
              >
                {CONTACT_INFO.phone}
              </a>
              <ThemeToggle />
              <LanguageSwitcher />
              <Link
                href="/catalog"
                className="px-5 py-2.5 bg-dk-yellow-500 text-dk-gray-950 text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-dk-yellow-400 transition-colors"
              >
                {t('catalog')}
              </Link>
            </div>

            {/* Mobile: ThemeToggle + Language + Hamburger */}
            <div className="flex lg:hidden items-center gap-3">
              <ThemeToggle />
              <LanguageSwitcher />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative w-10 h-10 flex items-center justify-center text-dk-gray-900 dark:text-white"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                <div className="flex flex-col gap-1.5">
                  <span className={cn(
                    'block w-6 h-0.5 bg-current transition-all duration-300 origin-center',
                    mobileOpen && 'rotate-45 translate-y-2'
                  )} />
                  <span className={cn(
                    'block w-6 h-0.5 bg-current transition-all duration-300',
                    mobileOpen && 'opacity-0'
                  )} />
                  <span className={cn(
                    'block w-6 h-0.5 bg-current transition-all duration-300 origin-center',
                    mobileOpen && '-rotate-45 -translate-y-2'
                  )} />
                </div>
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-20" />

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navLinks={HEADER_NAV_LINKS}
      />
    </>
  );
}
