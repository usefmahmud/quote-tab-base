import { Router } from 'express';
import quotesRouter from './quotes.route';
const router = Router();

router.use('/quotes', quotesRouter);

export default router;
