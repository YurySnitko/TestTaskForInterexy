import mongoose from "mongoose";

export const connectDb = async () => {
  await mongoose.connect(`${process.env.MONGODB_URL}`);
  mongoose.connection.on("error", (error) => console.log(error));
  mongoose.Promise = global.Promise;
};
