import React from "react";
import ReactDOM from "react-dom/client";
import "styles/reset.css";
import { Text } from "ui/Text/Text";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Text variant="h1" text="Hello, Bookrary!" />
    </React.StrictMode>
  );
}
