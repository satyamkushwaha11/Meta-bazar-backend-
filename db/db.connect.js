import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Define the database connection URI
const MONGODB_URI = process.env.DBURL || "";

// Establish the connection to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,

    //   useFindAndModify: false,
    //   useCreateIndex: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the application if unable to connect to MongoDB
  }
};

export default connectDB;
