'use client';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface DiagonalSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: 'right' | 'left';
  bgColorClass?: string;
  overlapTop?: boolean;
}

export function DiagonalSection({
  children,
  direction = 'right',
  bgColorClass = 'bg-dk-gray-950',
  overlapTop = false,
  className,
  ...props
}: DiagonalSectionProps) {
  // Use BRP Industrial styled diagonal clips
  const clipClass = direction === 'right' ? 'clip-diagonal-right' : 'clip-diagonal-left';
  
  return (
    <section
      className={twMerge(
        'relative overflow-hidden section-padding',
        bgColorClass,
        clipClass,
        overlapTop && '-mt-16', // Add negative margin to overlap previous section slightly
        className
      )}
      {...props}
    >
      {/* Optional: Add a subtle overlay for extra depth or noise if needed */}
      <div className="absolute inset-0 bg-gradient-dark-overlay pointer-events-none opacity-50 z-0" />
      
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
