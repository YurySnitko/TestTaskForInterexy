import { ServerError } from "./types/ServerError";
import mongoose from "mongoose";
import cors from "cors";
import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { router } from "./user/routes";

dotenv.config();

mongoose.connect(`${process.env.MONGODB_URL}`);
mongoose.connection.on("error", (error) => console.log(error));
mongoose.Promise = global.Promise;

import("./auth/controller");

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use("*", bodyParser.json());
app.use("/", router);

app.use((err: ServerError, req: Request, res: Response, next: NextFunction) => {
  res
    .status(err.status || 500)
    .send(`<h1>Oops! Something goes wrong...</h1><h4>${err.message}</h4>`);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
