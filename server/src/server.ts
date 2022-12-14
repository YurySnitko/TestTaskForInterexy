import { ServerError } from "./ServerError";
import cors from "cors";
import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { router } from "./user/routes";
import("./auth/controller");

export const startServer = () => {
  dotenv.config();

  const app: Express = express();
  const port = process.env.PORT;

  app.use(cors());
  app.use("*", bodyParser.json());
  app.use("/", router);

  app.use(
    (err: ServerError, req: Request, res: Response, next: NextFunction) => {
      if (err.status === 400) {
        res.status(400).json({message: "Wrong email or password"})
      } else {
        res
        .status(err.status || 500)
        .send(`<h1>Oops! Something goes wrong...</h1><h4>Error message: ${err.message}</h4>`);
      }
    }
  );

  app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
  });
};
