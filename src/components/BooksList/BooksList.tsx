import { List } from "ui/List/List";

export function BooksList() {
  const books = [{ title: "Firefly lane" }];
  const listItems = books.map((book) => {
    return {
      text: book.title,
      value: book.title,
    };
  });

  return <List listItems={listItems} />;
}
