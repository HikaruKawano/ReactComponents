

import { ReactNode } from "react";
import { TextStyle, propsStyleLabel } from "./style";

interface props extends propsStyleLabel {
  children: string | JSX.Element | React.ReactElement | ReactNode;
  className?: 'Email' | 'Password' | 'ConfirmPassoword';
}



const Label = ({
  children,
}:props, props: props) => {
  return (
    <TextStyle
      color={props.color}
      padding={props.padding}
      className={props.className}
      fontSize={props.fontSize}
      margin={props.margin}
      display={props.display}
      textAlign={props.textAlign}
      height={props.height}

    >
      {children}
    </TextStyle>
  );
};

export default Label;
