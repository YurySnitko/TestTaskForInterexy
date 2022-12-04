import { Types } from "mongoose";

export type User = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type UserWithID = {
  _id: Types.ObjectId;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type UserInstanceMethods = {
  isValidPassword: (password: string) => Promise<boolean>;
};
