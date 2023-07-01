import React, { useState } from "react";
import { MoleculeInput } from "../../molecule";
import { Button } from "../../atom";





interface props {
  children: string[] | JSX.Element[] | React.ReactElement[];

  LabelProps: {
    

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




const AuthenticationOrganisme: React.FC<props> = ({  LabelProps, InputProps, children }) => {

  const [useChildren, setChildren] = useState<(string | JSX.Element)[] | undefined>();

  
    children.forEach((child, index) => {
      // Verifique se o elemento JSX possui propriedades
      if (React.isValidElement(child)) {
        // Acesse as propriedades usando child.props
        const childProps = child.props;
        console.log(childProps); // Exemplo de acesso às props do elemento

      }
    });

    


  
  
  

  return (
    <>
      

      <MoleculeInput
        LabelProps={{
          height: LabelProps.height,
          color: LabelProps.color,
          padding: LabelProps.padding,
          display: LabelProps.display,
          fontSize: LabelProps.fontSize,
          margin: LabelProps.margin,
          placeholder: LabelProps.placeholder,
          textAlign: LabelProps.placeholder,
         
        }}

        InputProps={{
          height: InputProps.height,
          id: InputProps.id,
          inputtype: InputProps.inputtype,
          name: InputProps.name,
          width: InputProps.width,
        }}
      >
        {children[1]}
      </MoleculeInput>

      {useChildren}  

      <Button></Button>
    </>
  );
};

export default AuthenticationOrganisme;
