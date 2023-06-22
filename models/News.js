import mongoose from "mongoose";

// Schema for news
const newsSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  date: Number,
});

newsSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// Model for news
const News = mongoose.model("News", newsSchema);

export default News;
