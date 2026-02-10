import { cn } from '@/utils';
import { TextareaHTMLAttributes, forwardRef } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-dk-gray-700 mb-1">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          rows={4}
          className={cn(
            'w-full px-4 py-3 rounded-lg border transition-colors duration-200 resize-y',
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

Textarea.displayName = 'Textarea';
export { Textarea };
