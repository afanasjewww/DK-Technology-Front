import { cn } from '@/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 cursor-pointer',
          'focus:outline-none focus:ring-2 focus:ring-dk-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-dk-gray-900',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-dk-yellow-500 text-dk-gray-950 hover:bg-dk-yellow-400 active:bg-dk-yellow-600 shadow-lg hover:shadow-xl font-bold': variant === 'primary',
            'border-2 border-dk-yellow-500 text-dk-yellow-500 hover:bg-dk-yellow-500 hover:text-dk-gray-950': variant === 'outline',
            'text-dk-gray-700 dark:text-dk-gray-300 hover:text-dk-yellow-500 hover:bg-dk-gray-100 dark:hover:bg-dk-gray-800': variant === 'ghost',
          },
          {
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export { Button };
