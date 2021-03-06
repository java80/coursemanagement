import React from "react";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../services/auth";
import { useHistory } from "react-router-dom";
import "./Hamburger.css";

const Hamburger = ({ isOpen, hamBurgerEvent, currentUser, setCurrentUser }) => {
  const history = useHistory();
  const authToken = localStorage.getItem("authToken");
  const handleLogout = () => {
    logoutUser();
    setCurrentUser(null);
    history.push("/");
  };
  return (
    <div
      onClick={hamBurgerEvent}
      style={{
        opacity: `${isOpen ? "1" : "0"}`,
        top: `${isOpen ? "0%" : "-100%"}`,
      }}
      className="HamburgerContainer"
    >
      <ImCross onClick={hamBurgerEvent} className="CrossBTn" />
      <ul className="list-unstyled">
        <li>
          <NavLink className="text-white text-decoration-none" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="text-white text-decoration-none" to="/signup">
            Teach Here
          </NavLink>
        </li>
        { !authToken &&
          <>
          <li>
          <NavLink className="text-white text-decoration-none" to="/signup">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink className="text-white text-decoration-none" to="/login">
            Log In
          </NavLink>
            </li>
            </>
        }
        {
          authToken &&
          <li>
            <button
              className="text-white bg-transparent border-0"
              onClick={handleLogout}
            >
              logout
            </button>
          </li>
        }

        <li> {currentUser && currentUser.email}</li>
      </ul>
    </div>
  );
};

export default Hamburger;
