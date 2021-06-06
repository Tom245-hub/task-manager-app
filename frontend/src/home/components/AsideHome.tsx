import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { StyledContainer } from "./AsideHome.css";

const AsideHome: React.FC = () => {
  return (
    <StyledContainer>
      <h2>Aplikacja TaskManagerApp</h2>
      <ul>
        <li>
          <FontAwesomeIcon icon={faCheck} />
          Zarządzanie zadaniami
        </li>
        <li>
          <FontAwesomeIcon icon={faCheck} />
          Estymacja czasu pracy
        </li>
        <li>
          <FontAwesomeIcon icon={faCheck} />
          Nagrody za zadania
        </li>
        <li>
          <FontAwesomeIcon icon={faCheck} />
          Oceny za zadania
        </li>
      </ul>
      <h3>Zaloguj się lub załóż konto, aby zacząć używać aplikacji.</h3>
      <img src='/img/panel-demo.png' />
      <h3>Masz uwagi? Prześlij je do nas kontakt@webite.pl.</h3>
    </StyledContainer>
  );
};

export default AsideHome;
