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
          <label htmlFor={id} className="block text-sm font-medium text-dk-gray-700 mb-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            'w-full px-4 py-3 rounded-lg border transition-colors duration-200',
            'bg-white text-dk-gray-900 placeholder:text-dk-gray-400',
            'focus:outline-none focus:ring-2 focus:ring-dk-red-500 focus:border-transparent',
            error ? 'border-dk-red-500' : 'border-dk-gray-300 hover:border-dk-gray-400',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-dk-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
export { Input };
