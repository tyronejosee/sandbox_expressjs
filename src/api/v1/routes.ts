import { Router } from "express";

import userRoutes from "../../modules/users/users.routes";
import productRoutes from "../../modules/products/products.routes";
import categoryRoutes from "../../modules/categories/categories.routes";

const router = Router();

// All routes start with /api/v1
router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);

export default router;
