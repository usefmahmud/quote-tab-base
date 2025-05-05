import { Request, Response } from 'express';

export const getAllQuotes = (req: Request, res: Response) => {
  res.json({
    message: 'all quotes',
  });
};

export const getQuoteById = (req: Request, res: Response) => {
  res.json({
    message: 'quote by id',
  });
};

export const createQuote = (req: Request, res: Response) => {
  res.json({
    message: 'create quote',
  });
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
