import { Task} from "../models/indexModels.js";

export async function getTasks(req, res) {
  try {
    const tasks = await Task.findAll({
    //  atributes: ["id", "name", "priority", "description", "deliverydate"],
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createTask(req, res) {
  //const { name, code, address, reference, phone } = req.body;
  try {
    let newTask = await Task.create(req.body);
    return res.json(newTask);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export async function getTask(req, res) {
  const { id } = req.params;
  try {
    const task = await Task.findOne({
      where: { id },
    });
    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getTasksPerWork(req, res) {
  const { work_id } = req.params;
  try {
    const tasks = await Task.findAll({
      where: { work_id },
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
