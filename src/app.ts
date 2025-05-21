import express, { Application, Request, Response } from "express";
import { requestLogger } from "./middlewares";
import apiv1Routes from "./api/v1/routes";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(requestLogger);
  }

  private routes(): void {
    this.app.get("/", (req: Request, res: Response) => {
      res.send("Hello from Express.js!");
    });

    this.app.use("/api/v1", apiv1Routes);
  }
}

export default new App().app;
