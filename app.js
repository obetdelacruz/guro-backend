import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./utils/config.js";
import loginRouter from "./routes/loginRouter.js";
import gradeRouter from "./routes/gradeRouter.js";
import newsRouter from "./routes/newsRouter.js";
import rulesRouter from "./routes/rulesRouter.js";

const app = express();

//function to connect to the database
async function connectToDB(url) {
  await mongoose.connect(url);
  console.log("Connected to DataBase");
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
