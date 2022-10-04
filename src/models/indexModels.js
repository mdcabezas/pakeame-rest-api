import { Task } from "./Task.js";
import { Item } from "./Item.js";
import { TaskItem } from "./TaskItem.js";
import { Work } from "./Work.js";
import { Client } from "./Client.js";
import { Customer } from "./Customer.js";
import { Status } from "./Status.js";
import { Employee } from "./Employee.js";
import { Skill } from "./Skill.js";
import { Role } from "./Role.js";
import { Department } from "./Department.js";

// Task <-- uno -a- muchos --> Work
Work.hasMany(Task, { foreignKey: "work_id", sourceKey: "id" });
Task.belongsTo(Work, { foreignKey: "work_id", targetId: "id" });

// Work <-- uno -a- muchos --> Client
Client.hasMany(Work, { foreignKey: "client_id", sourceKey: "id" });
Work.belongsTo(Client, { foreignKey: "client_id", targetId: "id" });

// Work <-- uno -a- muchos --> Status
Status.hasMany(Work, { foreignKey: "status_id", sourceKey: "id" });
Work.belongsTo(Status, { foreignKey: "status_id", targetId: "id" });

// Work <-- uno -a- muchos --> User
Customer.hasMany(Work, { foreignKey: "customer_id", sourceKey: "id" });
Work.belongsTo(Customer, { foreignKey: "customer_id", targetId: "id" });

// Task <-- muchos -a- muchos --> Item
Task.belongsToMany(Item, { through: TaskItem });
Item.belongsToMany(Task, { through: TaskItem });

// Task <-- muchos -a- muchos --> Employee
Task.belongsToMany(Employee, { through: "task_employees" });
Employee.belongsToMany(Task, { through: "task_employees" });

// Employee <-- muchos -a- muchos --> Skill
Employee.belongsToMany(Skill, { through: "employee_skills" });
Skill.belongsToMany(Employee, { through: "employee_skills" });

// Employee <-- muchos -a- muchos --> Role
Employee.belongsToMany(Role, { through: "employee_roles" });
Role.belongsToMany(Employee, { through: "employee_roles" });

// Employee <-- muchos -a- muchos --> Department
Employee.belongsToMany(Department, { through: "employee_departments" });
Department.belongsToMany(Employee, { through: "employee_departments" });

export {
  Task,
  Item,
  TaskItem,
  Work,
  Client,
  Customer,
  Status,
  Employee,
  Skill,
  Role,
  Department,
};
