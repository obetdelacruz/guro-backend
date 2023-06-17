const mongoose = require("mongoose");
const MONGODB_URI =
  "mongodb+srv://obetdelacruz:v3wUGDIxpT8Kk2VD@cluster0.llbpnx1.mongodb.net/?retryWrites=true&w=majority";

async function connectToDB(url) {
  try {
    await mongoose.connect(url);
    console.log("Connected to DB");
  } catch (error) {
    console.log(`Error connecting to DB${error}`);
  }
}

connectToDB(url);

import mongoose from "mongoose";

// Schema for news
const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

// Model for news
const News = mongoose.model("News", newsSchema);

// Create a news database
const newsInfo = new News({
  title: "Test",
  description: "Test",
  date: new Date(),
});

// Save the news database
newsInfo.save().then((result) => {
  console.log("News saved");
  mongoose.connection.close();
});
