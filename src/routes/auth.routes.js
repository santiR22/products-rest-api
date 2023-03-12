import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller";
import { verifySignUp } from "../middlewares";

const router = Router();

router.post("/signin", signIn);
router.post(
  "/signup",
  [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted],
  signUp
);

export default router;
