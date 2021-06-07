import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faKey } from "@fortawesome/free-solid-svg-icons";

import {
  StyledInput,
  StyledTextarea,
  StyledBox,
  StyledIconBox,
  StyledTextLabel,
} from "./Input.css";

interface InputProps {
  id: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  required: boolean;
  labelText: string;
  variant?: "input";
  icon: typeof faSignInAlt;
  type?: "text" | "email" | "password";
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  name,
  onChange,
  value,
  required,
  icon,
  labelText,
  variant,
}) => {
  const variantInput =
    variant === "input" ? (
      <>
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
      </>
    ) : (
      <StyledTextarea
        id={id}
        name={name}
        value={value}
        required={required}
      ></StyledTextarea>
    );

  return (
    <label htmlFor={name}>
      <StyledTextLabel>{labelText}</StyledTextLabel>
      <StyledBox>{variantInput}</StyledBox>
    </label>
  );
};

export default Input;
