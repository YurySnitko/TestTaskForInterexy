import jwt from "jsonwebtoken";
import { ServerError } from "../ServerError";
import { mapUser } from "./helpers/mapUser";
import { User } from "./types";
import { UserModel } from "./UserModel";

const signup = async ({ firstName, lastName, email, password }: User) => {
  const user = await UserModel.create({
    firstName,
    lastName,
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
    throw new ServerError("User not found", 404);
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
