import { StyleInput } from "./style";
import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
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
  width?: string;
  height?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  hasIcon?: boolean;
  padding?: string;
  radius?: string;
  outline?: string;
  border?: string;
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
