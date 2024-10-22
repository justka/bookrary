import { default as MaterialButton } from "@mui/material/Button";

export function Button({ text }) {
  return <MaterialButton variant="contained">{text}</MaterialButton>;
}
