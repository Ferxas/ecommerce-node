// imports
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authController from "./controllers/authController.js";
import authRoutes from "./routes/authRoute.js";

// dotenv config
dotenv.config();

// db config
connectDB();

// rest object
const app = express();

// rest api
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(
    `Server listening on ${process.env.DEV_MODE} ${PORT}`.bgCyan.white
  );
});
