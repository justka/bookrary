import { FORM_FIELD_TYPE } from "constants/formFieldType";
import { Form as ReactFinalForm, Field } from "react-final-form";

export function Form({ fields, onSubmit }) {
  return (
    <ReactFinalForm
      onSubmit={onSubmit}
      render={({ handleSubmit, pristine, submitting }) => (
        <form onSubmit={handleSubmit}>
          {fields.map((field) => {
            switch (field.formFieldType) {
              case FORM_FIELD_TYPE.FORM_SUBMISSION: {
                return (
                  <div className="buttons" key={field.label}>
                    <button disabled={submitting || pristine} type="submit">
                      {field.label}
                    </button>
                  </div>
                );
              }
              case FORM_FIELD_TYPE.INPUT: {
                return (
                  <div key={field.name}>
                    <label>{field.label}</label>
                    <Field component="input" name={field.name} type="text" />
                  </div>
                );
              }
              default: {
                return (
                  <p key="unsupportedFieldTypeKey">Unsupported Field Type</p>
                  // TODO: Use <Message/> component to display above message
                );
              }
            }
          })}
        </form>
      )}
    />
  );
}
