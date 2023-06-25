import Teacher from "../models/Teacher.js";

async function getTeachers(req, res) {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: "Failed to get teachers" });
  }
}

async function createTeacher(req, res) {
  try {
    const {
      name,
      surname,
      date_of_birth,
      age,
      gender,
      joining_year,
      teaching_area,
      email,
      password,
      qualification,
      mobile,
      employee_id,
    } = req.body;
    const teacher = new Teacher({
      name,
      surname,
      date_of_birth,
      age,
      gender,
      joining_year,
      teaching_area,
      email,
      password,
      qualification,
      mobile,
      employee_id,
    });
    await teacher.save();
    res.json(teacher);
  } catch (error) {
    res.status(500).json({ message: "Failed to create teacher" });
  }
}

async function updateTeacher(req, res) {
  try {
    const id = req.params.id;
    const teacher = await Teacher.findById(id);
    if (!teacher) {
      res.status(404).json({ message: "Teacher not found" });
      return;
    }
    const {
      name,
      surname,
      date_of_birth,
      age,
      gender,
      joining_year,
      teaching_area,
      email,
      password,
      qualification,
      mobile,
      employee_id,
    } = req.body;
    teacher.name = name;
    teacher.surname = surname;
    teacher.date_of_birth = date_of_birth;
    teacher.age = age;
    teacher.gender = gender;
    teacher.joining_year = joining_year;
    teacher.teaching_area = teaching_area;
    teacher.email = email;
    teacher.password = password;
    teacher.qualification = qualification;
    teacher.mobile = mobile;
    teacher.employee_id = employee_id;

    await teacher.save();
    res.json(teacher);
  } catch (error) {
    res.status(500).json({ message: "Failed to update teacher" });
  }
}

async function deleteTeacher(req, res) {
  try {
    const id = req.params.id;
    const teacher = await Teacher.findById(id);
    if (!teacher) {
      res.status(404).json({ message: "Teacher not found" });
      return;
    }
    await teacher.remove();
    res.json({ message: "Teacher deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete teacher" });
  }
}

export default {
  //Other Routes
  getTeachers,
  createTeacher,
  updateTeacher,
  deleteTeacher,
};
