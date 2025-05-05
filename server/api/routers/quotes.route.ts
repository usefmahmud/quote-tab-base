import { Router } from 'express';
import {
  createQuote,
  deleteQuote,
  getAllQuotes,
  getQuoteById,
  getRandomQuote,
} from '../controllers/quotes.controller';

const router = Router();

router.get('/', getAllQuotes);
router.get('/:id', getQuoteById);
router.post('/', createQuote);
router.delete('/:id', deleteQuote);
router.get('/random', getRandomQuote);

export default router;
