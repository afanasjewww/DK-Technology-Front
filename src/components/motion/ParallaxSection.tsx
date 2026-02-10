'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { useMediaQuery } from '@/hooks';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  bgClassName?: string;
  overlay?: boolean;
}

export function ParallaxSection({
  children,
  speed = 0.3,
  className,
  bgClassName,
  overlay = true,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const effectiveSpeed = isDesktop ? speed : 0;

  return (
    <div ref={ref} className={`relative overflow-hidden ${className || ''}`}>
      <motion.div
        className={`absolute inset-0 ${bgClassName || ''}`}
        style={effectiveSpeed > 0 ? { y } : undefined}
      />
      {overlay && (
        <div className="absolute inset-0 bg-dk-gray-950/60" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
