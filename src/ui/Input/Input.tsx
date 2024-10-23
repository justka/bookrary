import { TextField } from "@mui/material";

export function Input({ label, name }) {
  const id = `input-${name}-${label}`;

  return (
    <TextField
      fullWidth
      id={id}
      label={label}
      name={name}
      variant="standard"
    />
  );
}
