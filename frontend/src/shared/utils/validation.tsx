import { errors } from "../models/errorsModel";
import { values } from "../models/valuesModel";

export const validate = (values: values) => {
  let errors: errors = {};
  // if (!values.email) {
  //   errors.email = "Wpisz e-mail.";
  // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //   errors.email = "Niepoprawny format e-mail.";
  // }
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
