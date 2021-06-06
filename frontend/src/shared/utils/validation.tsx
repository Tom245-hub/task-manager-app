export const validate = (values: any) => {
  let errors: any = {};
  // if (!values.email) {
  //   errors.email = "Email address is required";
  // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //   errors.email = "Email address is invalid";
  // }
  if (!values.login) {
    errors.login = "Login is required";
  } else if (values.login.length < 1) {
    errors.login = "Login must be 8 or more characters";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 1) {
    errors.password = "Password must be 8 or more characters";
  }
  return errors;
};
