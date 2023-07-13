import { ReactNode } from "react";
import { ContainerStyle } from "./style";

interface propsContainer {
  children?: ReactNode;
  className?: string;

}

const Container = ({
  children,
  className,
  
}:propsContainer) => {
  return (
    <ContainerStyle className={className}>
      {children}
    </ContainerStyle>
  );
};

export default Container;
