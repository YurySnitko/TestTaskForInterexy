import { UserWithID } from "../types";

export const mapUser = ({ _id, email, firstname, lastname }: UserWithID) => ({
  id: _id,
  email,
  firstname,
  lastname,
});
