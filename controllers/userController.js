import User from "../models/User.js";

async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to get users" });
  }
}

async function createUser(req, res) {
  try {
    const { firstname, lastname, email, password } = req.body;
    const user = new User({
      firstname,
      lastname,
      email,
      password,
    });
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to create user" });
  }
}

async function updateUser(req, res) {
  try {
    const id = req.params.id;
    const { firstname, lastname, email, password } = req.body;
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.password = password;
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to update user" });
  }
}

async function deleteUser(req, res) {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    await user.remove();
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user" });
  }
}

export default {
  // Other routes
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
