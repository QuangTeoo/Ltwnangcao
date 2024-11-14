import sequelize from "../DB/db.js";
import { DataTypes } from "sequelize";

const nhom = sequelize.define(
  "nhom",
  {
    idnhom: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ten: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "nhom",
    timestamps: false,
  }
);
module.exports = nhom;