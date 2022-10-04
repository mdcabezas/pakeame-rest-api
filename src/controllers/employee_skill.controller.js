import { Employee, Skill } from "../models/indexModels.js";

export async function createEmployeeSkill(req, res) {
  try {
    const { employee, skills } = req.body;
    const findEmployee = await Employee.findByPk(employee);
    skills.forEach(async (s) => {
      let findSkill = await Skill.findByPk(s);
      let addData = await findEmployee.addSkills(findSkill);
      console.log("addData ==>", addData);
    });
    res.json(findEmployee);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getEmployeeSkill(req, res) {
  try {
    const employeeSkillId = await Employee.findByPk(req.params.id);
    const employeeSkill = await employeeSkillId.getSkills({
      attributes: ["id", "name"],
    });
    res.json(employeeSkill);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
