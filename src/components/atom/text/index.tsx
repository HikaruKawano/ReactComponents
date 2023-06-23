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

  resMargin?: string;
}

const Text: React.FC<props> = ({
  children,
  color,
  padding,
  className,
  fontSize,
  margin,
  display,
  textAlign,

  resMargin,
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

      resMargin={resMargin}
    >
      {children}
    </TextStyle>
  );
};

export default Text;
