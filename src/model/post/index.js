import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import UserModel from "../user/index.js";

const PostModel = sequelize.define(
  "Post",
  {
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1000),
    },
  },
  { paranoid: true }
);
UserModel.hasMany(PostModel);
PostModel.belongsTo(UserModel);

export default PostModel;
