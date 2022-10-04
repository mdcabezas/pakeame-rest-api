import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";

const app = express();

// Import routes
// import taskRoutes from "./routes/tasks.routes.js";
import employeeSkillRoutes from "./routes/employee_skill.routes.js"
import employeeDepartmentRoutes from "./routes/employee_department.routes.js"
import employeeRoleRoutes from "./routes/employee_role.routes.js"
import taskEmployeeRoutes from "./routes/task_employee.routes.js"
import taskItemRoutes from "./routes/task_item.routes.js";
import customersRoutes from "./routes/customers.routes.js";
import itemsRoutes from "./routes/items.routes.js";
import employeesRoutes from "./routes/employees.routes.js";
import clientsRoutes from "./routes/clients.routes.js";
import rolesRoutes from "./routes/roles.routes.js";
import skillsRoutes from "./routes/skills.routes.js";
import statusesRoutes from "./routes/statuses.routes.js";
import departmentsRoutes from "./routes/departments.routes.js";
import worksRoutes from "./routes/works.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routes
// app.use("/v1.0/tasks", taskRoutes);
app.use("/v1.0/employee_skill", employeeSkillRoutes);
app.use("/v1.0/employee_department", employeeDepartmentRoutes);
app.use("/v1.0/employee_role", employeeRoleRoutes);
app.use("/v1.0/task_employee", taskEmployeeRoutes);
app.use("/v1.0/task_item", taskItemRoutes);
app.use("/v1.0/customers", customersRoutes);
app.use("/v1.0/items", itemsRoutes);
app.use("/v1.0/employees", employeesRoutes);
app.use("/v1.0/clients", clientsRoutes);
app.use("/v1.0/roles", rolesRoutes);
app.use("/v1.0/skills", skillsRoutes);
app.use("/v1.0/statuses", statusesRoutes);
app.use("/v1.0/departments", departmentsRoutes);
app.use("/v1.0/works", worksRoutes);
app.use("/v1.0/tasks", tasksRoutes);

export default app;
