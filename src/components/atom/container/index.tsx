import { ReactNode } from "react";
import { ContainerStyle } from "./style";

export interface propsContainer {
  children: ReactNode;
  flexBasis?: string;
  padding?: string;
  background?: string;
  width?: string;
  height?: string;
  display?: string;
  align?: string;
  justify?: string;
  flexDirection?: string;
  borderRadius?: string;
  margin?: string;
  opacity?: string;
  className?: string;

  resMargin?: string;
  resWidth?: string;
  resHeight?: string;
  resPadding?: string;
  resAlign?: string;
  resJustify?: string;
  resFlexDirection?: string;
  resDisplay?: string;
}

const Container = ({
  children,
  flexBasis,
  padding,
  background,
  width,
  height,
  display,
  align,
  justify,
  flexDirection,
  borderRadius,
  margin,
  opacity,
  

  resAlign,
  resHeight,
  resMargin,
  resPadding,
  resWidth,
  resJustify,
  resFlexDirection,
  resDisplay,
}: propsContainer) => {
  return (
    <ContainerStyle
      flexBasis={flexBasis}
      padding={padding}
      background={background}
      width={width}
      height={height}
      display={display}
      align={align}
      justify={justify}
      flexDirection={flexDirection}
      borderRadius={borderRadius}
      margin={margin}
      opacity={opacity}
     

      resAlign={resAlign}
      resHeight={resHeight}
      resMargin={resMargin}
      resWidth={resWidth}
      resPadding={resPadding}
      resJustify={resJustify}
      resFlexDirection={resFlexDirection}
      resDisplay={resDisplay}
    >
      {children}
    </ContainerStyle>
  );
};

export default Container;
