import { Task, Item } from "../models/indexModels.js";

export async function createTaskItem(req, res) {
  try {
    const { task, items } = req.body;
    const findTask = await Task.findByPk(task);
    items.forEach(async (i) => {
      let findItem = await Item.findByPk(i.id);
      let addData = await findTask.addItems(findItem, {
        through: { quantity: i.quantity, unit_cost: i.unit_cost },
      });
      console.log("addData ==>", addData);
    });
    res.json(findTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getTaskItem(req, res) {
  try {
    const taskItemId = await Task.findByPk(req.params.id);
    const taskItem = await taskItemId.getItems({
      attributes: ["id", "short_name", "code"],
    });
    res.json(taskItem);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
