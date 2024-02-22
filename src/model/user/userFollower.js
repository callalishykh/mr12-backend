import UserModel from "./index.js";
import sequelize from "../../db/config.js";

const UserFollowerModel = sequelize.define("UserFollower", {});

UserFollowerModel.belongsTo(UserModel, { as: "follower" });
UserFollowerModel.belongsTo(UserModel, { as: "followee" });

UserModel.belongsToMany(UserModel, {
  through: UserFollowerModel,
  as: "followers",

  foreignKey: "followeeId",
});

UserModel.belongsToMany(UserModel, {
  through: UserFollowerModel,
  as: "followings",

  foreignKey: "followerId",
});

export default UserFollowerModel;
