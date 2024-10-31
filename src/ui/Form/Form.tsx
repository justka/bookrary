import { FORM_FIELD_TYPE } from "constants/formFieldType";
import { Field, Form as ReactFinalForm } from "react-final-form";
import { Button } from "ui/Button/Button";
import { Input } from "ui/Input/Input";
import { Message } from "ui/Message/Message";
import { validateFormFieldValue } from "utils/validateFormFieldValue";

export function Form({ fields, onSubmit }) {
  return (
    <ReactFinalForm
      onSubmit={onSubmit}
      render={({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            {fields.map((field, index: number) => {
              switch (field.formFieldType) {
                case FORM_FIELD_TYPE.FORM_SUBMISSION: {
                  return (
                    <Button
                      key={field.label}
                      text={field.label}
                    />
                  );
                }
                case FORM_FIELD_TYPE.INPUT: {
                  return (
                    <Field
                      key={field.name}
                      name={field.name}
                      // TODO: Trim value on blur
                      validate={(value) =>
                        validateFormFieldValue({
                          name: field.name,
                          required: field.required,
                          value,
                        })
                      }
                    >
                      {(fieldRenderProps) => {
                        return (
                          <Input
                            label={field.label}
                            meta={fieldRenderProps.meta}
                            name={fieldRenderProps.input.name}
                            onBlur={fieldRenderProps.input.onBlur}
                            onChange={fieldRenderProps.input.onChange}
                            onFocus={fieldRenderProps.input.onFocus}
                            required={field.required}
                            value={fieldRenderProps.input.value}
                          />
                        );
                      }}
                    </Field>
                  );
                }
                default: {
                  return (
                    <Message
                      key={`unsupportedFieldType-${index}`}
                      text={`Unsupported field type: "${field.formFieldType}"`}
                    />
                  );
                }
              }
            })}
          </form>
        );
      }}
    />
  );
}
