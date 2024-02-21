import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const UserModel = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING(100),
    },
    email: {
      type: DataTypes.STRING(100),
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  { paranoid: true }
);
export default UserModel;
