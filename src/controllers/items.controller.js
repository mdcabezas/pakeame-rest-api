import { Item } from "../models/indexModels.js";

export async function getItems(req, res) {
  try {
    const items = await Item.findAll({
    //  atributes: ["id", "name", "priority", "description", "deliverydate"],
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createItem(req, res) {
  //const { name, code, address, reference, phone } = req.body;
  console.log(req.body)
  try {
    let newItem = await Item.create(req.body);
    return res.json(newItem);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

/*
export async function createCustomer(req, res) {
  const { workId, date, body, subject } = req.body;
  try {
    let newCustomer = await Customer.create(
      {
        workId,
        date: new Date(date).getTime(),
        body,
        subject
      },
//   { fields: ["name", "priority", "description", "deliverydate"] }
    );
    return res.json(newCustomer);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}
*/
export async function getItem(req, res) {
  const { id } = req.params;
  try {
    const item = await Item.findOne({
      where: {
        id,
      },
    });
    res.json(item);
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