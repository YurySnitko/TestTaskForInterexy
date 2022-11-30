import { FC, useEffect, useState } from "react";

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type CharacterResponseData = {
  info: {
    count: number;
    pages: number;
    next: null | string;
    prev: null | string;
  };
  results: Character[];
};

export const HomePage: FC = () => {
  const [characters, setCharacters] = useState<Character[]>();

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data: CharacterResponseData = await response.json();
      setCharacters(data.results);
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      {characters ? (
        characters.map((character) => <li>{character.name}</li>)
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};
