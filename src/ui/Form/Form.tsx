import { Form as ReactFinalForm, Field } from "react-final-form";

export function Form({ fields, onSubmit }) {
  return (
    <ReactFinalForm
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          {fields.map((field) => {
            switch (field.formFieldType) {
              case "input": {
                //TODO: cases add to consts
                return (
                  <div key={field.name}>
                    <label>{field.label}</label>
                    <Field name={field.name} component="input" type="text" />
                  </div>
                );
              }
              case "formSubmission": {
                return (
                  <div className="buttons" key={field.label}>
                    <button type="submit" disabled={submitting || pristine}>
                      {field.label}
                    </button>
                  </div>
                );
              }
              default: {
                return (
                  <p key="unsupportedFieldTypeKey">Unsupported Field Type</p>
                );
              }
            }
          })}
        </form>
      )}
    />
  );
}
