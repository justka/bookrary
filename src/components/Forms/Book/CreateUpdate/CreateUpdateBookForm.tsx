import { FORM_FIELD_NAME } from "constants/formFieldName";
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
      name: FORM_FIELD_NAME.AUTHOR,
      required: true,
    },
    {
      formFieldType: FORM_FIELD_TYPE.INPUT,
      label: "Title",
      name: FORM_FIELD_NAME.TITLE,
      required: true,
    },
    {
      formFieldType: FORM_FIELD_TYPE.INPUT,
      label: "Publish year",
      name: FORM_FIELD_NAME.PUBLISH_YEAR,
      required: true,
    },
    {
      formFieldType: FORM_FIELD_TYPE.INPUT,
      label: "Pages quantity",
      name: FORM_FIELD_NAME.PAGES_QUANTITY,
      required: true,
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
