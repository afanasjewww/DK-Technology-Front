import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui';

interface BreadcrumbsProps {
  items: { label: string; href: string }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <Container>
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && (
                <svg className="w-4 h-4 text-dk-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              )}
              {index === items.length - 1 ? (
                <span className="text-dk-gray-500">{item.label}</span>
              ) : (
                <Link href={item.href} className="text-dk-gray-700 hover:text-dk-red-500 transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </Container>
  );
}
