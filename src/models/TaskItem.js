import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const TaskItem = sequelize.define(
  "task_items",
  {
    quantity: {
      type: DataTypes.INTEGER,
    },
    unit_cost: {
      type: DataTypes.INTEGER,
    },
  },
  {
    underscored: true
  },
  {
    timestamps: true,
  }
);
