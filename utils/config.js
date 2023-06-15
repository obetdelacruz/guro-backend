import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const SECRET = process.env.SECRET;

export default {
  PORT,
  SECRET,
};
