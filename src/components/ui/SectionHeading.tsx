import { cn } from '@/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({ title, subtitle, centered = true, light = false, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <h2 className={cn(
        'text-3xl sm:text-4xl lg:text-5xl font-bold mb-4',
        light ? 'text-white' : 'text-dk-gray-900 dark:text-white'
      )}>
        {title}
      </h2>
      <div className={cn(
        'w-20 h-1 bg-dk-yellow-500 rounded-full',
        centered ? 'mx-auto' : '',
        'mb-4'
      )} />
      {subtitle && (
        <p className={cn(
          'text-lg max-w-2xl',
          centered && 'mx-auto',
          light ? 'text-dk-gray-300' : 'text-dk-gray-500 dark:text-dk-gray-400'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
