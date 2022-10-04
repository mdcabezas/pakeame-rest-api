import { sequelize } from "../src/database/database.js";
import { Ticket, TicketItem, Item, Ot, Customer, Status, Client } from "../src/models/indexModels.js";

// Tickets
const ticket1a = 
  {
    start_date: "2022-06-19T17:07:45",
    subject: "Robo de medidor [1 visita]",
    body: "Cañerias tuercas , terminales, llaves de paso",
    end_date: "2022-06-19T19:03:05"
  }

const ticket1b = 
  {
    start_date: "2022-06-20T06:01:59",
    subject: "Robo de medidor [2 visita]",
    body: "Instalación de medidores",
    end_date: "2022-06-20T06:47:23",
  }

const ticket2a =
  {
    start_date: "2022-06-20T08:06:33",
    subject: "Fuga de Gas [1 visita]",
    body: "Detección de fuga con camara térmica",
    end_date: "2022-06-20T08:29:11",
    ot_id: 1
  }
const ticket2b =
  {
    start_date: "2022-06-20T11:55:34",
    subject: "Fuga de Gas [2 visita]",
    body: "Cambio de válvula de gas",
    end_date: "2022-06-20T12:38:22",
    ot_id: 2
  }
/*
// Items


const items = [
  {
    full_name: "Cañería de Cobre 3/4 Pulgadas 6 milimetros Tipo M",
    short_name: "Cañería 3/4\" 6 m Tipo M",
    code: "CANE1292447",
    brand: "Koalition",
    isactive: true,
  },
  {
    full_name: "Regulador para gas Cemco de 45kg de metal de dos etapas",
    short_name: "Regulador gas 45kg",
    code: "REGU11166",
    brand: "Cemco",
    isactive: true,
  },
];
*/
const itemNuevo = {
  full_name: "Cañería Cobre L  1 pulgada x 6 metros",
  short_name: "Cañería Cobre L 1\" x 6m",
  code: "CANE1P6M",
  brand: "Gd Cooper",
  is_active: true,
};

const otNuevo = {
  code: "120582763",
  sector: "072101",
  movil: "20901",
  comments: "Un comentario",
  description: "Fuga",
  detail: "100 Cilindro",
  date:"2022-06-20T12:38:22.001Z",
  is_active: true,
  client_id:1,
  status_id:1,
  customer_id:1  
};

const customerNuevo = {
  name:"Cintya Muñoz",
  code:"7987324",
  address: "Segovia 2164 Casa, Curico",
  reference:"Cerca de Sede",
  phone:"972251024"
}

const statusNuevo = {
  name:"Abierto",
  is_active: true
}

const clientNuevo = {
  full_name:"Empresas Lipigas S.A.",
  short_name:"Lipigas",
  rut: "96928510-K",
  contact_name:"Maria Josefa Ayarza",
  phone:"6006009200",
  email:"sacweb@lipigas.cl",
}


sequelize.sync({ force: false })
.then(() => console.log("Conexión establecida..."))
.then(() => Item.create(itemNuevo))
.catch((e)=>console.log(e))
//.then(() => items.forEach(item => Item.create(item)))
//.then(() => addresses.forEach(address => Address.create(address)))


/*

.then(async () => {

    //const ticket = await Ticket.create(ticket1a);
    
    
    //const itm3 = await Item.findByPk(3);
    
    //console.log(tkt.dataValues)
    const tkt = await Ticket.findByPk(6);
    const tickets = await tkt.getItems({ attributes: ['short_name', 'code'] });
    tickets.forEach(t => console.log(t.dataValues.ticket_item.dataValues))
    
    //const tkt = await Ticket.create(ticket2a);
///////////////////////////////////////////////////////////
//    const itm1 = await Item.findByPk(1);
//    const tkt6 = await Ticket.findByPk(6);
//    await tkt6.addItems(itm1, { through: { quantity: 8, unit_cost: 6645 }});
///////////////////////////////////////////////////////////

})

*/