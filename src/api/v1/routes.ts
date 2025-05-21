import { Router } from "express";

import userRoutes from "../../modules/users/users.routes";

const router = Router();

// All routes start with /api/v1
router.use("/users", userRoutes);

export default router;
