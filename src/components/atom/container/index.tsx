import { ReactElement } from "react";
import { ContainerStyle } from "./style";

interface props {
  children: JSX.Element | ReactElement | ReactElement[];
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

  resMargin?: string;
  resWidth?: string;
  resHeight?: string;
  resPadding?: string;
  resAlign?: string;
  resJustify?: string;
  resFlexDirection?: string;
  resDisplay?: string;
}

const Container: React.FC<props> = ({
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

  resAlign,
  resHeight,
  resMargin,
  resPadding,
  resWidth,
  resJustify,
  resFlexDirection,
  resDisplay,
}) => {
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
