import { useDispatch, useSelector } from "react-redux";

import { faSignInAlt, faKey } from "@fortawesome/free-solid-svg-icons";

import { postUser } from "../../shared/data/actions/userActions";
import { RootState } from "../../shared/data/reducers/rootReducers";

import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";

import useForm from "../../shared/hooks/useForm";
import { validate } from "../../shared/utils/validation";
import InfoValid from "../../shared/components/FormElements/InfoValid";

import { StyledTitle, StyledForm, StyledLine, StyledTextForm } from "./AuthForm.css";

interface AuthFormProps {
  toggleMode: any;
}

const AuthForm: React.FC<AuthFormProps> = ({ toggleMode }) => {
  const dispatch = useDispatch();

  const errorsServer = useSelector((state: RootState) => state.user.data);

  const { values, errors, handleChange, handleSubmit } = useForm(
    validate,
    handleSubmitAction
  );

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
