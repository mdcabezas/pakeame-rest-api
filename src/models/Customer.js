import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Customer = sequelize.define(
  "customers",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING },
    code: { type: DataTypes.STRING },
    address: {
      type: DataTypes.STRING,
      defaultValue: "Sin Direccion",
    },
    reference: {
      type: DataTypes.STRING,
      defaultValue: "Sin Referencia",
    },
    phone: {
      type: DataTypes.STRING,
      defaultValue: "Sin Direccion",
    },    
  },
  {
    underscored: true,
  },
  { timestamps: true  }
);
