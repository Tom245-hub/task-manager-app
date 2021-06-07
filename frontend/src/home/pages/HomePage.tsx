import { useState } from "react";
import AuthForm from "../components/AuthForm";
import SignupForm from "../components/SignupForm";
import { StyledContainer, StyledLogo, StyledText } from "./HomePage.css";

const HomePage: React.FC = () => {
  const [isAuthMode, setIsAuth] = useState<boolean>(true);
  const toggleMode = () => {
    setIsAuth((prevState: boolean) => !prevState);
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
