

import { ReactNode } from "react";
import { TextStyle } from "./style";
import './style.css'

export interface LabelProps {
  children: string | JSX.Element | React.ReactElement | ReactNode[] ;
  color?: string;
  padding?: string;
  className?: string;
  fontSize?: string;
  margin?: string;
  display?: string;
  textAlign?: string;
  height?: string;
}



const Label: React.FC<LabelProps> = ({
  children,
  color,
  padding,
  className,
  fontSize,
  margin,
  display,
  textAlign,
  height,
  
}) => {
  return (
    <TextStyle
      color={color}
      padding={padding}
      className={className}
      fontSize={fontSize}
      margin={margin}
      display={display}
      textAlign={textAlign}
      height={height}
    >
      {children}
    </TextStyle>
  );
};

export default Label;
