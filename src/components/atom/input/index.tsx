import React from "react";
import { StyleInput, StyledInputContainer} from "./style";

interface props {
  inputtype?: string;
  width?: string;
  height?: string;
  placeholder?: string;
  
}

const Input: React.FC<props> = ({placeholder}) => {
  return (
    <>
      <StyledInputContainer className="field">
        <StyleInput
          type="input"
          className="form__field inputSimple"
          placeholder={ placeholder }
          name="name"
          id="name"
          required
        />
        
      </StyledInputContainer>
    </>
  );
};

export default Input;
