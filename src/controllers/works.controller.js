import { Work, Status} from "../models/indexModels.js";

export async function getWorks(req, res) {
  try {
    const works = await Work.findAll({
    //  atributes: ["id", "name", "priority", "description", "deliverydate"],
    include: Status
    });
    console.log("#works",works)
    res.json(works);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createWork(req, res) {
  //const { name, code, address, reference, phone } = req.body;
  try {
    let newWork = await Work.create(req.body);
    return res.json(newWork);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export async function getWork(req, res) {
  const { id } = req.params;
  try {
    const work = await Work.findOne({
      where: { id },
    });
    res.json(work);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
