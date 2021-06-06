import React from "react";
import { StyledInput } from "./Input.css";

interface InputProps {
  id: string;
  type: "text" | "email" | "password";
  name: string;
  onChange: any;
  value: any;
  required: any;
}

const Input: React.FC<InputProps> = ({ id, type, name, onChange, value, required }) => {
  return (
    <StyledInput
      id={id}
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      required={required}
    />
  );
};

export default Input;
