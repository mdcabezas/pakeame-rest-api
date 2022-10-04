import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Item = sequelize.define(
  "items",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    full_name: {
      type: DataTypes.STRING,
    },
    short_name: {
      type: DataTypes.STRING,
    },
    code: {
      type: DataTypes.STRING,
    },
    brand: {
      type: DataTypes.STRING,
      defaultValue: "Sin Marca",
    },
    cost: {
      type: DataTypes.FLOAT,
      defaultValue: 1,
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
