import React, { useEffect, useState, ReactNode, createContext } from "react";
import { MoleculeInput } from "../../molecule";
import { Button } from "../../atom";


interface props {
  children: ReactNode[];

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
    amount: number;
  };
}

const AuthenticationOrganisme: React.FC<props> = ({
  LabelProps,
  InputProps,
  children,
}) => {
  
  const [useChildren, setChildren] = useState<ReactNode[]>([]);


  let count = 0;
  useEffect(() => {
    if (count === 0) {
      if (children) {
        children.forEach((child, index) => {
          if (React.isValidElement(child)) {
            const childProps = child.type as unknown as { name?: string };
            if (childProps.name === "Text") {
              setChildren((useChildren) => [...useChildren, children[index]]);
            }
          }
        });
        createContext(useChildren);
      } else {
        setChildren(["SSSSS", "sssss"]);
      }
    }


    
    count++;

    
    
  }, [children]);



  

  return (
    <>
    
      {useChildren.map((childContent, index) => (
        
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
          {childContent}
        </MoleculeInput>
      ))}
      ;<Button></Button>
    </>
  );
};

export default AuthenticationOrganisme;
