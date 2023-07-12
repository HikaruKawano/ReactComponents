import React from "react";
import { LinkStyle, propsStyleLink } from "./style";
import "./style.css";

interface props extends propsStyleLink {
  children?: JSX.Element | React.ReactElement | string | string[];
  to: string;
}

const Link = ({
  children,
  to,
}: props, props: props) => (
  <LinkStyle
    margin={props.margin}
    color={props.color}
    to={to}
    width={props.width}
    padding={props.padding}
    display={props.display}
    height={props.height}
    background={props.background}
    borderRadius={props.borderRadius}
  >
    {children}
  </LinkStyle>
);

export default Link;
