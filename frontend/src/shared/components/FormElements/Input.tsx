import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledBox, StyledInput, StyledIconBox } from "./Input.css";

interface InputProps {
  id: string;
  type: "text" | "email" | "password";
  name: string;
  onChange: any;
  value: any;
  required: any;
  icon: any;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  name,
  onChange,
  value,
  required,
  icon,
}) => {
  return (
    <StyledBox>
      <StyledIconBox>
        <FontAwesomeIcon icon={icon} />
      </StyledIconBox>
      <StyledInput
        id={id}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        required={required}
      />
    </StyledBox>
  );
};

export default Input;
