import { Request, Response } from "express";
import { asyncHandler } from "../../core";

const userService = {
  getAll: async () =>
    Promise.resolve([
      { id: "fd13e128-3767-4cea-96ec-41732066ef84", name: "User 1" },
      { id: "f185e5f7-787a-45ae-b043-06715347c4dc", name: "User 2" },
    ]),
  getById: async (id: string) => Promise.resolve({ id, name: "User 1" }),
};

class UserController {
  public getAllUsers = asyncHandler(async (req: Request, res: Response) => {
    const users = await userService.getAll();
    res.status(200).json(users);
  });

  getById = asyncHandler(async (req: Request, res: Response) => {
    const user = await userService.getById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  });
}

export default new UserController();
