import { UserWithID } from "../user/types";

export const mapUser = ({ _id, email, firstName, lastName }: UserWithID) => ({
  id: _id,
  email,
  firstName,
  lastName,
});
