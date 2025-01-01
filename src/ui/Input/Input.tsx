import { TextField } from "@mui/material";
import { InputInterface } from "./Input.interface";

export function Input({
  label,
  meta,
  name,
  onBlur,
  onChange,
  onFocus,
  required,
  value,
}: InputInterface) {
  const id = `input-${name}-${label}`;
  const isValidationError = meta.touched && !!meta.error;

  return (
    <TextField
      error={isValidationError}
      fullWidth
      helperText={isValidationError ? meta.error : null}
      id={id}
      label={label}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      required={required}
      value={value}
      variant="standard"
    />
  );
}
