import { Pagination } from "@mui/material";
import { FC, useEffect, useState } from "react";
import useCharactersData from "../../hooks/useCharactersData";
import { CharacterItem } from "../CharacterItem/CharacterItem";
import { Loader } from "../Loader/Loader";
import * as S from "./HomePage.styles";
import { Character, CharacterResponseData } from "./HomePage.types";

export const HomePage: FC = () => {
  // const [characters, setCharacters] = useState<Character[]>();
  const [page, setPage] = useState<number>(1);
  const { charactersData, isLoading } = useCharactersData(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  // const [totalPagesCount, setTotalPagesCount] = useState<number>();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // useEffect(() => {
  //   const fetchCharacters = async () => {
  //     const response = await fetch(
  //       `https://rickandmortyapi.com/api/character/?page=${page}`
  //     );
  //     const data: CharacterResponseData = await response.json();
  //     setCharacters(data.results);
  //   };

  //   fetchCharacters();
  // }, [page]);

  // useEffect(() => {
  //   const fetchCharacters = async () => {
  //     const response = await fetch("https://rickandmortyapi.com/api/character");
  //     const data: CharacterResponseData = await response.json();
  //     setTotalPagesCount(data.info.pages);
  //   };

  //   fetchCharacters();
  // }, []);

  return (
    <>
      {!isLoading ? (
        <S.Container>
          <Pagination
            count={charactersData?.info.pages}
            page={page}
            onChange={handleChange}
            shape="rounded"
            variant="outlined"
            color="primary"
          />
          <S.CharactersContainer>
            {charactersData?.results.map((character) => (
              <CharacterItem
                key={character.id}
                id={character.id}
                name={character.name}
                image={character.image}
              />
            ))}
          </S.CharactersContainer>
        </S.Container>
      ) : (
        <Loader />
      )}
    </>
  );
};
