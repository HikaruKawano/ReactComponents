import React from "react";
import { Input, Label } from "../../atom";

interface props {
    children:  string | string[] | JSX.Element | React.ReactElement;
    placeholder?: string
}

const MoleculeInput: React.FC<props> = ({
    children,
    placeholder,
}) => {
  return (
    <>
      <Label>{children}</Label>
      <Input placeholder={placeholder}></Input>
    </>
  );
};

export default MoleculeInput;
