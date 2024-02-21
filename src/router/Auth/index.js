import { Router } from "express";
import AuthController from "../../controller/Auth/index.js";

const authRouter = Router();

authRouter.post("/login", AuthController.login);
export default authRouter;
