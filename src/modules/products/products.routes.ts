import { Router } from "express";
import ProductsController from "./products.controller";

const router = Router();

router.get("/", ProductsController.getAll);
router.post("/", ProductsController.create);

export default router;
