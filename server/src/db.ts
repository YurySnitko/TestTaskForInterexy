import mongoose from "mongoose";

export const connectDb = async () => {
  mongoose.Promise = global.Promise;
  mongoose.connection.on("error", (error) => console.log(error));
  await mongoose.connect(`${process.env.MONGODB_URL}`);
};
