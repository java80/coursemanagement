import { useState } from "react";
import { registerUser } from "../../services/auth.js";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import "./SignUp.css";
import { image1 } from "../../assets/images";

function SignUp() {
  const [input, setInput] = useState({ is_student: true });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (e.target.type === "checkbox") {
      setInput((prevState) => ({
        ...prevState,
        [name]: e.target.checked ? true : false,
      }));
    } else {
      setInput((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await registerUser(input);
    console.log(res);
    history.push("/login");
  };

  return (
    <div className="mainDivSignUp">
      <div className="signUpContainer">
        <div className="container-fluid">
          <div className="row">
            <div className="imgContainer col-12 col-md-6 order-2 order-md-1 ps-0 pe-0 pe-md-3">
              <img width="100%" height="100%" src={image1} alt="" />
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2 py-4">
              <h2 className="fw-bold">
                Sign&nbsp;
                <span className="themeLine">up</span>
              </h2>
              <form onChange={handleChange} onSubmit={handleSubmit}>
                <TextField name="email" className="w-100 mt-3" label="Email" />
                <TextField
                  name="password"
                  type="password"
                  className="w-100 mt-4"
                  label="Password"
                />
                <TextField
                  name="password_confirmation"
                  type="password"
                  className="w-100 mt-4"
                  label="Confirm Password"
                />
                <label> A Student? </label>
                &nbsp;
                <input
                  className="my-4"
                  name="is_student"
                  type="checkbox"
                  checked={input.is_student}
                />
                <br />
                <button className="themeBtn" type="submit">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
