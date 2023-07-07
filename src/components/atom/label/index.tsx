

import { ReactNode } from "react";
import { TextStyle } from "./style";
import './style.css'

export interface LabelProps {
  children: string | JSX.Element | React.ReactElement | ReactNode;
  color?: string;
  padding?: string;
  className?: 'Email' | 'Password' | 'ConfirmPassoword';
  fontSize?: string;
  margin?: string;
  display?: string;
  textAlign?: string;
  height?: string;
  props?: LabelProps;
}



const Label = ({
  children,
  props
}: LabelProps) => {
  return (
    <TextStyle
      color={props?.color}
      padding={props?.padding}
      className={props?.className}
      fontSize={props?.fontSize}
      margin={props?.margin}
      display={props?.display}
      textAlign={props?.textAlign}
      height={props?.height}

    >
      {children}
    </TextStyle>
  );
};

export default Label;
