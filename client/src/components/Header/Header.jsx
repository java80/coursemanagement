import React from "react";
import { Link, NavLink } from "react-router-dom";
import { logoutUser } from "../../services/auth";
import { useHistory } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header(props) {
  const history = useHistory();
  const authToken = localStorage.getItem("authToken");
  console.log("Header props", props);
  console.log("Auth Token from header", authToken);
  const handleLogout = () => {
    logoutUser();
    // props.setauthToken("");
    localStorage.removeItem("authToken");
    props.setCurrentUser(null);
    history.push("/");
  };

  // FOR NAVBAR SCROLLING EFFECT START
  window.addEventListener("scroll", function () {
    var header = document.querySelector(".headerContainer");
    header.classList.toggle("sticky", window.scrollY > 1);
  });

  return (
    <header>
      {/* <Link to='/home'>
      </Link> */}
      <div className="headerContainer">
        <div className="innerHeader d-flex justify-content-between align-items-center">
          <NavLink
            className="text-decoration-none text-white fw-bold h4 mb-0 logo"
            exact
            to="/"
          >
            Teach App
          </NavLink>
          <GiHamburgerMenu
            onClick={props.hamBurgerEvent}
            className="d-block d-md-none pointer"
            color="#fff"
            fontSize="1.5rem"
          />
          <ul className="d-none d-md-flex list-unstyled justify-content-center flex-wrap mb-0">
            <li className="me-5">
              <NavLink className="text-decoration-none" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="me-5">
              <NavLink className="text-decoration-none" exact to="/signup">
                Teach Here
              </NavLink>
            </li>
            {!authToken && (
              <>
                <li className="me-5">
                  <NavLink className="text-decoration-none" exact to="/signup">
                    Sign Up
                  </NavLink>
                </li>
                <li className="me-5">
                  <NavLink className="text-decoration-none" exact to="/login">
                    Log In
                  </NavLink>
                </li>
              </>
            )}

            {authToken && (
              <li>
                <Link
                  to="/login"
                  className="text-decoration-none"
                  onClick={handleLogout}
                >
                  logout
                </Link>
              </li>
            )}

            <li> {props.currentUser && props.currentUser.email}</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
