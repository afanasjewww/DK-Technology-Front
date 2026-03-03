import { cn } from '@/utils';
import { SelectHTMLAttributes, forwardRef } from 'react';
import { FormField, FORM_INPUT_STYLES, formBorderStyles } from './FormField';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, id, options, ...props }, ref) => {
    return (
      <FormField label={label} error={error} htmlFor={id}>
        <select
          ref={ref}
          id={id}
          className={cn(FORM_INPUT_STYLES, 'appearance-none', formBorderStyles(error), className)}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </FormField>
    );
  }
);

Select.displayName = 'Select';
export { Select };
