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
newsInfo.save();
