export const validate = (values: any) => {
  let errors: any = {};
  // if (!values.email) {
  //   errors.email = "Email address is required";
  // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //   errors.email = "Email address is invalid";
  // }
  if (!values.login) {
    errors.login = "Wpisz swój login";
  } else if (values.login.length < 1) {
    errors.login = "Login musi miec co najmniej 1 znak";
  }
  if (!values.password) {
    errors.password = "Wpisz swoje hasło";
  } else if (values.password.length < 1) {
    errors.password = "Hasło musi miec co najmniej 1 znak";
  }
  return errors;
};
