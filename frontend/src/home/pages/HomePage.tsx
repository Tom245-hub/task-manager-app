import { useState } from "react";
import AuthForm from "../components/AuthForm";
import SignupForm from "../components/SignupForm";
import { StyledContainer, StyledLogo, StyledText } from "./HomePage.css";

const HomePage = () => {
  const [isAuthMode, setIsAuth] = useState(true);
  const toggleMode = () => {
    setIsAuth((prev) => !prev);
  };
  return (
    <StyledContainer>
      <StyledLogo src='/logo.svg' />
      <StyledText>Miło Cię widzieć!</StyledText>
      {isAuthMode ? (
        <AuthForm toggleMode={toggleMode} />
      ) : (
        <SignupForm toggleMode={toggleMode} />
      )}
    </StyledContainer>
  );
};

export default HomePage;
