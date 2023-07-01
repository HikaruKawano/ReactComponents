import React from "react";
import { AuthenticationOrganisme } from "../../Organism";
import { Container } from "../../atom";


interface props {
  children: string[] | JSX.Element[] | React.ReactElement[];

  LabelStyle: {
    placeholder?: string;
    height?: string;
    display?: "flex" | "none" | "block" | "inline";
    color?: string;
    padding?: string;
    className?: string;
    fontSize?: string;
    margin?: string;
    textAlign?: string;
  };

  InputStyle: {
    inputtype?: string;
    width?: string;
    height?: string;
    placeholder?: string;
    name?: string;
    id?: string;
  };

  ContainerStyle: {
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

    resMargin?: string;
    resWidth?: string;
    resHeight?: string;
    resPadding?: string;
    resAlign?: string;
    resJustify?: string;
    resFlexDirection?: string;
    resDisplay?: string;
  };
}

const LoginTemplate: React.FC<props> = ({ children, LabelStyle , InputStyle }) => {
  return (
    <Container>
      <AuthenticationOrganisme
        LabelProps={{
          height: LabelStyle.height,
          color: LabelStyle.color,
          padding: LabelStyle.padding,
          display: LabelStyle.display,
          fontSize: LabelStyle.fontSize,
          margin: LabelStyle.margin,
          placeholder: LabelStyle.placeholder,
          textAlign: LabelStyle.placeholder,
        }}
        InputProps={{
          height: InputStyle.height,
          id: InputStyle.id,
          inputtype: InputStyle.inputtype,
          name: InputStyle.name,
          width: InputStyle.width,
        }}
       
      >
       {children}
      </AuthenticationOrganisme>
    </Container>
  );
};

export default LoginTemplate;
