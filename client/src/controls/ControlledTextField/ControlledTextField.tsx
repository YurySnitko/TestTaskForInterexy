import { TextField } from "@mui/material";
import { FieldValues, useController } from "react-hook-form";
import { ControlledTextFieldProps } from "./ControlledTextField.types";

export const ControlledTextField = <T extends FieldValues>({
  name,
  control,
  rules,
  ...rest
}: ControlledTextFieldProps<T>) => {
  const {
    field: { onChange, value, ...restFieldProps },
  } = useController<T>({ name, control, rules });

  return (
    <TextField
      onChange={onChange}
      value={value}
      {...restFieldProps}
      {...rest}
    />
  );
};
