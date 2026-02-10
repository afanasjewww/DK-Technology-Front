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
          'focus:outline-none focus:ring-2 focus:ring-dk-red-500 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-dk-red-500 text-white hover:bg-dk-red-600 active:bg-dk-red-700 shadow-lg hover:shadow-xl': variant === 'primary',
            'border-2 border-dk-red-500 text-dk-red-500 hover:bg-dk-red-500 hover:text-white': variant === 'outline',
            'text-dk-gray-700 hover:text-dk-red-500 hover:bg-dk-gray-100': variant === 'ghost',
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
