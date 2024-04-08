import swaggerJsdoc from "swagger-jsdoc";
import swaggerDefinition from "./swaggerDefinition.js"; // Assuming it's a JS file, adjust the extension accordingly

const options = {
  swaggerDefinition,
  apis: ["../routes/*.js"], // Path to the API routes
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
