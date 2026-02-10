import { Link } from '@/i18n/navigation';
import { Container, Button } from '@/components/ui';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center">
      <Container className="text-center">
        <div className="text-8xl font-bold text-dk-red-500 mb-4">404</div>
        <h1 className="text-3xl font-bold text-dk-gray-900 mb-4">
          Страница не найдена
        </h1>
        <p className="text-dk-gray-500 mb-8 max-w-md mx-auto">
          К сожалению, запрашиваемая страница не существует
        </p>
        <Link href="/">
          <Button>Вернуться на главную</Button>
        </Link>
      </Container>
    </section>
  );
}
