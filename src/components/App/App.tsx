import { Container } from "@mui/material";
import { CreateUpdateBookForm } from "components/Forms/Book/CreateUpdate/CreateUpdateBookForm";
import { BooksList } from "components/Lists/Books/BooksList";
import { generateRandomBooks } from "components/Lists/Books/components/ListContent/ListContent.utils";
import { useState } from "react";
import { Text } from "ui/Text/Text";

export function App() {
  const [listItems, setListItems] = useState(
    generateRandomBooks({ quantity: 2 })
  );

  return (
    <Container maxWidth="sm">
      <Text text="Bookrary" variant="h1" />
      <BooksList listItems={listItems} />
      <CreateUpdateBookForm setListItems={setListItems} />
    </Container>
  );
}
