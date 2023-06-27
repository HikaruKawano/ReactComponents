import React from "react";
import { StyleInput, StyledInputContainer, StyledLabel } from "./style";

interface props {
  inputtype?: string;
  width?: string;
  height?: string;
  placeholder?: string;
}

const Input: React.FC<props> = () => {
  return (
    <>
      <StyledInputContainer className="field">
        <StyleInput
          type="input"
          className="form__field"
          placeholder="Name"
          name="name"
          id="name"
          required
        />
        <StyledLabel htmlFor="name" className="form__label">
          Name
        </StyledLabel>
      </StyledInputContainer>
    </>
  );
};

export default Input;
