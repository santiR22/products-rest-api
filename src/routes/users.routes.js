import { Router } from "express";
import { createUser } from "../controllers/user.controller";
import { authjwt, verifySignUp } from "../middlewares";

const router = Router();

router.post(
  "/",
  [authjwt.verifyToken, authjwt.isAdmin, verifySignUp.checkRolesExisted],
  createUser
);

export default router;
