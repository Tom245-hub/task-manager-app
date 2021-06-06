import { Link } from "react-router-dom";
import { StyledContainer, StyledLogo } from "./Header.css";

const Header: React.FC = () => {
  return (
    <StyledContainer>
      <Link to='/'>
        <StyledLogo src='/logo.svg' />
      </Link>
    </StyledContainer>
  );
};

export default Header;
