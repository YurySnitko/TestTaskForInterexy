import { Button, CircularProgress } from "@mui/material";
import { FC } from "react";
import { useAppSelector } from "../../store/hooks";
import { selectIsLoading } from "../../store/selectors/authSelectors";
import { SubmitButtonProps } from "./SubmitButton.types";

export const SubmitButton: FC<SubmitButtonProps> = ({ label }) => {
  const isLoading = useAppSelector(selectIsLoading);

  return (
    <Button
      variant="contained"
      type="submit"
      fullWidth
      endIcon={isLoading && <CircularProgress />}
      disabled={isLoading}
    >
      {label}
    </Button>
  );
};
