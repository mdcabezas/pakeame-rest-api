import { Status} from "../models/indexModels.js";

export async function getStatuses(req, res) {
  try {
    const statuses = await Status.findAll({
    //  atributes: ["id", "name", "priority", "description", "deliverydate"],
    });
    res.json(statuses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createStatus(req, res) {
  //const { name, code, address, reference, phone } = req.body;
  try {
    let newStatus = await Status.create(req.body);
    return res.json(newStatus);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export async function getStatus(req, res) {
  const { id } = req.params;
  try {
    const status = await Status.findOne({
      where: { id },
    });
    res.json(status);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
