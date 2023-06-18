import mongoose from "mongoose";

// Schema for classroom rules
const RulesSchema = new mongoose.Schema({
  rules: {
    type: String,
    required: true,
  },
});

// Model for classroom rules
const Rules = mongoose.model("Rules", RulesSchema);

// Create a classroom rules database
const RulesInfo = new Rules({
  rules: "Test",
});

// Save the classroom rules database
RulesInfo.save().then((result) => {
  console.log("Classroom Rules Saved");
  mongoose.connection.close();
});
