import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const SECRET = process.env.SECRET;
const MONGODB_URI = process.env.MONGODB_URI;

export default {
  PORT,
  SECRET,
  MONGODB_URI,
};
