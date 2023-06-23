import React, { MouseEventHandler } from "react";
import { CardContainerStyle, CardStyle } from "./style";
import Container from "../../container";

interface props {
  children: JSX.Element | React.ReactElement | JSX.Element[] | string;
  width?: string;
  height?: string;
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  align?: string;
  margin?: string;
  justify?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  borderRadius?: string;
  opacity?: string;
  color?: string;
  boxShadow?: string;
  padding?: string;
  typeCard: "CardDefault" | "CardStyle_1";

  resWidth?: string;
  resHeight?: string;
  resFlexDirection?: string;
  resMargin?: string;
  resPadding?: string;
  resAlign?: string;
}

const Card: React.FC<props> = ({
  children,
  width,
  height,
  flexDirection,
  align,
  margin,
  justify,
  onClick,
  borderRadius,
  opacity,
  color,
  boxShadow,
  padding,
  typeCard,

  resFlexDirection,
  resHeight,
  resWidth,
  resMargin,
  resPadding,
  resAlign,
}) => {
  return (
    
      <CardStyle
        width={width}
        height={height}
        flexDirection={flexDirection}
        align={align}
        justify={justify}
        margin={margin}
        onClick={onClick}
        boxShadow={boxShadow}
        color={color}
        opacity={opacity}
        borderRadius={borderRadius}
        className={typeCard}
        resFlexDirection={resFlexDirection}
        resHeight={resHeight}
        resWidth={resWidth}
        resMargin={resMargin}
        resPadding={resPadding}
        resAlign={resAlign}
      >
        <CardContainerStyle
          width={width}
          height={height}
          flexDirection={flexDirection}
          align={align}
          justify={justify}
          margin={margin}
          onClick={onClick}
          boxShadow={boxShadow}
          color={color}
          opacity={opacity}
          borderRadius={borderRadius}
          padding={padding}
          className={typeCard}
          resFlexDirection={resFlexDirection}
          resHeight={resHeight}
          resWidth={resWidth}
          resMargin={resMargin}
          resPadding={resPadding}
          resAlign={resAlign}
        >
          {children}
        </CardContainerStyle>
      </CardStyle>
    
  );
};

export default Card;
