import mongoose from "mongoose";

// Schema for grades
const gradeSchema = new mongoose.Schema({
  full_name: String,
  mother_tongue: Number,
  filipino: Number,
  english: Number,
  math: Number,
  araling_panlipunan: Number,
  GMRC: Number,
  mapeh: [
    {
      music: Number,
      arts: Number,
      pe: Number,
      health: Number,
    },
  ],
  general_average: Number,
});

gradeSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// Model for grades
const Grade = mongoose.model("Grade", gradeSchema);

export default Grade;
