import { StyledContainer } from "./Card.css";

const Card: React.FC = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Card;
