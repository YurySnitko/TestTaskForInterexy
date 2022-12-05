import { Types } from "mongoose";

export type User = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
};

export type UserWithID = {
  _id: Types.ObjectId;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
};

export type UserInstanceMethods = {
  isValidPassword: (password: string) => Promise<boolean>;
};
