import { CheckboxProps } from "@mui/material";
import { FieldValues, UseControllerProps } from "react-hook-form";

export type ControlledCheckboxProps<T extends FieldValues> = CheckboxProps &
UseControllerProps<T> & {label: string};