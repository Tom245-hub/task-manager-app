import { useSelector } from "react-redux";
import { RootState } from "../../shared/data/reducers/rootReducers";
import { StyledContainer } from "./DashboardPage.css";

const DashboardPage: React.FC = () => {
  const user: { login: string; _id: string } = useSelector(
    (state: RootState) => state.user.data.user
  );

  return (
    <StyledContainer>DashboardPage. Login: {user ? user.login : "brak"}</StyledContainer>
  );
};

export default DashboardPage;
