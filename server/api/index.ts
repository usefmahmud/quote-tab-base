import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import { responseHelpers } from './utils/API';
import { RegisterRoutes } from '../dist/routes';

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use(responseHelpers);

RegisterRoutes(app);

const PORT = process.env.PORT || 3031;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
