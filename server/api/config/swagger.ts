import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options: swaggerJSDoc.Options = {
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
    ],
  },
  apis: ['./api/routers/*.ts', './api/controllers/*.ts', './api/models/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec, swaggerUi };
