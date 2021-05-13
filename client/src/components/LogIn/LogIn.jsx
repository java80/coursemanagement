import { useState } from "react";
import { loginUser } from "../../services/auth";
import { useHistory } from "react-router-dom";

const LogIn = (props) => {
  const [input, setInput] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const redirectToHome = ()=> {
    return history.push({
      pathname: '/',
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await loginUser(input, redirectToHome);
    console.log(res);
    props.verify();
    history.push('/courses')
  };

  return (
    <div>
      <h1>Login</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Email</label>
        <input name="email" type="email" />
        <label>Password</label>
        <input name="password" type="password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default LogIn;
