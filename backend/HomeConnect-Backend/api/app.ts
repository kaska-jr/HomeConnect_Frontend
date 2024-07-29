import express, { Express, Request, Response } from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
// import cookieParser from "cookie-parser";
import logger from "morgan";
import mongoose from "mongoose";
import authRoute from "./routes/auth";
import userRoute from "./routes/user";
import propertyRoute from "./routes/property";
import dotenv from "dotenv";
import helmet from "helmet";
dotenv.config();

const app: Express = express();

app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const mongoURI = `mongodb://localhost:27017/mongo_db`
const mongoURI = `${process.env.MONGO_URI} ` as string;

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions)
  .then(() => {
    console.log("Connected to MongoDB");
    // Start your application server here
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });
// app.use(cookieParser());
app.use(cors());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  // store: ... , // Use an external store for more precise rate limiting
});

app.use(limiter);

const port = process.env.PORT || 5005;
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/property", propertyRoute);

app.listen(port, () => {
  console.log(`[Server]: server is running on http://localhost:${port}`);
});
