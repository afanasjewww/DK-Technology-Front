'use client';

import type { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Container, SectionHeading } from '@/components/ui';
import { ScrollReveal, StaggerChildren, StaggerItem } from '@/components/motion';
import { cn } from '@/utils';

function AtvIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="13" cy="47" r="9" /><circle cx="13" cy="47" r="5" /><circle cx="13" cy="47" r="1.5" fill="currentColor" />
      <line x1="13" y1="38" x2="13" y2="42" /><line x1="13" y1="52" x2="13" y2="56" />
      <line x1="4" y1="47" x2="8" y2="47" /><line x1="18" y1="47" x2="22" y2="47" />
      <circle cx="51" cy="47" r="9" /><circle cx="51" cy="47" r="5" /><circle cx="51" cy="47" r="1.5" fill="currentColor" />
      <line x1="51" y1="38" x2="51" y2="42" /><line x1="51" y1="52" x2="51" y2="56" />
      <line x1="42" y1="47" x2="46" y2="47" /><line x1="56" y1="47" x2="60" y2="47" />
      <path d="M4 43 Q4 35 13 35 Q22 35 22 43" />
      <path d="M42 43 Q42 35 51 35 Q60 35 60 43" />
      <path d="M22 44 L26 40 L38 40 L42 44" />
      <rect x="28" y="36" width="8" height="6" rx="1" />
      <line x1="30" y1="36" x2="30" y2="42" /><line x1="34" y1="36" x2="34" y2="42" />
      <path d="M24 34 Q24 28 28 27 L36 27 Q40 28 40 30 L40 34 Q38 36 34 36 L30 36 Q26 36 24 34Z" strokeWidth="1.5" />
      <path d="M28 27 L30 22 L34 22 L36 27" />
      <path d="M30 22 L26 14" /><path d="M34 22 L38 14" />
      <line x1="24" y1="14" x2="28" y2="14" /><line x1="36" y1="14" x2="40" y2="14" />
      <circle cx="24" cy="14" r="1.2" fill="currentColor" /><circle cx="40" cy="14" r="1.2" fill="currentColor" />
      <circle cx="48" cy="32" r="2" fill="currentColor" opacity="0.3" /><circle cx="48" cy="32" r="1" />
      <path d="M44 30 L50 26 L54 28" /><line x1="46" y1="28" x2="52" y2="26" />
      <path d="M20 30 L14 26 L10 28" /><line x1="18" y1="28" x2="12" y2="26" />
      <path d="M20 40 L16 38 L14 36" strokeWidth="1.5" />
      <path d="M22 44 L20 38" strokeDasharray="2 1.5" strokeWidth="1" />
      <path d="M42 44 L44 38" strokeDasharray="2 1.5" strokeWidth="1" />
    </svg>
  );
}

function BuggyIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="11" cy="49" r="9" /><circle cx="11" cy="49" r="5" /><circle cx="11" cy="49" r="1.5" fill="currentColor" />
      <line x1="11" y1="40" x2="11" y2="44" /><line x1="11" y1="54" x2="11" y2="58" />
      <line x1="2" y1="49" x2="6" y2="49" /><line x1="16" y1="49" x2="20" y2="49" />
      <circle cx="53" cy="49" r="9" /><circle cx="53" cy="49" r="5" /><circle cx="53" cy="49" r="1.5" fill="currentColor" />
      <line x1="53" y1="40" x2="53" y2="44" /><line x1="53" y1="54" x2="53" y2="58" />
      <line x1="44" y1="49" x2="48" y2="49" /><line x1="58" y1="49" x2="62" y2="49" />
      <path d="M20 46 L22 38 L42 38 L44 46" />
      <line x1="22" y1="42" x2="42" y2="42" />
      <path d="M22 38 L24 18 L40 18 L42 38" strokeWidth="2" />
      <path d="M40 18 L46 32 L44 38" />
      <path d="M24 18 L20 32 L22 38" />
      <line x1="24" y1="18" x2="40" y2="18" strokeWidth="2.2" />
      <line x1="26" y1="22" x2="38" y2="22" strokeWidth="1.2" />
      <line x1="24" y1="18" x2="42" y2="38" strokeWidth="0.8" strokeDasharray="3 2" />
      <line x1="40" y1="18" x2="22" y2="38" strokeWidth="0.8" strokeDasharray="3 2" />
      <path d="M27 36 L27 30 Q28 28 30 28 L30 36" strokeWidth="1.2" />
      <path d="M33 36 L33 30 Q34 28 36 28 L36 36" strokeWidth="1.2" />
      <circle cx="38" cy="30" r="3" strokeWidth="1.2" /><line x1="38" y1="33" x2="38" y2="36" />
      <circle cx="46" cy="36" r="1.8" fill="currentColor" opacity="0.3" /><circle cx="46" cy="36" r="0.8" />
      <rect x="19" y="35" width="2" height="3" rx="0.5" fill="currentColor" opacity="0.3" />
      <path d="M44 40 L48 38 L50 40" strokeWidth="2" />
      <path d="M20 40 L16 38 L14 40" strokeWidth="2" />
      <path d="M20 46 L14 44" strokeWidth="1.5" /><path d="M44 46 L50 44" strokeWidth="1.5" />
      <line x1="26" y1="46" x2="38" y2="46" strokeWidth="1.2" />
      <path d="M18 40 L16 44" strokeWidth="2.5" opacity="0.4" />
      <path d="M46 40 L48 44" strokeWidth="2.5" opacity="0.4" />
    </svg>
  );
}

function SnowmobileIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M10 50 Q10 44 16 44 L48 44 Q54 44 54 50 Q54 54 48 54 L16 54 Q10 54 10 50Z" strokeWidth="1.5" />
      <line x1="18" y1="44" x2="18" y2="54" /><line x1="24" y1="44" x2="24" y2="54" />
      <line x1="30" y1="44" x2="30" y2="54" /><line x1="36" y1="44" x2="36" y2="54" />
      <line x1="42" y1="44" x2="42" y2="54" /><line x1="48" y1="44.5" x2="48" y2="53.5" />
      <circle cx="15" cy="49" r="4" strokeWidth="1.2" /><circle cx="15" cy="49" r="1.5" fill="currentColor" />
      <circle cx="49" cy="49" r="4" strokeWidth="1.2" /><circle cx="49" cy="49" r="1.5" fill="currentColor" />
      <circle cx="27" cy="53" r="2" /><circle cx="37" cy="53" r="2" />
      <path d="M14 44 L12 38 L16 30 L26 24 L40 22 L50 26 L54 34 L54 44" strokeWidth="2" />
      <path d="M20 38 L22 32 L36 28 L46 30 L50 36" strokeWidth="1" opacity="0.5" />
      <path d="M26 24 L22 14 L30 10 L38 12 L40 22" strokeWidth="1.5" />
      <line x1="26" y1="18" x2="32" y2="14" strokeWidth="0.8" opacity="0.4" />
      <path d="M38 22 L38 18 Q40 16 44 16 L48 18 L50 22 Q50 26 48 28 L42 28 Q40 26 40 24Z" strokeWidth="1.5" />
      <line x1="42" y1="18" x2="42" y2="26" strokeWidth="0.8" opacity="0.4" />
      <path d="M26 24 L22 18" /><path d="M28 22 L32 16" />
      <line x1="20" y1="18" x2="24" y2="18" strokeWidth="2" />
      <line x1="30" y1="16" x2="34" y2="16" strokeWidth="2" />
      <circle cx="20" cy="18" r="1.2" fill="currentColor" /><circle cx="34" cy="16" r="1.2" fill="currentColor" />
      <path d="M2 54 L4 50 L12 50 L14 48" strokeWidth="2" />
      <path d="M2 54 L10 54" strokeWidth="1" />
      <line x1="2" y1="55" x2="10" y2="55" strokeWidth="2.5" opacity="0.3" />
      <circle cx="22" cy="16" r="2" fill="currentColor" opacity="0.3" /><circle cx="22" cy="16" r="1" />
      <rect x="51" y="27" width="2.5" height="2" rx="0.5" fill="currentColor" opacity="0.3" />
      <path d="M52 30 L56 28 L58 30" strokeWidth="1.5" />
      <path d="M56 48 Q58 46 60 48" strokeWidth="0.8" opacity="0.3" />
      <path d="M58 50 Q60 48 62 50" strokeWidth="0.8" opacity="0.3" />
    </svg>
  );
}

function JetskiIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M0 48 Q8 45 16 48 Q24 51 32 48 Q40 45 48 48 Q56 51 64 48" strokeWidth="1" opacity="0.25" />
      <path d="M0 52 Q8 49 16 52 Q24 55 32 52 Q40 49 48 52 Q56 55 64 52" strokeWidth="0.8" opacity="0.15" />
      <path d="M6 44 Q10 50 32 50 Q54 50 58 44" strokeWidth="2" />
      <path d="M6 44 L8 38 L14 32 L24 26 L36 24 L46 26 L52 32 L56 38 L58 44" strokeWidth="2" />
      <path d="M12 38 L18 32 L28 28 L38 26 L48 28 L54 34" strokeWidth="1" opacity="0.4" />
      <path d="M8 38 L12 34 L16 38" strokeWidth="1.2" opacity="0.5" />
      <path d="M28 26 L28 20 Q30 17 34 17 Q38 17 38 20 L38 24" strokeWidth="1.5" />
      <path d="M26 28 Q26 24 30 24 L40 24 Q44 24 44 28" strokeWidth="1.5" />
      <line x1="34" y1="17" x2="34" y2="24" strokeWidth="0.8" opacity="0.4" />
      <path d="M26 26 L22 20" /><path d="M28 24 L30 18" />
      <line x1="20" y1="20" x2="24" y2="20" strokeWidth="2" />
      <line x1="28" y1="18" x2="32" y2="18" strokeWidth="2" />
      <circle cx="20" cy="20" r="1.2" fill="currentColor" /><circle cx="32" cy="18" r="1.2" fill="currentColor" />
      <rect x="24" y="21" width="4" height="2.5" rx="0.8" strokeWidth="1" />
      <path d="M52 32 L58 28 L60 32 L58 36 L54 36" strokeWidth="1.5" />
      <line x1="56" y1="30" x2="56" y2="34" strokeWidth="1" opacity="0.5" />
      <path d="M38 48 L42 48" strokeWidth="1.2" /><path d="M40 46 L44 46" strokeWidth="1.2" />
      <path d="M42 44 L46 44" strokeWidth="1.2" />
      <circle cx="14" cy="34" r="2" fill="currentColor" opacity="0.3" /><circle cx="14" cy="34" r="0.8" />
      <path d="M22 20 L18 18 L17 20" strokeWidth="1" />
      <path d="M32 18 L36 16 L37 18" strokeWidth="1" />
      <line x1="44" y1="30" x2="48" y2="30" strokeWidth="1" opacity="0.4" />
      <line x1="44" y1="32" x2="50" y2="32" strokeWidth="1" opacity="0.4" />
      <line x1="44" y1="34" x2="50" y2="34" strokeWidth="1" opacity="0.4" />
      <path d="M4 46 Q2 42 4 40" strokeWidth="1" opacity="0.3" />
      <path d="M60 38 L62 36" strokeWidth="1.5" opacity="0.3" />
      <path d="M60 40 L63 39" strokeWidth="1" opacity="0.2" />
      <path d="M10 50 Q20 47 32 49 Q44 51 54 48" strokeWidth="0.6" opacity="0.2" strokeDasharray="3 2" />
    </svg>
  );
}

const categories: { key: string; icon: ReactNode; href: string }[] = [
  { key: 'atv', icon: <AtvIcon />, href: '/catalog?type=atv' },
  { key: 'buggy', icon: <BuggyIcon />, href: '/catalog?type=buggy' },
  { key: 'snowmobile', icon: <SnowmobileIcon />, href: '/catalog?type=snowmobile' },
  { key: 'jetski', icon: <JetskiIcon />, href: '/catalog?type=jetski' },
];

export function CategoryShowcase() {
  const t = useTranslations('home.categories');

  return (
    <section className="section-padding bg-dk-gray-50">
      <Container>
        <ScrollReveal>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <StaggerItem key={cat.key}>
              <Link href={cat.href}>
                <div className={cn(
                  'group relative p-6 sm:p-8 rounded-2xl border-2 border-dk-gray-100',
                  'bg-dk-gray-50 hover:bg-dk-red-500 hover:border-dk-red-500',
                  'transition-all duration-300 text-center cursor-pointer',
                  'hover:-translate-y-2 hover:shadow-xl hover:shadow-dk-red-500/20'
                )}>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 text-dk-gray-400 group-hover:text-white transition-colors">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-dk-gray-900 group-hover:text-white transition-colors mb-2">
                    {t(cat.key)}
                  </h3>
                  <p className="text-sm text-dk-gray-500 group-hover:text-white/80 transition-colors">
                    {t(`${cat.key}_desc`)}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold text-white">&rarr;</span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
