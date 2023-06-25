import express from "express";
import Student from "./models/Student.js";

const studentRouter = express.Router();

studentRouter.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Failed to get students" });
  }
});

studentRouter.post("/", async (req, res) => {
  try {
    const { name, email, password, clsName, mobile, isAdmin } = req.body;
    const student = new Student({
      name,
      email,
      password,
      clsName,
      mobile,
      isAdmin,
    });
    await student.save();
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: "Failed to create student" });
  }
});

studentRouter.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, password, clsName, mobile, isAdmin } = req.body;
    const student = await Student.findById(id);
    if (!student) {
      res.status(404).json({ message: "Student not found" });
      return;
    }
    student.name = name;
    student.email = email;
    student.password = password;
    student.clsName = clsName;
    student.mobile = mobile;
    student.isAdmin = isAdmin;
    await student.save();
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: "Failed to update student" });
  }
});

studentRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findById(id);
    if (!student) {
      res.status(404).json({ message: "Student not found" });
      return;
    }
    await student.remove();
    res.json({ message: "Student deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete student" });
  }
});

export default studentRouter;
