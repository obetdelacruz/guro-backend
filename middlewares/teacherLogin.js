import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import Teacher from "../models/Teacher.js";
import config from "../utils/config.js";

const JWT_SECRET = config.JWT_SECRET;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "you must be logged in" });
  }
  const token = authorization.replace("Bearer ", "");

  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "you must be logged in" });
    }

    const { _id } = payload;
    const userdata = Teacher.findById(_id);

    if (!userdata) {
      return res.status(401).json({ error: "you must be logged in" });
    }

    req.user = userdata;

    next();
  });
};
