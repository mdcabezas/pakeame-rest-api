import { Employee} from "../models/indexModels.js";

export async function getEmployees(req, res) {
  try {
    const employees = await Employee.findAll({
    //  atributes: ["id", "name", "priority", "description", "deliverydate"],
    });
    res.json(employees);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createEmployee(req, res) {
  //const { name, code, address, reference, phone } = req.body;
  try {
    let newEmployee = await Employee.create(req.body);
    return res.json(newEmployee);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export async function getEmployee(req, res) {
  const { id } = req.params;
  try {
    const employee = await Employee.findOne({
      where: { id },
    });
    res.json(employee);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
/*
export const updateWork = async (req, res) => {
  try {
    const { id } = req.params;
    const { workId, date, body, subject } = req.body;

    const ticket = await Work.findByPk(id);
    ticket.workId = workId;
    ticket.date = new Date(date).getTime();
    ticket.body = body;
    ticket.subject = subject;
    await ticket.save();

    res.json(ticket);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteWork(req, res) {
  const { id } = req.params;
  try {
    await TicketItem.destroy({ where: { ticket_id: id } });
    // await TicketStaff.destroy({ where: { ticket_id: id } });

    await Work.destroy({ where: { id } });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getTicketItem(req, res) {
  const { id } = req.params;
  try {
    const ticketItem = await TicketItem.findAll({
      //attributes: ["id", "projectId", "name", "done"],
      where: { itemId: id },
    });
    res.json(ticketItem);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
*/