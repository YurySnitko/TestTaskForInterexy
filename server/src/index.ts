import { connectDb } from "./db";
import { startServer } from "./server";
import dotenv from "dotenv"

dotenv.config()

async function init() {
  await connectDb();
  startServer();
}

init();
