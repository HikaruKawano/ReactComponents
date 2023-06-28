import React from "react";
import { MoleculeInput } from "../../molecule";
import { Button } from "../../atom";

interface props{
  children:  string | string[] | JSX.Element | React.ReactElement;
  placeholder? : string;
}

const AuthenticationOrganisme: React.FC<props> = ({
    children,
    placeholder
}) => {
    return (
        <>
            <MoleculeInput placeholder={placeholder}>
                {children}
            </MoleculeInput>
            <MoleculeInput placeholder={placeholder}>
                {children}
            </MoleculeInput>
            <Button></Button>
        </>
    );
}

export default AuthenticationOrganisme;



