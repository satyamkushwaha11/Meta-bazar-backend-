import dotenv from 'dotenv'
dotenv.config()

const SWEGGER_URL=process.env.SWEGGER_URL||"http://localhost:5001"

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
      title: "Meta-Bazar API Documentation",
      version: "1.0.0",
      description: "A description of Meta-Bazar API",
    },
    servers: [
      {
        url: SWEGGER_URL, // Update with your server URL
        description: "Development server",
      },
    ],
  };
export default swaggerDefinition;

  