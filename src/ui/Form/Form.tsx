import { FORM_FIELD_TYPE } from "constants/formFieldType";
import { Form as ReactFinalForm, Field } from "react-final-form";
import { Button } from "ui/Button/Button";
import { Input } from "ui/Input/Input";
import { Message } from "ui/Message/Message";

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
                  return <Button key={field.label} text={field.label} />;
                }
                case FORM_FIELD_TYPE.INPUT: {
                  return (
                    <Field key={field.name} name={field.name}>
                      {(props) => {
                        return (
                          <div>
                            <Input
                              label={field.label}
                              name={props.input.name}
                            />
                          </div>
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
