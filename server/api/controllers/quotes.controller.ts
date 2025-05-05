import { Request, Response } from 'express';
import Quote from '../models/quote.model';
import { ICreateQuoteDto } from '../dto/quotes.dto';
import Category from '../models/category.model';

/**
 * @swagger
 * components:
 *   schemas:
 *     Quote:
 *       type: object
 *       required:
 *         - text
 *         - author
 *         - category
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated ID of the quote
 *         text:
 *           type: string
 *           description: The quote text
 *         author:
 *           type: string
 *           description: The author of the quote
 *         category:
 *           type: string
 *           description: The category ID the quote belongs to
 *       example:
 *         _id: 60d21b4667d0d8992e610c85
 *         text: The greatest glory in living lies not in never falling, but in rising every time we fall.
 *         author: Nelson Mandela
 *         category: 60d21b4667d0d8992e610c80
 */

/**
 * @swagger
 * /api/quotes:
 *   get:
 *     summary: Returns all quotes
 *     tags: [Quotes]
 *     responses:
 *       200:
 *         description: The list of quotes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Quote'
 */
export const getAllQuotes = async (req: Request, res: Response) => {
  const quotes = await Quote.find();

  res.success(quotes, 'Quotes fetched successfully');
};

/**
 * @swagger
 * /api/quotes/{id}:
 *   get:
 *     summary: Get a quote by ID
 *     tags: [Quotes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The quote ID
 *     responses:
 *       200:
 *         description: The quote description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quote'
 *       404:
 *         description: Quote not found
 */
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

/**
 * @swagger
 * /api/quotes:
 *   post:
 *     summary: Create a new quote
 *     tags: [Quotes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - text
 *               - author
 *               - category
 *             properties:
 *               text:
 *                 type: string
 *                 description: The quote text
 *               author:
 *                 type: string
 *                 description: The author of the quote
 *               category:
 *                 type: string
 *                 description: The category ID the quote belongs to
 *     responses:
 *       200:
 *         description: The quote was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quote'
 *       400:
 *         description: Category not found
 */
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

/**
 * @swagger
 * /api/quotes/{id}:
 *   delete:
 *     summary: Delete a quote by ID
 *     tags: [Quotes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The quote ID
 *     responses:
 *       200:
 *         description: The quote was deleted
 *       404:
 *         description: Quote not found
 */
export const deleteQuote = (req: Request, res: Response) => {
  res.json({
    message: 'delete quote',
  });
};

/**
 * @swagger
 * /api/quotes/random:
 *   get:
 *     summary: Get a random quote
 *     tags: [Quotes]
 *     responses:
 *       200:
 *         description: A random quote
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quote'
 */
export const getRandomQuote = (req: Request, res: Response) => {
  res.json({
    message: 'random quote',
  });
};
