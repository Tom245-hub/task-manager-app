import React from "react";
import {
  StyledInfoValidPositive,
  StyledInfoValidNegative,
  StyledText,
} from "./InfoValid.css";

interface InfoValidProps {
  variant: "positive" | "negative";
}

const InfoValid: React.FC<InfoValidProps> = ({ children, variant }) => {
  const VariantInfoValid = (() => {
    switch (variant) {
      case "positive":
        return StyledInfoValidPositive;
      case "negative":
        return StyledInfoValidNegative;
      default:
        return StyledInfoValidNegative;
    }
  })();
  return (
    <VariantInfoValid>
      <StyledText>{children}</StyledText>
    </VariantInfoValid>
  );
};

export default InfoValid;
