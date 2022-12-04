import { TextFieldProps } from "@mui/material";
import { FieldValues, UseControllerProps } from "react-hook-form";

export type ControlledTextFieldProps<T extends FieldValues> = TextFieldProps &
  UseControllerProps<T>;
