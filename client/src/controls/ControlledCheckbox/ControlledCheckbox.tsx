import { Checkbox, FormControlLabel } from "@mui/material";
import { FieldValues, useController } from "react-hook-form";
import { ControlledCheckboxProps } from "./ControlledCheckbox.types";

export const ControlledCheckbox = <T extends FieldValues>({
  name,
  control,
  rules,
  label,
  ...rest
}: ControlledCheckboxProps<T>) => {
  const { field } = useController<T>({ name, control, rules });

  return (
    <FormControlLabel
      control={
        <Checkbox
          onChange={field.onChange}
          value={field.value}
          name={field.name}
          onBlur={field.onBlur}
          inputRef={field.ref}
          {...rest}
        />
      }
      label={label}
    />
  );
};
