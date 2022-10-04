import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Work = sequelize.define(
  "works",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    code: { type: DataTypes.STRING },
    sector: { type: DataTypes.STRING },
    movil: { type: DataTypes.STRING },
    comments: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    detail: { type: DataTypes.STRING },
    date: { type: DataTypes.STRING },
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
