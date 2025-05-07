import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routers/index.route';
import { connectDB } from './config/db';
import { responseHelpers } from './utils/API';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use(responseHelpers);

app.use('/api', router);

const PORT = process.env.PORT || 3031;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
