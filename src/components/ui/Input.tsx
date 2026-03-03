import { cn } from '@/utils';
import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-dk-gray-700 dark:text-dk-gray-300 mb-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            'w-full px-4 py-3 rounded-lg border transition-colors duration-200',
            'bg-white dark:bg-dk-gray-800 text-dk-gray-900 dark:text-white placeholder:text-dk-gray-400 dark:placeholder:text-dk-gray-500',
            'focus:outline-none focus:ring-2 focus:ring-dk-yellow-500 focus:border-transparent',
            error ? 'border-red-500' : 'border-dk-gray-300 dark:border-dk-gray-700 hover:border-dk-gray-400 dark:hover:border-dk-gray-600',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
export { Input };
