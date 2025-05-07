import Quote, { IQuote } from '../models/quote.model';
import { ICreateQuoteDto } from '../dto/quotes.dto';
import Category from '../models/category.model';
import { Controller, Get, Path, Response, Route } from 'tsoa';

@Route('quotes')
export class QuotesController extends Controller {
  @Get()
  public async getAllQuotes(): Promise<IQuote[]> {
    const quotes = await Quote.find();
    return quotes;
  }

  @Response<IQuote>(404, 'Quote not found')
  @Get('{id}')
  public async getQuoteById(@Path() id: string): Promise<IQuote> {
    const quote = await Quote.findById(id);
    if (!quote) {
      this.setStatus(404);
      throw new Error('Quote not found');
    }
    return quote;
  }
}

/*
export const getQuoteById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const quote = await Quote.findById(id);

  if (!quote) {
    return res.fail({
      code: 'QUOTE_NOT_FOUND',
      message: 'Quote not found',
    });
  }

  res.success(quote, 'Quote fetched successfully');
};

export const createQuote = async (
  req: Request<{}, {}, ICreateQuoteDto>,
  res: Response
) => {
  try {
    const { text, author, category } = req.body;

    const existingCategory = await Category.findById(category);

    if (!existingCategory) {
      return res.fail({
        code: 'CATEGORY_NOT_FOUND',
        message: 'Category not found',
      });
    }

    const newQuote = new Quote({ text, author, category });

    await newQuote.save();

    res.success(newQuote, 'Quote created successfully');
  } catch (error) {
    return res.fail({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Internal server error',
    });
  }
};

export const deleteQuote = (req: Request, res: Response) => {
  res.json({
    message: 'delete quote',
  });
};

export const getRandomQuote = (req: Request, res: Response) => {
  res.json({
    message: 'random quote',
  });
};
*/
