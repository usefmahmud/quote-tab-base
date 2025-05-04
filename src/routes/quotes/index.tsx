import { createFileRoute } from '@tanstack/react-router';
import { QUOTES } from '@/mock/quotes';
import QuotesList from '@/components/features/quotes/quotes-list';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
export const Route = createFileRoute('/quotes/')({
  component: RouteComponent,
});

function RouteComponent() {
  {
    /* TODO replace with useInfiniteQuery from TanStack Query */
  }
  const [splicedQuotes, setSplicedQuotes] = useState(QUOTES.slice(0, 5));

  const handleLoadMore = () => {
    setSplicedQuotes(QUOTES.slice(0, splicedQuotes.length + 5));
  };

  return (
    <div className='flex flex-col items-center gap-5'>
      <h1 className='text-3xl font-bold'>الاقتباسات</h1>
      <QuotesList quotes={splicedQuotes} />
      {splicedQuotes.length < QUOTES.length && (
        <Button onClick={handleLoadMore}>تحميل المزيد</Button>
      )}
    </div>
  );
}
