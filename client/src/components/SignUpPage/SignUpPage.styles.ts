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

export const Form = styled("form")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;

export const IconContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 90px;
`;

export const NavLinkTextWrapper = styled("div")`
  & a {
    text-decoration: none;
    color: #1976d2;
    font-weight: 600;
  }

  & a:hover {
    text-decoration: underline;
    color: #42a5f5;
  }
`;
