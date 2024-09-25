import React from "react";
import ReactDOM from "react-dom/client";
import "styles/reset.css";
import { Text } from "ui/Text/Text";
import { BooksList } from "components/BooksList/BooksList";
import { Container } from "@mui/material";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Container maxWidth="sm">
        <Text text="Bookrary" variant="h1" />
        <BooksList />
      </Container>
    </React.StrictMode>
  );
}
