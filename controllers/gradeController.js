import Grade from "../models/Grade.js";

//HTPP GET all Grades

async function getGrades(_req, res) {
  const grades = await Grade.find({});

  return res.status(200).json(grades);
}

//HTTP Get Grade by ID
async function getGradeById(_req, res) {
  const id = _req.params.id;
  const grade = await Grade.findById(id);

  return res.status(200).json(grade);
}

//HTTP CREATE/POST GRADE
async function createGrade(req, res) {
  try {
    const {
      full_name,
      mother_tongue,
      filipino,
      english,
      math,
      araling_panlipunan,
      GMRC,
      mapeh: { music, arts, pe, health },
      general_average,
    } = req.body;

    const gradeInfo = new Grade({
      full_name,
      mother_tongue,
      filipino,
      english,
      math,
      araling_panlipunan,
      GMRC,
      mapeh: {
        music,
        arts,
        pe,
        health,
      },
      general_average,
    });

    const savedGradeInfo = await gradeInfo.save();
    res.status(201).json(savedGradeInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create grade" });
  }
}

//HTTP UPDATE GRADE
async function updateGrade(_req, res) {
  res.send("Grades has been updated");
}

//HTTP DELETE GRADE
async function deleteGrade(_req, res) {
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
