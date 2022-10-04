import { Task, Employee } from "../models/indexModels.js";

export async function createTaskEmployee(req, res) {
  try {
    const { task, employees } = req.body;
    const findTask = await Task.findByPk(task);
    employees.forEach(async (e) => {
      let findEmployee = await Employee.findByPk(e);
      let addData = await findTask.addEmployees(findEmployee);
      console.log("addData ==>", addData);
    });
    res.json(findTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getTaskEmployee(req, res) {
  try {
    const taskEmployeeId = await Task.findByPk(req.params.id);
    const taskEmployee = await taskEmployeeId.getEmployees({
      attributes: ["id", "short_name", "rut"],
    });
    res.json(taskEmployee);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
