import { Paper as MuiPaper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Paper = styled(MuiPaper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
  width: 420px;
  gap: 20px;
`;
