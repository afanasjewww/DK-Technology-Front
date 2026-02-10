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
        dark ? 'bg-dk-gray-800 text-white' : 'bg-white',
        hover && 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
        !hover && 'shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
