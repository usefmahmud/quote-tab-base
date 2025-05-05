import { Schema, model } from 'mongoose';

export interface ICategory extends Document {
  name: string;
}

const categorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
});

const Category = model<ICategory>('Category', categorySchema);

export default Category;
