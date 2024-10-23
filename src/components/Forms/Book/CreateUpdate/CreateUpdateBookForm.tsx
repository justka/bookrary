import { FORM_FIELD_TYPE } from "constants/formFieldType";
import { useDispatch } from "react-redux";
import { addBookToList } from "store/booksSlice";
import { Form } from "ui/Form/Form";
import { showNotification } from "utils/notification";

export function CreateUpdateBookForm() {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(addBookToList(values));
    showNotification();
  };

  const fields = [
    {
      formFieldType: FORM_FIELD_TYPE.INPUT,
      label: "Author",
      name: "author",
    },
    {
      formFieldType: FORM_FIELD_TYPE.INPUT,
      label: "Title",
      name: "title",
    },
    {
      formFieldType: FORM_FIELD_TYPE.INPUT,
      label: "Publish year",
      name: "publishYear",
    },
    {
      formFieldType: FORM_FIELD_TYPE.INPUT,
      label: "Pages quantity",
      name: "pagesQuantity",
    },
    {
      formFieldType: FORM_FIELD_TYPE.FORM_SUBMISSION,
      label: "Submit form",
    },
  ];

  return (
    <Form
      fields={fields}
      onSubmit={onSubmit}
    />
  );
}
