import { cn } from '@/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'red' | 'green' | 'gray' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'red', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold',
        {
          'bg-dk-red-500 text-white': variant === 'red',
          'bg-green-500 text-white': variant === 'green',
          'bg-dk-gray-200 text-dk-gray-700': variant === 'gray',
          'border border-dk-red-500 text-dk-red-500': variant === 'outline',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
