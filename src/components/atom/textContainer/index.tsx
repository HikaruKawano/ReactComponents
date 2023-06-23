import React from "react";
import { ContainerText } from "./style";

interface props {
  w?: string;
  h?: string;
  children: JSX.Element | React.ReactElement | JSX.Element[];
}

const TextContainer: React.FC<props> = ({ w, h, children }) => {
  return (
    <ContainerText w={w} h={h}>
      {children}
    </ContainerText>
  );
};

export default TextContainer;
