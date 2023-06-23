import React from "react";
import { ArticleStyle } from "./style";

interface props {
  children: JSX.Element | React.ReactElement;
  id?: string;
}

const ContentContainer: React.FC<props> = ({ children, id }) => {
  return <ArticleStyle id={id}>{children}</ArticleStyle>;
};

export default ContentContainer;
