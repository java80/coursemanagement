import { useState } from "react";
import { loginUser } from "../../services/auth";
import { useHistory } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { image2 } from "../../assets/images";

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

  const redirectToHome = () => {
    return history.push({
      pathname: "/",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await loginUser(input, redirectToHome);
    console.log(res);
    localStorage.setItem("loginToken", JSON.stringify(res.data.token));
    //  props.setauthToken(res.data.token);
    props.verify();
    history.push("/");
  };

  return (
    <>
      <div className="mainDivSignUp">
        <div className="signUpContainer">
          <div className="container-fluid">
            <div className="row">
              <div className="imgContainer col-12 col-md-6 order-2 order-md-1 ps-0 pe-0 pe-md-3">
                <img width="100%" height="100%" src={image2} alt="" />
              </div>
              <div className="col-12 col-md-6 order-1 order-md-2 py-4 align-self-center">
                <h2 className="fw-bold">
                  Log<span className="themeLine">in</span>
                </h2>
                <form onChange={handleChange} onSubmit={handleSubmit}>
                  <TextField
                    name="email"
                    className="w-100 mt-3"
                    label="Email"
                  />
                  <TextField
                    name="password"
                    type="password"
                    className="w-100 mt-4"
                    label="Password"
                  />
                  <br />
                  <button className="themeBtn mt-5" type="submit">
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*     
			<div>
				<h1>Login</h1>
				<form onChange={handleChange} onSubmit={handleSubmit}>
					<label>Email</label>
					<input name="email" type="email" />
					<label>Password</label>
					<input name="password" type="password" />
					<button type="submit">Sign In</button>
				</form>
			</div> */}
    </>
  );
};

export default LogIn;
