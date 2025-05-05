import { Router, RequestHandler } from 'express';
import {
  createQuote,
  deleteQuote,
  getAllQuotes,
  getQuoteById,
  getRandomQuote,
} from '../controllers/quotes.controller';

const router = Router();

router.get('/', getAllQuotes as RequestHandler);
router.get('/:id', getQuoteById as RequestHandler);
router.post('/', createQuote as RequestHandler);
router.delete('/:id', deleteQuote as RequestHandler);
router.get('/random', getRandomQuote as RequestHandler);

export default router;
