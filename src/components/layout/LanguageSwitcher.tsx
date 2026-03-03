'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { cn } from '@/utils';

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: 'ru' | 'en') => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center bg-dk-gray-200 dark:bg-dk-gray-800 rounded-lg overflow-hidden">
      <button
        onClick={() => switchLocale('ru')}
        className={cn(
          'w-9 py-1.5 text-xs font-semibold transition-colors text-center',
          locale === 'ru'
            ? 'bg-dk-yellow-500 text-dk-gray-950'
            : 'text-dk-gray-500 dark:text-dk-gray-400 hover:text-dk-gray-900 dark:hover:text-white'
        )}
      >
        RU
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={cn(
          'w-9 py-1.5 text-xs font-semibold transition-colors text-center',
          locale === 'en'
            ? 'bg-dk-yellow-500 text-dk-gray-950'
            : 'text-dk-gray-500 dark:text-dk-gray-400 hover:text-dk-gray-900 dark:hover:text-white'
        )}
      >
        EN
      </button>
    </div>
  );
}
