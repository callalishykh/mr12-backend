import UserModel from "../../model/user/index.js";
import UserFollowerModel from "../../model/user/userFollower.js";

const UserController = {
  create: async (req, res) => {
    const payload = req.body;

    const user = await UserModel.create({
      name: payload.name,
      email: payload.email,
      password: payload.password,
    });

    res.json({
      message: "User created",
      user,
    });
  },

  getOne: async (req, res) => {
    const user = await UserModel.findByPk(1, {
      include: ["followings", "followers"],
    });

    res.json({ user });
  },

  update: async (req, res) => {
    const payload = req.body;
    const params = req.params;

    const user = await UserModel.findByPk(params.userId);
    if (!user) {
      return res.status(404).json({
        message: "NO data found",
      });
    }

    user.name = payload.name;
    user.email = payload.email;
    user.password = payload.password;

    await user.save();

    res.json({
      message: "User updated",
      user,
    });
  },
  follow: async (req, res) => {
    const { userId, followId } = req.body;

    await UserFollowerModel.create({
      followeeId: followId,
      followerId: userId,
    });

    return res.json({ message: "User followed" });
  },
};

export default UserController;
