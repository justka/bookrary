import { CreateUpdateBookForm } from "components/Forms/Book/CreateUpdate/CreateUpdateBookForm";
import { BooksList } from "components/Lists/Books/BooksList";
import { SpaceXModal } from "components/SpaceXModal/SpaceXModal";
import { Button } from "ui/Button/Button";
import { Text } from "ui/Text/Text";
import { useModal } from "@ebay/nice-modal-react";

export function Shelf() {
  const spaceXModal = useModal(SpaceXModal);
  return (
    <>
      <Text
        text="Bookrary"
        variant="h1"
      />
      <BooksList />
      <Button
        onClick={() => {
          spaceXModal.show();
        }}
        text="Open SpaceX Locations"
      />
      <CreateUpdateBookForm />
    </>
  );
}
