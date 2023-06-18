import express from "express";
import gradeController from "../controllers/gradeController.js";

const gradeRouter = express.Router();

gradeRouter.get("/", gradeController.getGrades);

gradeRouter.get("/:id", gradeController.getGradeById);

gradeRouter.post("/", gradeController.createGrade);

gradeRouter.put("/:id", gradeController.updateGrade);

gradeRouter.delete("/:id", gradeController.deleteGrade);

export default gradeRouter;
