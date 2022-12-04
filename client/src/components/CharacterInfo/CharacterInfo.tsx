import {
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mapCharacterInfo } from "../../helpers/mapCharacterInfo";
import { Character } from "../HomePage/HomePage.types";
import { Loader } from "../Loader/Loader";
import * as S from "./CharacterInfo.styles";

export const CharacterInfo: FC = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data: Character = await response.json();
      setCharacter(data);
    };

    fetchCharacter();
  }, [id]);

  return (
    <>
      {character ? (
        <S.Container>
          <Card sx={{ width: 400 }}>
            <CardMedia
              component="img"
              height={250}
              image={character.image}
              alt={character.name}
            />
            <CardContent>
              <Typography variant="h5" component="div" align="center">
                {character.name}
              </Typography>
              <List>
                {Object.entries(mapCharacterInfo(character)).map((infoItem) => (
                  <ListItem key={infoItem[0]}>
                    <ListItemText
                      primary={infoItem[0]}
                      secondary={infoItem[1]}
                      primaryTypographyProps={{
                        variant: "caption",
                        color: "GrayText",
                      }}
                      secondaryTypographyProps={{ variant: "body1" }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </S.Container>
      ) : (
        <Loader />
      )}
    </>
  );
};
