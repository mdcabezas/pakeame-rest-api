import { Employee, Department } from "../models/indexModels.js";

export async function createEmployeeDepartment(req, res) {
  try {
    const { employee, departments } = req.body;
    const findEmployee = await Employee.findByPk(employee);
    departments.forEach(async (d) => {
      let findDepartment = await Department.findByPk(d);
      let addData = await findEmployee.addDepartments(findDepartment);
      console.log("addData ==>", addData);
    });
    res.json(findEmployee);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getEmployeeDepartment(req, res) {
  try {
    const employeeDepartmentId = await Employee.findByPk(req.params.id);
    const employeeDepartment = await employeeDepartmentId.getDepartments({
      attributes: ["id", "name"],
    });
    res.json(employeeDepartment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
