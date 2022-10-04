import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Client = sequelize.define(
  "clients",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    full_name: { type: DataTypes.STRING },
    short_name: { type: DataTypes.STRING },
    rut: { type: DataTypes.STRING },
    contact_name: {
      type: DataTypes.STRING,
      defaultValue: "Sin Contacto",
    },
    phone: { type: DataTypes.STRING,
    defaultValue: "Sin Telefono"
    },
    email: { type: DataTypes.STRING,
      defaultValue: "Sin Email"
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
