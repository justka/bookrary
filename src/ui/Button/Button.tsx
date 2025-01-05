import { default as MaterialButton } from "@mui/material/Button";

interface ButtonInterface {
  onClick?: () => void;
  text: string;
  type?: "button" | "submit";
}

export function Button({
  onClick = () => {},
  text,
  type = "button",
}: ButtonInterface) {
  return (
    <MaterialButton
      onClick={onClick}
      type={type}
      variant="contained"
    >
      {text}
    </MaterialButton>
  );
}
