import { Department} from "../models/indexModels.js";

export async function getDepartments(req, res) {
  try {
    const departments = await Department.findAll({
    //  atributes: ["id", "name", "priority", "description", "deliverydate"],
    });
    res.json(departments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createDepartment(req, res) {
  //const { name, code, address, reference, phone } = req.body;
  try {
    let newDepartment = await Department.create(req.body);
    return res.json(newDepartment);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export async function getDepartment(req, res) {
  const { id } = req.params;
  try {
    const department = await Department.findOne({
      where: { id },
    });
    res.json(department);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
