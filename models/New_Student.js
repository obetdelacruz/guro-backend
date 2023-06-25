import mongoose from "mongoose";

const new_studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
  },
  mother_name: {
    type: String,
  },
  father_name: {
    type: String,
  },
  date_of_birth: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  clsName: {
    type: Number,
    required: true,
  },
  addmision_year: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
  },
  address: {
    type: String,
  },
});

new_studentSchema.set("toJSON", {
  transform(_document, returnedObject) {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const New_Student = mongoose.model("New_Student", new_studentSchema);

export default New_Student;
