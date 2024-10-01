import React from "react";
import ReactDOM from "react-dom/client";
import "styles/reset.css";
import { Text } from "ui/Text/Text";
import { BooksList } from "components/Lists/Books/BooksList";
import { Container } from "@mui/material";
import { CreateUpdateBookForm } from "components/Forms/Book/CreateUpdate/CreateUpdateBookForm";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Container maxWidth="sm">
        <Text text="Bookrary" variant="h1" />
        <BooksList />
        <CreateUpdateBookForm />
      </Container>
    </React.StrictMode>
  );
}
