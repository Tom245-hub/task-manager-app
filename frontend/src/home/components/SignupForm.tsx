import { useDispatch, useSelector } from "react-redux";
import { faSignInAlt, faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { postNewUser } from "../../shared/data/actions/userActions";
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
  if (!values.email) {
    errors.email = "Wpisz e-mail.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Niepoprawny format e-mail.";
  }
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

interface SigupFormProps {
  toggleMode: () => void;
}

const SignupForm: React.FC<SigupFormProps> = ({ toggleMode }) => {
  const dispatch = useDispatch();
  const { values, errors, handleChange, handleBlur, handleSubmit } = useForm(
    validate,
    handleSubmitAction
  );

  const infoServer = useSelector((state: RootState) => state.user.data);

  function handleSubmitAction() {
    const signupObject = {
      email: values.email,
      login: values.login,
      password: values.password,
    };

    dispatch(postNewUser(signupObject));
  }

  return (
    <Card>
      <StyledTitle>Załóż konto</StyledTitle>
      <StyledLine />
      <StyledForm onSubmit={handleSubmit} noValidate>
        <Input
          id='email'
          type='email'
          name='email'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email || ""}
          required
          icon={faEnvelope}
          labelText='E-mail:'
          variant='input'
        />

        {errors.email && <InfoValid variant='negative'>{errors.email}</InfoValid>}
        {/* {errorsServer.email && errorsServer.email === 404 && (
          <InfoValid>{errorsServer.message}</InfoValid>
        )} */}

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
        {/* {errorsServer.login && errorsServer.login === 404 && (
          <InfoValid>{errorsServer.message}</InfoValid>
        )} */}

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

        {infoServer.login && (
          <InfoValid variant='positive'>
            Twoje konto zostało założone. Twój login: {infoServer.login} Twoje hasło:
            {infoServer.password}
          </InfoValid>
        )}

        <Button type='submit' variant='login' margin='0 0 1.5rem 0'>
          Załóż konto
        </Button>
        <StyledTextForm>
          Masz już konto? <a onClick={toggleMode}>Przejdź do logowania</a>
        </StyledTextForm>
      </StyledForm>
    </Card>
  );
};

export default SignupForm;
