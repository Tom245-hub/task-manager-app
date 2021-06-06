import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faKey } from "@fortawesome/free-solid-svg-icons";

import { postUser } from "../../shared/data/actions/userActions";
import { RootState } from "../../shared/data/reducers/rootReducers";

import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";

import useForm from "../../shared/hooks/useForm";
import { validate } from "../../shared/utils/validation";
import InfoValid from "../../shared/components/FormElements/InfoValid";

import {
  StyledContainer,
  StyledLogo,
  StyledText,
  StyledTitle,
  StyledLine,
  StyledTextLabel,
  StyledTextForm,
} from "./AuthForm.css";

const AuthForm: React.FC = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const dispatch = useDispatch();

  const errorsServer = useSelector((state: RootState) => state.user.data);

  const handleSwitchMode = () => {
    setIsLoginMode((prev) => !prev);
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    validate,
    handleSubmitAction
  );

  function handleSubmitAction() {
    const loginObject = {
      login: values.login,
      password: values.password,
    };
    {
      isLoginMode ? dispatch(postUser(loginObject)) : console.log("REJESTRACJA");
    }
  }

  return (
    <StyledContainer>
      <StyledLogo src='/logo.svg' />
      <StyledText>Miło Cię widzieć!</StyledText>
      <Card>
        <StyledTitle>Zaloguj się do panelu</StyledTitle>
        <StyledLine />
        <form onSubmit={handleSubmit} noValidate>
          {/* {!isLoginMode && (
          <>
            <label>
              E-mail:
              <Input
                id='email'
                type='email'
                name='email'
                onChange={handleChange}
                value={values.email || ""}
                required
              />
            </label>
            {errors.email && <InfoValid>{errors.email}</InfoValid>}
          </>
        )} */}
          <label>
            <StyledTextLabel>Login:</StyledTextLabel>
            <Input
              id='login'
              type='text'
              name='login'
              onChange={handleChange}
              value={values.login || ""}
              required
              icon={faSignInAlt}
            />
          </label>
          {errors.login && <InfoValid>{errors.login}</InfoValid>}
          {errorsServer.error && errorsServer.error === 404 && (
            <InfoValid>{errorsServer.message}</InfoValid>
          )}
          <label>
            <StyledTextLabel>Hasło:</StyledTextLabel>
            <Input
              id='password'
              type='password'
              name='password'
              onChange={handleChange}
              value={values.password || ""}
              required
              icon={faKey}
            />
          </label>
          {errors.password && <InfoValid>{errors.password}</InfoValid>}
          {errorsServer.error && errorsServer.error === 401 && (
            <InfoValid>{errorsServer.message}</InfoValid>
          )}
          <Button type='submit' variant='login' margin='0 0 1.5rem 0'>
            {isLoginMode ? "Zaloguj" : "Zarejestruj"}
          </Button>
          <StyledTextForm>Nie masz konta? Przejdź do rejestracji.</StyledTextForm>
        </form>
        {/* <Button variant='cancel' onClick={handleSwitchMode}>
        {isLoginMode ? "Przejdź do rejestracji" : "Przejdź do logowania"}
      </Button> */}
      </Card>
    </StyledContainer>
  );
};

export default AuthForm;
