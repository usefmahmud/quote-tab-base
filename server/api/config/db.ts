import mongoose from 'mongoose';
import dotenv from 'dotenv';
export const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  try {
    await mongoose.connect(uri ?? '');
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};
