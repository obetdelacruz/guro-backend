import mongoose from "mongoose";

// Schema for classroom rules
const classroomRulesSchema = new mongoose.Schema({
  rules: {
    type: String,
    required: true,
  },
});

// Model for classroom rules

const ClassroomRules = mongoose.model("ClassroomRules", classroomRulesSchema);

// Create a classroom rules database

const classroomRulesInfo = new ClassroomRules({
  rules: "Test",
});

// Save the classroom rules database
classroomRulesInfo.save();
