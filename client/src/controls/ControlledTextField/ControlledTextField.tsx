import { TextField } from "@mui/material";
import { FieldValues, useController } from "react-hook-form";
import { ControlledTextFieldProps } from "./ControlledTextField.types";

export const ControlledTextField = <T extends FieldValues>({
  name,
  control,
  rules,
  ...rest
}: ControlledTextFieldProps<T>) => {
  const { field } = useController<T>({ name, control, rules });

  return (
    <TextField
      onChange={field.onChange}
      value={field.value}
      name={field.name}
      onBlur={field.onBlur}
      inputRef={field.ref}
      {...rest}
    />
  );
};
