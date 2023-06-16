import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.js";
import config from "../utils/config.js";

async function login(req, res, next) {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    const passwordCorrect =
      user === null ? false : await bcrypt.compare(password, user.passwordHash);

    if (!(user && passwordCorrect)) {
      return res.status(401).json({
        error: "Invalid username or password",
      });
    }

    const userForToken = {
      username: user.username,
      id: user._id,
    };

    const token = jwt.sign(userForToken, config.SECRET, {
      expiresIn: 60 * 60,
    });

    return res.status(200).send({
      token,
      username: user.username,
      name: user.name,
      role: user.role,
    });
  } catch (error) {
    next(error);
  }
}

export default {
  login,
};
