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

newsSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
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

export default News;
