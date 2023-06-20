import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./utils/config.js";
import loginRouter from "./routes/loginRouter.js";
import gradeRouter from "./routes/gradeRouter.js";
import newsRouter from "./routes/newsRouter.js";
import rulesRouter from "./routes/rulesRouter.js";

const app = express();
const MONGODB_URI =
  "mongodb+srv://ldelacruz:b7sK9bwvUgaq5eNx@cluster0.ykgpqoq.mongodb.net/?retryWrites=true&w=majority";

async function connectToDB(url) {
  try {
    await mongoose.connect(url);
    console.log("Connected to DB");
  } catch (error) {
    console.log(`Error connecting to DB${error}`);
  }
}

connectToDB(config.MONGODB_URI);

// Setup of Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("dist"));
app.use("/api/login", loginRouter);
app.use("/api/grades", gradeRouter);
app.use("/api/news", newsRouter);
app.use("/api/rules", rulesRouter);

export default app;
