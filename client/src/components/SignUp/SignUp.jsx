import { useState } from "react";
import { registerUser } from "../../services/auth.js";
import { useHistory } from 'react-router-dom';

function SignUp() {
  const [input, setInput] = useState({});

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await registerUser(input);
    console.log(res);
    history.push("/login")
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Email</label>
        <input name="email" type="email" />
        <label>Password</label>
        <input name="password" type="password" />
        <label>Password Confirmation</label>
        <input name="password_confirmation" type="password" />
        <button type="submit">Sign UP</button>
      </form>
    </div>
  );
}

export default SignUp;
