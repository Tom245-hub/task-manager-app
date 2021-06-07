import { useDispatch, useSelector } from "react-redux";
import { faSignInAlt, faKey } from "@fortawesome/free-solid-svg-icons";

import { postUser } from "../../shared/data/actions/userActions";
import { RootState } from "../../shared/data/reducers/rootReducers";
import useForm from "../../shared/hooks/useForm";

import { errors } from "../../shared/models/errorsModel";
import { values } from "../../shared/models/valuesModel";

import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";
import InfoValid from "../../shared/components/FormElements/InfoValid";

import { StyledTitle, StyledForm, StyledLine, StyledTextForm } from "./AuthForm.css";

const validate = (values: values) => {
  let errors: errors = {};
  if (!values.login) {
    errors.login = "Wpisz login.";
  } else if (values.login.length < 1) {
    errors.login = "Login musi miec co najmniej 1 znak.";
  }
  if (!values.password) {
    errors.password = "Wpisz hasło.";
  } else if (values.password.length < 1) {
    errors.password = "Hasło musi miec co najmniej 1 znak.";
  }
  return errors;
};

interface AuthFormProps {
  toggleMode: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ toggleMode }) => {
  const dispatch = useDispatch();
  const { values, errors, handleChange, handleBlur, handleSubmit } = useForm(
    validate,
    handleSubmitAction
  );

  const errorsServer = useSelector((state: RootState) => state.user.data);

  function handleSubmitAction() {
    const loginObject = {
      login: values.login,
      password: values.password,
    };

    dispatch(postUser(loginObject));
  }

  return (
    <Card>
      <StyledTitle>Zaloguj się do panelu</StyledTitle>
      <StyledLine />
      <StyledForm onSubmit={handleSubmit} noValidate>
        <Input
          id='login'
          type='text'
          name='login'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.login || ""}
          required
          icon={faSignInAlt}
          labelText='Login:'
          variant='input'
        />

        {errors.login && <InfoValid variant='negative'>{errors.login}</InfoValid>}

        {errorsServer.error && errorsServer.error === 404 && (
          <InfoValid variant='negative'>{errorsServer.message}</InfoValid>
        )}
        <Input
          id='password'
          type='password'
          name='password'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password || ""}
          required
          icon={faKey}
          labelText='Hasło:'
          variant='input'
        />
        {errors.password && <InfoValid variant='negative'>{errors.password}</InfoValid>}
        {errorsServer.error && errorsServer.error === 401 && (
          <InfoValid variant='negative'>{errorsServer.message}</InfoValid>
        )}
        <Button type='submit' variant='login' margin='0 0 1.5rem 0'>
          Zaloguj
        </Button>
        <StyledTextForm>
          Nie masz konta? <a onClick={toggleMode}>Przejdź do rejestracji</a>
        </StyledTextForm>
      </StyledForm>
    </Card>
  );
};

export default AuthForm;
