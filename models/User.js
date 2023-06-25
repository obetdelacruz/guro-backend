import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  mobile: {
    type: String,
    required: true,
  },
});

userSchema.plugin(uniqueValidator, {
  message: "This email address is already in use.",
});

userSchema.set("toJSON", {
  transform(_document, returnedObject) {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
    return returnedObject;
  },
});

const User = mongoose.model("User", userSchema);

export default User;
