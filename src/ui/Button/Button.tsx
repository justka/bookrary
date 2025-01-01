import { default as MaterialButton } from "@mui/material/Button";

interface ButtonInterface {
  text: string;
  type?: "button" | "submit";
}

export function Button({ text, type = "button" }: ButtonInterface) {
  return (
    <MaterialButton
      type={type}
      variant="contained"
    >
      {text}
    </MaterialButton>
  );
}
