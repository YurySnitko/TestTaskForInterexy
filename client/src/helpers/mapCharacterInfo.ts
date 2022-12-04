import { Character } from "../components/HomePage/HomePage.types";

export const mapCharacterInfo = ({
  status,
  species,
  gender,
  location,
  url,
  created,
}: Character) => ({
  status,
  species,
  gender,
  location: location.name,
  url,
  created,
});
