import express from "express";

import studentController from "../controllers/studentController.js";

const studentRouter = express.Router();

studentRouter.get("/", studentController.getStudents);
studentRouter.post("/", studentController.createStudent);
studentRouter.put("/:id", studentController.updateStudent);
studentRouter.delete("/:id", studentController.deleteStudent);

export default studentRouter;
