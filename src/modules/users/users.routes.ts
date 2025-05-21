import { Router } from "express";
import UserController from "./users.controller";

const router = Router();

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getById);

export default router;
