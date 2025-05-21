import { Request, Response } from "express";
import { asyncHandler } from "../../core";
import prisma from "../../db/client";

class CategoriesController {
  getAll = asyncHandler(async (_req: Request, res: Response) => {
    const categories = await prisma.category.findMany({
      include: { products: true },
    });
    res.status(200).json(categories);
  });

  create = asyncHandler(async (req: Request, res: Response) => {
    const { name } = req.body;
    if (!name) res.status(400).json({ error: "Name is required" });
    const category = await prisma.category.create({ data: { name } });
    res.status(201).json(category);
  });
}

export default new CategoriesController();
