import { StyleInput, propsStyleInput } from "./style";
import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, propsStyleInput {
  inputtype?:
    | "text"
    | "password"
    | "number"
    | "email"
    | "date"
    | "checkbox"
    | "radio"
    | "file"
    | "submit"
    | "button"
    | "reset"
    | "image"
    | "color"
    | "range"
    | "search"
    | "tel"
    | "url"
    | "datetime-local"
    | "month"
    | "time"
    | "week";
  placeholder?: string;
  name?: string;
  id?: string;
  hasIcon?: boolean;
  width?: string;
  height?: string;
}

export function Input(props: InputProps) {
  return (
    <>
      <StyleInput
        type={props.inputtype}
        className="form__field inputSimple"
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
        required
        height={props.height}
        width={props.width}
        padding={props.padding}
        radius={props.radius}
        outline={props.outline}
        border={props.border}
        {...props}
      />
    </>
  );
}

export default Input;
