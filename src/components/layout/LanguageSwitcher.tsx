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
    <div className="flex items-center bg-dk-gray-800 rounded-lg overflow-hidden">
      <button
        onClick={() => switchLocale('ru')}
        className={cn(
          'px-2.5 py-1.5 text-xs font-semibold transition-colors',
          locale === 'ru'
            ? 'bg-dk-red-500 text-white'
            : 'text-dk-gray-400 hover:text-white'
        )}
      >
        RU
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={cn(
          'px-2.5 py-1.5 text-xs font-semibold transition-colors',
          locale === 'en'
            ? 'bg-dk-red-500 text-white'
            : 'text-dk-gray-400 hover:text-white'
        )}
      >
        EN
      </button>
    </div>
  );
}
