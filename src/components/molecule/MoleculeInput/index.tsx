import React from "react";
import { Input, Label } from "../../atom";


interface props {
  children: string | JSX.Element | React.ReactElement ;

  LabelProps: {
    LabelText?: string;
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

  InputProps: {
    inputtype?: string;
    width?: string;
    height?: string;
    placeholder?: string;
    name?: string;
    id?: string;
  };
}

const MoleculeInput: React.FC<props> = ({
  LabelProps,
  InputProps,
  children,
}) => {
  return (
    <>
      <Label
        height={LabelProps.height}
        color={LabelProps.color}
        padding={LabelProps.padding}
        className={LabelProps.className}
        fontSize={LabelProps.fontSize}
        margin={LabelProps.margin}
        display={LabelProps.display}
        textAlign={LabelProps.textAlign}
      >
       {children}
        
      </Label>
      <Input
        height={InputProps.height}
        id={InputProps.id}
        name={InputProps.name}
        inputtype={InputProps.inputtype}
        placeholder={InputProps.placeholder}
        width={InputProps.width}
      ></Input>
    </>
  );
};

export default MoleculeInput;
