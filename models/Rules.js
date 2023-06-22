import mongoose from "mongoose";

// Schema for classroom rules
const rulesSchema = new mongoose.Schema({
  rules: {
    type: String,
    required: true,
  },
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

// Create a classroom rules database
const rulesInfo = new Rules({
  rules: "Treat others with respect at all times.",
});

// Save the classroom rules database
rulesInfo.save().then((result) => {
  console.log("Classroom Rules Saved");
  mongoose.connection.close();
});

export default Rules;
