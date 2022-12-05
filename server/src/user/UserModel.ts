import { Schema, model, Model } from "mongoose";
import bcrypt from "bcrypt";
import { User, UserInstanceMethods } from "./types";

const UserSchema = new Schema<User, Model<User, {}, UserInstanceMethods>>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
});

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);

  this.password = hash;
  next();
});

UserSchema.methods.isValidPassword = async function (password: string) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
};

export const UserModel = model<User, Model<User, {}, UserInstanceMethods>>(
  "user",
  UserSchema
);
