import React from "react";
import { Link, NavLink } from "react-router-dom";
import { logoutUser } from "../../services/auth";
import { useHistory } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import AppBar from "@material-ui/core/AppBar";

export default function Header(props) {
  const history = useHistory();

  const handleLogout = () => {
    logoutUser();
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
              onClick={props.ClickEvent}
              className="d-block d-md-none pointer"
              color="#fff"
              fontSize="1.5rem"
            />
            <ul className="d-none d-md-flex list-unstyled justify-content-center flex-wrap mb-0">
              <li className="me-5">
                <NavLink
                  activeClassName="active"
                  className="text-decoration-none"
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="me-5">
                <NavLink
                  activeClassName="active"
                  className="text-decoration-none"
                  exact
                  to="/signup"
                >
                  Teach Here
                </NavLink>
              </li>
              <li className="me-5">
                <NavLink
                  activeClassName="active"
                  className="text-decoration-none"
                  exact
                  to="/signup"
                >
                  Sign Up
                </NavLink>
              </li>
              <li className="me-5">
                <NavLink
                  activeClassName="active"
                  className="text-decoration-none"
                  exact
                  to="/login"
                >
                  Log In
                </NavLink>
              </li>
              <li>
                <Link className="text-decoration-none" onClick={handleLogout}>
                  logout
                </Link>
              </li>
              <li> {props.currentUser && props.currentUser.email}</li>
            </ul>
          </div>
        </div>
      </header>
   
  );
}
