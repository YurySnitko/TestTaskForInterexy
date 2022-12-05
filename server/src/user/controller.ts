import jwt from "jsonwebtoken";
import { MongooseError } from "mongoose";
import { ServerError } from "../ServerError";
import { mapUser } from "./helpers/mapUser";
import { User } from "./types";
import { UserModel } from "./UserModel";

const signup = async ({ firstname, lastname, email, password }: User) => {
    const user = await UserModel.create({
      firstname,
      lastname,
      email,
      password,
    });

  const body = { _id: user._id, email: user.email };
  const token = jwt.sign({ user: body }, `${process.env.SECRET}`);

  return token;
};

const login = async (email: string, password: string) => {
  const user = await UserModel.findOne({ email });

  if (!user) {
    throw new ServerError("User not found", 400);
  }

  const validate = await user.isValidPassword(password);

  if (!validate) {
    throw new ServerError("Wrong password", 400);
  }

  const body = { _id: user._id, email: user.email };
  const token = jwt.sign({ user: body }, `${process.env.SECRET}`);

  return token;
};

const read = async (id: string) => {
  const user = await UserModel.findById(id);

  if (!user) {
    throw new ServerError("User not found", 404);
  }

  return mapUser(user);
};

export default { signup, login, read };
