import { FormHTMLAttributes, ReactNode } from "react";
import { FormStyle } from "./style";

interface props extends FormHTMLAttributes<HTMLFormElement>{
  children: ReactNode;
  background?: string;
  width?: string;
  height?: string;
  display?: string;
  align?: string;
  justify?: string;
  flexDirection?: string;
}

export function Form(props: props){
  return (
    <FormStyle
      align={props.align}
      background={props.background}
      display={props.display}
      flexDirection={props.flexDirection}
      height={props.height}
      justify={props.justify}
      width={props.width}
      {...props}
    >
    </FormStyle>
  );
}

export default Form;
