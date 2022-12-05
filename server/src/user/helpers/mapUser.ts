import { UserWithID } from "../types";

export const mapUser = ({ _id, email, firstName, lastName }: UserWithID) => ({
  id: _id,
  email,
  firstName,
  lastName,
});
