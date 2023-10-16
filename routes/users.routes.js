import { Router } from "express";
import {
  getUsers,
  getUser,
  updateUser,
  newUser,
  deleteUser,
  LogIn,
  logOut,
  profile,
  verifyToken,
} from "../controllers/users.controllers.js";
import { authRequied } from "../middlewares/validateToken.js";
//import { validateSchema } from "../middlewares/validator.middleware.js";
//import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:userName", getUser);
router.post("/users", newUser); //register user
//router.post("/login", validateSchema(loginSchema), LogIn);
router.post("/login", LogIn);
router.post("/logout", logOut);
router.get("/profile", authRequied, profile);
router.get("/verify", verifyToken);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
