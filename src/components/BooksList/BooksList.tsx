import { List } from "ui/List/List";
import { generateRandomBooks } from "./BooksList.utils";

export function BooksList() {
  const listItems = generateRandomBooks({ quantity: 10 }).map((book, index) => {
    return {
      text: `${book.author} - ${book.title} (${book.publishYear}); ${book.pagesQuantity} stron`,
      value: String(index + 1),
    };
  });

  return <List listItems={listItems} />;
}
