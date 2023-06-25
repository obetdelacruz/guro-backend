import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  clsName: {
    type: Number,
    required: true,
  },
  mobile: {
    type: Number,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  attdenList: [],
  markList: [],
  pList: [],
  pic: {
    type: String,
    default:
      "https://res.cloudinary.com/dvfpkko1z/image/upload/v1589016219/exwm2axhjign3pmawzlv.png",
  },
});

studentSchema.set("toJSON", {
  transform(_document, returnedObject) {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
