import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./db/db.connect.js"
import swaggerUi from "swagger-ui-express"
import swaggerSpec from "./swagger/swaggerOptions.js"

import ApolloServer  from "@apollo/server"
import bodyParser from 'body-parser';



// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 4001;

// connect database 
connectDB()

// Create Express app
const app = express();
app.use(express.json());


// swagger api endpoint
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Middleware


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Swagger is running on http://localhost:${PORT}/api-docs`);
});
