import React from "react";
import { LinkStyle } from "./style";
import "./style.css";

interface LinkProps {
  children?: JSX.Element | React.ReactElement | string | string[];
  color?: string;
  to: string;
  width?: string;
  padding?: string;
  display?: string;
  ClassName?: string;
  height?: string;
  background?: string;
  margin?: string;
  borderRadius?: string;
}

const navLink: React.FC<LinkProps> = ({
  children,
  color,
  to,
  width,
  padding,
  display,
  ClassName,
  height,
  background,
  margin,
  borderRadius,
}) => (
  <LinkStyle
    className={ClassName}
    margin={margin}
    color={color}
    to={to}
    width={width}
    padding={padding}
    display={display}
    height={height}
    background={background}
    borderRadius={borderRadius}
  >
    {children}
  </LinkStyle>
);

export default navLink;
