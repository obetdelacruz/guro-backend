import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: String,
  date_of_birth: String,
  age: Number,
  gender: String,
  joining_year: String,
  teaching_area: String,
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  qualification: String,
  mobile: Number,
  employee_id: {
    type: String,
    required: true,
    unique: true,
  },
  
});

teacherSchema.set("toJSON", {
  transform(_document, returnedObject) {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;
