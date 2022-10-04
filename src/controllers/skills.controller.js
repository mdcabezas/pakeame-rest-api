import { Skill} from "../models/indexModels.js";

export async function getSkills(req, res) {
  try {
    const skills = await Skill.findAll({
    //  atributes: ["id", "name", "priority", "description", "deliverydate"],
    });
    res.json(skills);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createSkill(req, res) {
  //const { name, code, address, reference, phone } = req.body;
  try {
    let newSkill = await Skill.create(req.body);
    return res.json(newSkill);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export async function getSkill(req, res) {
  const { id } = req.params;
  try {
    const skill = await Skill.findOne({
      where: { id },
    });
    res.json(skill);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
