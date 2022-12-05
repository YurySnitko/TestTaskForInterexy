import mongoose from "mongoose";
import dotenv from "dotenv";

export const connectDb = async () => {
  dotenv.config()
  await mongoose.connect(`${process.env.MONGODB_URL}`);
  mongoose.connection.on("error", (error) => console.log(error));
  mongoose.Promise = global.Promise;
};
