import { connectDb } from "./db";
import { startServer } from "./server";

async function init() {
  await connectDb();
  startServer();
}

init();
