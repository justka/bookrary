import "./Text.scss";
import Typography from "@mui/material/Typography";

export function Text({
  text,
  variant = "p",
}: {
  text: string;
  variant?: "h1" | "p" | "span";
}) {
  switch (variant) {
    case "h1": {
      return <Typography variant={variant}>{text}</Typography>;
    }
    case "span": {
      return <span className="text__text text__text--span">{text}</span>;
    }
    default: {
      return <p className="text__text text__text--p">{text}</p>;
    }
  }
}
