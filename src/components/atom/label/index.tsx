import { TextStyle } from "./style";
import './style.css'

interface props {
  children: string | string[] | JSX.Element | React.ReactElement;
  color?: string;
  padding?: string;
  className?: string;
  fontSize?: string;
  margin?: string;
  display?: string;
  textAlign?: string;
}

const Label: React.FC<props> = ({
  children,
  color,
  padding,
  className,
  fontSize,
  margin,
  display,
  textAlign,
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
    >
      {children}
    </TextStyle>
  );
};

export default Label;
