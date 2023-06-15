import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./utils/config.js";
import loginRouter from "./routes/loginRouter.js";

const app = express();

async function connectToDB(url) {
  await mongoose.connect(url);
  console.log("Connected to DB");
}

connectToDB(config.MONGODB_URI);

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));
app.use("/api/login", loginRouter);

export default app;
