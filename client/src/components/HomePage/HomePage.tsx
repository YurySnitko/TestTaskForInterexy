import { Pagination } from "@mui/material";
import React, { FC, useState } from "react";
import useCharactersData from "../../hooks/useCharactersData";
import { CharacterItem } from "../CharacterItem/CharacterItem";
import { Loader } from "../Loader/Loader";
import * as S from "./HomePage.styles";

export const HomePage: FC = () => {
  const [page, setPage] = useState<number>(1);
  const { charactersData, isLoading } = useCharactersData(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

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
