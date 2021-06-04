import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import { postUser } from "../../shared/data/actions/userActions";
import { RootState } from "../../shared/data/reducers/rootReducers";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const user: { login: string; _id: string } = useSelector(
    (state: RootState) => state.user.user.user
  );

  if (user && user.login) {
    history.push("/dashboard");
  }

  const submitForm = async (e: any) => {
    e.preventDefault();
    const loginObject = {
      login: "e",
      password: "1",
    };

    dispatch(postUser(loginObject));
  };

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <label>
        Login:
        <Input id='login' type='text' name='login' />
      </label>
      <label>
        Hasło:
        <Input id='password' type='password' name='password' />
      </label>

      <Button type='submit'>ZALOGUJ</Button>
    </form>
  );
};

export default LoginForm;
