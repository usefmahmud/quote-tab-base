import { Schema, model, Types } from 'mongoose';
import Category from './category.model';

export interface IQuote extends Document {
  text: string;
  author: string;
  category: Types.ObjectId | string;
}

const quoteSchema = new Schema<IQuote>({
  text: { type: String, required: true },
  author: { type: String, required: true },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
    validate: {
      validator: async (value: Types.ObjectId) => {
        const count = await Category.countDocuments({ _id: value });
        return count > 0;
      },
      message: 'Category `{VALUE}` does not exist',
    },
  },
});

const Quote = model<IQuote>('Quote', quoteSchema);

export default Quote;
