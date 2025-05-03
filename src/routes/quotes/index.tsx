import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/quotes/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-4'>
      <h1 className='text-2xl font-bold'>الاقتباسات</h1>
      {Array.from({ length: 10 }).map((_, index) => (
        <Link
          to='/quotes/$quoteId'
          params={{ quoteId: index.toString() }}
          className='text-blue-300 underline'
        >
          الاقتباس {index}
        </Link>
      ))}
    </div>
  );
}
