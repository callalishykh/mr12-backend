import UserModel from "../../model/user/index.js";
import jwt from "jsonwebtoken";
const AuthController = {
  login: async (req, res) => {
    const payload = req.body;

    const user = await UserModel.findOne({
      where: { email: payload.email, password: payload.password },
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
      },
      "kakakakakka"
    );

    res.json({
      message: "User Logged in",
      token,
    });
  },
};

export default AuthController;
