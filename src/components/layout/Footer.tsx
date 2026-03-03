import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui';
import { CONTACT_INFO } from '@/lib/constants';

export async function Footer() {
  const t = await getTranslations('footer');
  const tNav = await getTranslations('nav');

  const navLinks = [
    { label: tNav('home'), href: '/' },
    { label: tNav('catalog'), href: '/catalog' },
    { label: tNav('rental'), href: '/rental' },
    { label: tNav('about'), href: '/about' },
  ];

  const serviceLinks = [
    { label: tNav('service'), href: '/service' },
    { label: tNav('promotions'), href: '/promotions' },
    { label: tNav('configurator'), href: '/configurator' },
    { label: tNav('contacts'), href: '/contacts' },
  ];

  return (
    <footer className="bg-dk-gray-50 dark:bg-dk-gray-950 text-dk-gray-700 dark:text-dk-gray-300 border-t border-dk-gray-200 dark:border-dk-gray-800 transition-colors duration-300">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div>
              <Link href="/" className="inline-block mb-4">
                <img
                  src="/images/hero/logo_main.png"
                  alt="ДК Технолоджис"
                  className="h-16 sm:h-18 w-auto object-contain"
                />
              </Link>
              <p className="text-sm text-dk-gray-500 dark:text-dk-gray-400 leading-relaxed transition-colors">
                {t('description')}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-dk-gray-900 dark:text-white font-semibold mb-4 transition-colors">{t('navigation')}</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-dk-gray-600 dark:text-dk-gray-400 hover:text-dk-yellow-600 dark:hover:text-dk-yellow-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-dk-gray-900 dark:text-white font-semibold mb-4 transition-colors">{t('services')}</h3>
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-dk-gray-600 dark:text-dk-gray-400 hover:text-dk-yellow-600 dark:hover:text-dk-yellow-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h3 className="text-dk-gray-900 dark:text-white font-semibold mb-4 transition-colors">{t('contacts')}</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/[\s\-\(\)]/g, '')}`}
                    className="text-sm text-dk-gray-600 dark:text-dk-gray-400 hover:text-dk-yellow-600 dark:hover:text-dk-yellow-500 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 shrink-0 text-dk-gray-400 dark:text-dk-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    {CONTACT_INFO.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-sm text-dk-gray-600 dark:text-dk-gray-400 hover:text-dk-yellow-600 dark:hover:text-dk-yellow-500 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 shrink-0 text-dk-gray-400 dark:text-dk-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    {CONTACT_INFO.email}
                  </a>
                  <a
                    href="mailto:sales@dk-tehno.ru"
                    className="text-sm text-dk-gray-600 dark:text-dk-gray-400 hover:text-dk-yellow-600 dark:hover:text-dk-yellow-500 transition-colors block ml-6 mt-1"
                  >
                    sales@dk-tehno.ru
                  </a>
                </li>
                <li className="text-sm text-dk-gray-600 dark:text-dk-gray-400 flex items-center gap-2 transition-colors">
                  <svg className="w-4 h-4 shrink-0 text-dk-gray-400 dark:text-dk-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  {CONTACT_INFO.address}
                </li>
                <li className="text-sm text-dk-gray-600 dark:text-dk-gray-400 flex items-center gap-2 transition-colors">
                  <svg className="w-4 h-4 shrink-0 text-dk-gray-400 dark:text-dk-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {CONTACT_INFO.workingHours}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dk-gray-200 dark:border-dk-gray-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors">
          <p className="text-xs text-dk-gray-500 dark:text-dk-gray-600">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xs text-dk-gray-500 hover:text-dk-gray-900 dark:text-dk-gray-600 dark:hover:text-dk-gray-400 transition-colors">
              {t('privacy')}
            </Link>
            <Link href="/" className="text-xs text-dk-gray-500 hover:text-dk-gray-900 dark:text-dk-gray-600 dark:hover:text-dk-gray-400 transition-colors">
              {t('terms')}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
