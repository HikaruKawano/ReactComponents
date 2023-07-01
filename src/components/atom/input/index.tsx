import React from "react";
import { StyleInput, StyledInputContainer } from "./style";

export interface InputProps {
  inputtype?: string;
  width?: string;
  height?: string;
  placeholder?: string;
  name?: string;
  id?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  height,
  inputtype,
  width,
  name,
  id,
}) => {
  return (
    <>
      <StyledInputContainer className="field">
        <StyleInput
          type={inputtype}
          className="form__field inputSimple"
          placeholder={placeholder}
          name={name}
          id={id}
          required
          height={height}
          width={width}
        />
      </StyledInputContainer>
    </>
  );
};

export default Input;
