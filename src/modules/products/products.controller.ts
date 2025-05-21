import { Request, Response } from "express";
import { asyncHandler } from "../../core";
import prisma from "../../db/client";

class ProductsController {
  getAll = asyncHandler(async (_req: Request, res: Response) => {
    const products = await prisma.product.findMany({
      include: { category: true },
    });
    res.status(200).json(products);
  });

  create = asyncHandler(async (req: Request, res: Response) => {
    const { name, price, categoryId } = req.body;
    const product = await prisma.product.create({
      data: { name, price, categoryId: categoryId },
    });
    res.status(201).json(product);
  });
}

export default new ProductsController();
