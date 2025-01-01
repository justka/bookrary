import { FieldMetaState } from "react-final-form";

export interface InputInterface {
  label: string;
  meta: FieldMetaState<any>;
  name: string;
  onBlur: (event: any) => void;
  onChange: (event: any) => void;
  onFocus: () => void;
  required: boolean;
  value: string;
}
