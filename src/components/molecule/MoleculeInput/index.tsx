import React from "react";
import { Input, Label } from "../../atom";

interface props {
    children:  string | string[] | JSX.Element | React.ReactElement;
}

const MoleculeInput: React.FC<props> = ({
    children
}) => {
  return (
    <>
      <Label>{children}</Label>
      <Input></Input>
    </>
  );
};

export default MoleculeInput;
