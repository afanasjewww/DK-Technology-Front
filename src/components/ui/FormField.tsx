import { cn } from '@/utils';

interface FormFieldProps {
  label?: string;
  error?: string;
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
}

export const FORM_INPUT_STYLES = cn(
  'w-full px-4 py-3 rounded-lg border transition-colors duration-200',
  'bg-white dark:bg-dk-gray-800 text-dk-gray-900 dark:text-white',
  'focus:outline-none focus:ring-2 focus:ring-dk-yellow-500 focus:border-transparent'
);

export const FORM_PLACEHOLDER_STYLES = 'placeholder:text-dk-gray-400 dark:placeholder:text-dk-gray-500';

export function formBorderStyles(error?: string) {
  return error
    ? 'border-red-500'
    : 'border-dk-gray-300 dark:border-dk-gray-700 hover:border-dk-gray-400 dark:hover:border-dk-gray-600';
}

export function FormField({ label, error, htmlFor, children, className }: FormFieldProps) {
  return (
    <div className={cn('w-full', className)}>
      {label && (
        <label
          htmlFor={htmlFor}
          className="block text-sm font-medium text-dk-gray-700 dark:text-dk-gray-300 mb-1"
        >
          {label}
        </label>
      )}
      {children}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
