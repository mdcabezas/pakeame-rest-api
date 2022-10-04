import { Employee, Role } from "../models/indexModels.js";

export async function createEmployeeRole(req, res) {
  try {
    const { employee, roles } = req.body;
    const findEmployee = await Employee.findByPk(employee);
    roles.forEach(async (r) => {
      let findRole = await Role.findByPk(r);
      let addData = await findEmployee.addRoles(findRole);
      console.log("addData ==>", addData);
    });
    res.json(findEmployee);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getEmployeeRole(req, res) {
  try {
    const employeeRoleId = await Employee.findByPk(req.params.id);
    const employeeRole = await employeeRoleId.getRoles({
      attributes: ["id", "name"],
    });
    res.json(employeeRole);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
