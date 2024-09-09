import React from "react";
import "./Text.scss";

export function Text({
  text,
  variant = "p",
}: {
  text: string;
  variant?: "h1" | "p" | "span";
}) {
  switch (variant) {
    case "h1": {
      return <h1 className="text__text text__text--h1">{text}</h1>;
    }
    case "span": {
      return <span className="text__text text__text--span">{text}</span>;
    }
    default: {
      return <p className="text__text text__text--p">{text}</p>;
    }
  }
}
