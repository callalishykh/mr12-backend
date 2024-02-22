import PostModel from "../model/post/index.js";
import UserModel from "../model/user/index.js";
import UserFollowerModel from "../model/user/userFollower.js";

const dbInit = async () => {
  await UserModel.sync({ alter: true, force: false });
  await PostModel.sync({ alter: true, force: false });
  await UserFollowerModel.sync({ alter: true, force: false });
};

export default dbInit;
