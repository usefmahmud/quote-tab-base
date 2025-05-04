import QuoteCard from './quote-card';
import { Quote } from '@/types/quote.type';

interface QuotesListProps {
  quotes: Quote[];
}

const QuotesList = ({ quotes }: QuotesListProps) => {
  return (
    <div className='flex flex-col gap-8'>
      {quotes.map((quote) => (
        <QuoteCard key={quote.id} quote={quote} />
      ))}
    </div>
  );
};

export default QuotesList;
