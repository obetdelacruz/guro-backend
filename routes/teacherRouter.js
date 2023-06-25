import express from "express";
import teacherController from "../controllers/teacherController.js";

const teacherRouter = express.Router();

teacherRouter.get("/", teacherController.getTeachers);
teacherRouter.post("/", teacherController.createTeacher);
teacherRouter.put("/:id", teacherController.updateTeacher);
teacherRouter.delete("/:id", teacherController.deleteTeacher);

export default teacherRouter;
