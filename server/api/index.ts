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

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Quote API',
      version: '1.0.0',
      description: 'API for managing quotes',
    },
    servers: [
      {
        url: 'http://localhost:3031',
        description: 'Development server',
      },
      {
        url: 'https://quote-tab-base.vercel.app',
        description: 'Production server',
      },
    ],
  },
  apis: ['./api/controllers/*.ts', './api/models/*.ts', './api/routers/*.ts'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(cors());
app.use(express.json());

app.use(responseHelpers);

app.use('/api', router);

const PORT = process.env.PORT || 3031;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(
    `Swagger documentation available at http://localhost:${PORT}/api-docs`
  );
});
