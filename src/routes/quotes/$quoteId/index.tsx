import { QUOTES } from '@/mock/quotes';
import { createFileRoute } from '@tanstack/react-router';
import { useParams } from '@tanstack/react-router';

export const Route = createFileRoute('/quotes/$quoteId/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { quoteId } = useParams({
    from: '/quotes/$quoteId/',
  });
  return (
    <div>{QUOTES.find((quote) => quote.id === Number(quoteId))?.text}</div>
  );
}
