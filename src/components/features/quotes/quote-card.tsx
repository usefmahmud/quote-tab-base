import { Quote } from '@/types/quote.type';
import { Link } from '@tanstack/react-router';

interface QuoteCardProps {
  quote: Quote;
}

const QuoteCard = ({ quote }: QuoteCardProps) => {
  return (
    <Link
      to='/quotes/$quoteId'
      params={{
        quoteId: quote.id.toString(),
      }}
    >
      <div className='hover:bg-foreground/2 group relative flex w-full max-w-[600px] cursor-pointer flex-col gap-5 rounded-md border-1 px-4 py-5 transition duration-200 select-none'>
        <p className='text-lg font-normal opacity-80'>{quote.text}</p>
        <div className='flex items-end justify-between'>
          <p className='rounded-full border-1 px-2 py-1 text-sm font-normal opacity-80'>
            {quote.author}
          </p>
          <p className='text-sm font-normal opacity-60'>{quote.date}</p>
        </div>
      </div>
    </Link>
  );
};

export default QuoteCard;
