import { cn } from '@/utils';
import { InputHTMLAttributes, forwardRef } from 'react';
import { FormField, FORM_INPUT_STYLES, FORM_PLACEHOLDER_STYLES, formBorderStyles } from './FormField';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <FormField label={label} error={error} htmlFor={id}>
        <input
          ref={ref}
          id={id}
          className={cn(FORM_INPUT_STYLES, FORM_PLACEHOLDER_STYLES, formBorderStyles(error), className)}
          {...props}
        />
      </FormField>
    );
  }
);

Input.displayName = 'Input';
export { Input };
