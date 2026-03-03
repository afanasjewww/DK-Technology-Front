import { cn } from '@/utils';
import { SelectHTMLAttributes, forwardRef } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, id, options, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-dk-gray-700 dark:text-dk-gray-300 mb-1">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={id}
          className={cn(
            'w-full px-4 py-3 rounded-lg border transition-colors duration-200 appearance-none',
            'bg-white dark:bg-dk-gray-800 text-dk-gray-900 dark:text-white',
            'focus:outline-none focus:ring-2 focus:ring-dk-yellow-500 focus:border-transparent',
            error ? 'border-red-500' : 'border-dk-gray-300 dark:border-dk-gray-700 hover:border-dk-gray-400 dark:hover:border-dk-gray-600',
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';
export { Select };
