import PostModel from "../model/post/index.js";
import UserModel from "../model/user/index.js";

const dbInit = async () => {
  await UserModel.sync({ alter: true, force: false });
  await PostModel.sync({ alter: true, force: false });
};

export default dbInit;
