import { FORM_FIELD_TYPE } from "constants/formFieldType";
import { Form } from "ui/Form/Form";

export function CreateUpdateBookForm({ setListItems }) {
  // TODO: Store 'setListItems' in store
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

  const onSubmit = (values) => {
    console.log({ values });
    setListItems((items) => {
      return [...items, values];
    });
  };

  return <Form fields={fields} onSubmit={onSubmit} />;
}
