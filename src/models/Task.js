import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Task = sequelize.define(
  "tasks",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    start_date: {
      type: DataTypes.DATE,
    },
    end_date: {
      type: DataTypes.DATE,
    },
    body: {
      type: DataTypes.STRING,
    },
    subject: {
      type: DataTypes.STRING,
    },
  },
  {
    underscored: true,
  },
  {
    timestamps: true,
  }
);

