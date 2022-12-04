import { CircularProgress } from "@mui/material";
import { FC } from "react";
import * as S from "./Loader.styles";

export const Loader: FC = () => {
  return (
    <S.Container>
      <CircularProgress />
    </S.Container>
  );
};
