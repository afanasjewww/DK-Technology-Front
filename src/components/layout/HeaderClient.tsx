'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/utils';
import { useScrollDirection } from '@/hooks';
import { Container } from '@/components/ui';
import { MobileMenu } from './MobileMenu';
import { LanguageSwitcher } from './LanguageSwitcher';
import { CONTACT_INFO } from '@/lib/constants';

const navLinks = [
  { key: 'catalog', href: '/catalog' },
  { key: 'rental', href: '/rental' },
  { key: 'service', href: '/service' },
  { key: 'about', href: '/about' },
  { key: 'promotions', href: '/promotions' },
  { key: 'contacts', href: '/contacts' },
];

export function HeaderClient() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const pathname = usePathname();
  const t = useTranslations('nav');

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-transform duration-300',
          'bg-dk-gray-950/90 backdrop-blur-md border-b border-dk-gray-800/50',
          scrollDirection === 'down' && !mobileOpen ? '-translate-y-full' : 'translate-y-0'
        )}
      >
        <Container>
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-white font-heading">
                  DK<span className="text-dk-red-500"> Techno</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                    pathname === link.href
                      ? 'text-dk-red-500 bg-dk-red-500/10'
                      : 'text-dk-gray-300 hover:text-white hover:bg-dk-gray-800'
                  )}
                >
                  {t(link.key)}
                </Link>
              ))}
            </nav>

            {/* Right side: Phone + Language + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/[\s\-\(\)]/g, '')}`}
                className="text-sm text-dk-gray-300 hover:text-white transition-colors"
              >
                {CONTACT_INFO.phone}
              </a>
              <LanguageSwitcher />
              <Link
                href="/catalog"
                className="px-5 py-2.5 bg-dk-red-500 text-white text-sm font-semibold rounded-lg hover:bg-dk-red-600 transition-colors"
              >
                {t('catalog')}
              </Link>
            </div>

            {/* Mobile: Language + Hamburger */}
            <div className="flex lg:hidden items-center gap-3">
              <LanguageSwitcher />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative w-10 h-10 flex items-center justify-center text-white"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                <div className="flex flex-col gap-1.5">
                  <span className={cn(
                    'block w-6 h-0.5 bg-white transition-all duration-300 origin-center',
                    mobileOpen && 'rotate-45 translate-y-2'
                  )} />
                  <span className={cn(
                    'block w-6 h-0.5 bg-white transition-all duration-300',
                    mobileOpen && 'opacity-0'
                  )} />
                  <span className={cn(
                    'block w-6 h-0.5 bg-white transition-all duration-300 origin-center',
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
        navLinks={navLinks}
      />
    </>
  );
}
