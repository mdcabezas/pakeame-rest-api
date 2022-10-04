import { Client} from "../models/indexModels.js";

export async function getClients(req, res) {
  try {
    const clients = await Client.findAll({
    //  atributes: ["id", "name", "priority", "description", "deliverydate"],
    });
    res.json(clients);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createClient(req, res) {
  //const { name, code, address, reference, phone } = req.body;
  try {
    let newClient = await Client.create(req.body);
    return res.json(newClient);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export async function getClient(req, res) {
  const { id } = req.params;
  try {
    const client = await Client.findOne({
      where: { id },
    });
    res.json(client);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
