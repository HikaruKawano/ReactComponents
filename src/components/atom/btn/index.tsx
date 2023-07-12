import React, { MouseEventHandler, ReactNode } from "react";
import { Button, propsStyleBtn } from "./style";

interface props extends propsStyleBtn {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLElement>;
}

const Btn = ({ children, onClick }: props, props: props) => {
  return (
    <Button
      background={props.background}
      height={props.height}
      width={props.width}
      margin={props.margin}
      onClick={onClick}
      color={props.color}
      display={props.display}
      padding={props.padding}
      justify={props.justify}
      align={props.align}
      resDisplay={props.resDisplay}
    >
      {children}
    </Button>
  );
};

export default Btn;
