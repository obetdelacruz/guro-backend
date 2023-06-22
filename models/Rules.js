import mongoose from "mongoose";

// Schema for classroom rules
const rulesSchema = new mongoose.Schema({
  rules: String,
});

rulesSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// Model for classroom rules
const Rules = mongoose.model("Rules", rulesSchema);

export default Rules;
