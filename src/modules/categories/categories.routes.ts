import { Router } from "express";
import CategoriesController from "./categories.controller";

const router = Router();

router.get("/", CategoriesController.getAll);
router.post("/", CategoriesController.create);

export default router;
