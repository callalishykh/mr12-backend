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
        id: user.id,
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SIGNATURE,
      {
        expiresIn: "40m",
      }
    );

    res.json({
      message: "User Logged in",
      token,
    });
  },
};

export default AuthController;
