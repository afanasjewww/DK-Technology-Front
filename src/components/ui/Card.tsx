import { cn } from '@/utils';
import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  dark?: boolean;
}

export function Card({ className, hover = true, dark = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl overflow-hidden',
        'border',
        dark ? 'bg-dk-gray-800 text-white border-dk-gray-700' : 'bg-white dark:bg-dk-gray-900 dark:text-dk-gray-100 border-dk-gray-200 dark:border-dk-gray-800',
        hover && 'transition-all duration-300 hover:shadow-xl hover:shadow-dk-yellow-500/10 hover:-translate-y-1 hover:border-dk-yellow-500',
        !hover && 'shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
