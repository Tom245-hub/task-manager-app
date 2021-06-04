import React from "react";
import { StyledInput } from "./Input.css";

interface InputProps {
  id: string;
  type: "text" | "email" | "password";
  name: string;
}

const Input: React.FC<InputProps> = ({ id, type, name }) => {
  return <StyledInput id={id} type={type} name={name} />;
};

export default Input;
