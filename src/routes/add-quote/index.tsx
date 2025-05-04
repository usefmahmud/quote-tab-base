import AddQuoteForm from '@/components/features/add-quote/add-quote-form';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/add-quote/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='flex h-screen items-center justify-center px-4 md:px-0'>
      <AddQuoteForm />
    </div>
  );
}
