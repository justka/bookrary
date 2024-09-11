import React from "react";
import ReactDOM from "react-dom/client";
import "styles/reset.css";
import { Text } from "ui/Text/Text";
import { BooksList } from "components/BooksList/BooksList";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Text text="Bookrary" variant="h1" />
      <BooksList />
    </React.StrictMode>
  );
}
