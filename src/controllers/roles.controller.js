import { Role} from "../models/indexModels.js";

export async function getRoles(req, res) {
  try {
    const roles = await Role.findAll({
    //  atributes: ["id", "name", "priority", "description", "deliverydate"],
    });
    res.json(roles);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createRole(req, res) {
  //const { name, code, address, reference, phone } = req.body;
  try {
    let newRole = await Role.create(req.body);
    return res.json(newRole);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export async function getRole(req, res) {
  const { id } = req.params;
  try {
    const role = await Role.findOne({
      where: { id },
    });
    res.json(role);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
