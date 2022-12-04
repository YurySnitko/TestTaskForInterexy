import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { CharacterItemProps } from "./CharacterItem.types";
import { useNavigate } from "react-router-dom";

export const CharacterItem: FC<CharacterItemProps> = ({ id, name, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/character/${id}`);
  };

  return (
    <Card sx={{ width: 250 }} onClick={handleClick}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={name} />
        <CardContent>
          <Typography variant="h5" component="div" align="center">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
