import { CreateUpdateBookForm } from "components/Forms/Book/CreateUpdate/CreateUpdateBookForm";
import { BooksList } from "components/Lists/Books/BooksList";
import { Text } from "ui/Text/Text";
import { Container } from "@mui/material";

export function App() {
  return (
    <Container maxWidth="sm">
      <Text
        text="Bookrary"
        variant="h1"
      />
      <BooksList />
      <CreateUpdateBookForm />
    </Container>
  );
}
