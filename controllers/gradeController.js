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
async function updateGrade(req, res) {
  try {
    const gradeId = req.params.id;
    const {
      full_name,
      mother_tongue,
      filipino,
      english,
      math,
      araling_panlipunan,
      GMRC,
      general_average,
      mapeh,
    } = req.body;

    const updatedGrade = await Grade.findByIdAndUpdate(
      gradeId,
      {
        full_name,
        mother_tongue,
        filipino,
        english,
        math,
        araling_panlipunan,
        GMRC,
        general_average,
        mapeh,
      },
      { new: true }
    );

    if (!updatedGrade) {
      return res.status(404).json({ error: "Grade not found" });
    }

    res.status(200).json(updatedGrade);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update grade" });
  }
}

//HTTP DELETE GRADE
async function deleteGrade(req, res) {
  try {
    const gradeId = req.params.id;
    await Grade.findByIdAndDelete(gradeId);
    res.status(204).send();
  } catch (error) {
    console.error(500).json({ error: "Failed to delete grade" });
  }
}

export default {
  //other Routes
  getGrades,
  getGradeById,
  createGrade,
  updateGrade,
  deleteGrade,
};
