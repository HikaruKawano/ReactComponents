import { ReactNode } from "react";
import { TextStyle, propsStyleText } from "./style";  

interface props extends propsStyleText {
  children: ReactNode;

}

const Text: React.FC<props> = ({children},props: propsStyleText) => {
  return (
    <TextStyle
      color={props.color}
      padding={props.padding}
      fontSize={props.fontSize}
      margin={props.margin}
      display={props.display}
      textAlign={props.textAlign}

      resMargin={props.resMargin}
    >
      {children}
    </TextStyle>
  );
};

export default Text;
