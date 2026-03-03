import { cn } from '@/utils';
import { TextareaHTMLAttributes, forwardRef } from 'react';
import { FormField, FORM_INPUT_STYLES, FORM_PLACEHOLDER_STYLES, formBorderStyles } from './FormField';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <FormField label={label} error={error} htmlFor={id}>
        <textarea
          ref={ref}
          id={id}
          rows={4}
          className={cn(FORM_INPUT_STYLES, FORM_PLACEHOLDER_STYLES, 'resize-y min-h-30', formBorderStyles(error), className)}
          {...props}
        />
      </FormField>
    );
  }
);

Textarea.displayName = 'Textarea';
export { Textarea };
