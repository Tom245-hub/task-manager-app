import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-common-types";

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
  onChange: any;
  value: string | number;
  required: any;
  labelText: string;
  variant?: "input";
  icon: IconName;
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
        onChange={onChange}
        value={value}
        required={required}
      ></StyledTextarea>
    );

  return (
    <label>
      <StyledTextLabel>{labelText}</StyledTextLabel>
      <StyledBox>{variantInput}</StyledBox>
    </label>
  );
};

export default Input;
