import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postUser } from "../../shared/data/actions/userActions";
import { RootState } from "../../shared/data/reducers/rootReducers";

import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";

import useForm from "../../shared/hooks/useForm";
import { validate } from "../../shared/utils/validation";
import InfoValid from "../../shared/components/FormElements/InfoValid";

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
    <Card>
      <h2>{!isLoginMode ? "Załóż konto" : "Zaloguj"}</h2>
      <hr />
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
          Login:
          <Input
            id='login'
            type='text'
            name='login'
            onChange={handleChange}
            value={values.login || ""}
            required
          />
        </label>
        {errors.login && <InfoValid>{errors.login}</InfoValid>}
        {errorsServer.error && errorsServer.error === 404 && (
          <InfoValid>{errorsServer.message}</InfoValid>
        )}
        <label>
          Password:
          <Input
            id='password'
            type='password'
            name='password'
            onChange={handleChange}
            value={values.password || ""}
            required
          />
        </label>
        {errors.password && <InfoValid>{errors.password}</InfoValid>}
        {errorsServer.error && errorsServer.error === 401 && (
          <InfoValid>{errorsServer.message}</InfoValid>
        )}
        <Button type='submit' variant='confirm' margin='0 0 0.5rem 0'>
          {isLoginMode ? "Zaloguj" : "Zarejestruj"}
        </Button>
      </form>
      {/* <Button variant='cancel' onClick={handleSwitchMode}>
        {isLoginMode ? "Przejdź do rejestracji" : "Przejdź do logowania"}
      </Button> */}
    </Card>
  );
};

export default AuthForm;
