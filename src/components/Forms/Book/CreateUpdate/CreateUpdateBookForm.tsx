import { Form } from "ui/Form/Form";

export function CreateUpdateBookForm() {
  const fields = [
    {
      formFieldType: "input",
      // TODO: Put formFieldType to constants
      label: "Author",
      name: "author",
    },
    {
      formFieldType: "input",
      label: "Title",
      name: "title",
    },
    {
      formFieldType: "input",
      label: "Publish year",
      name: "publishYear",
    },
    {
      formFieldType: "input",
      label: "Pages quantity",
      name: "pagesQuantity",
    },
    {
      formFieldType: "formSubmission",
      label: "Submit form",
    },
  ];

  const onSubmit = (values) => console.log({ values });

  return <Form fields={fields} onSubmit={onSubmit} />;
}
