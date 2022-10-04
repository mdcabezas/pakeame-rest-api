import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Employee = sequelize.define(
  "employees",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    full_name: { type: DataTypes.STRING },
    short_name: { type: DataTypes.STRING },
    rut: { type: DataTypes.STRING },
    email: {
      type: DataTypes.STRING,
      defaultValue: "Sin Email",
    },
    personal_phone: {
      type: DataTypes.STRING,
      defaultValue: "Sin Telefono",
    },
    work_phone: {
      type: DataTypes.STRING,
      defaultValue: "Sin Telefono",
    },
    cost_hour: {
      type: DataTypes.FLOAT,
      defaultValue: 2222,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    underscored: true,
  },
  { timestamps: true  }
);
