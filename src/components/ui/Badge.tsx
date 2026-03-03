import { cn } from '@/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'green' | 'gray' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'primary', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold',
        {
          'bg-dk-yellow-500 text-dk-gray-950 font-bold': variant === 'primary',
          'bg-green-500 text-white': variant === 'green',
          'bg-dk-gray-200 dark:bg-dk-gray-700 text-dk-gray-700 dark:text-dk-gray-200': variant === 'gray',
          'border border-dk-yellow-500 text-dk-yellow-500': variant === 'outline',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
