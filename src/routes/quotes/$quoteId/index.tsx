import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/quotes/$quoteId/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { quoteId } = useParams({ from: '/quotes/$quoteId/' });
  return (
    <div className='flex h-screen items-center justify-center'>
      <h1 className='text-2xl font-bold'>الاقتباس {quoteId}</h1>
    </div>
  );
}
