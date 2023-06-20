import Grade from "../models/Grade.js";

//HTPP GET all Grades

async function getGrades(_req, res) {
  const grades = await Grade.find({});
  return res.json(grades);
}

async function getGradeById(req, res) {
  res.send("Grades resource by id");
}

async function createGrade(req, res) {
  res.send("Grades has been created");
}

async function updateGrade(req, res) {
  res.send("Grades has been updated");
}

async function deleteGrade(req, res) {
  res.send("Grades has been deleted");
}

export default {
  //other Routes
  getGrades,
  getGradeById,
  createGrade,
  updateGrade,
  deleteGrade,
};
