import jwt from "jsonwebtoken";
import { Types } from "mongoose";

export const getToken = (_id: Types.ObjectId, email: string) => {
    return jwt.sign({ user: {_id, email} }, `${process.env.SECRET}`);
}