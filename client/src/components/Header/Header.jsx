import React from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from "../../services/auth";
import { Route, Switch, useHistory } from "react-router-dom";
export default function Header(props) {
  const history = useHistory();

  const handleLogout = () => {

    logoutUser();
    props.setCurrentUser(null)
    history.push("/")
  }
  return (
    <header>
      {/* <Link to='/home'>
       
      </Link> */}
      <div className='nav-links'>
        <ul>
          {/* <li>
          <Link to='/courses'>Courses</Link>
          </li>
          <li>
          <Link to='/lessons'>lessons</Link>
          </li> */}
          {/* <li>
            <Link to='/courses'>Home</Link>
          </li> */}
          <li>
            <Link to='/signup'>Tech Here</Link>
          </li>
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
          <li>
            <Link to='/login'>Log In</Link>
          </li>
          <li>
            <button onClick = {handleLogout}>Log Out</button>
          </li>
          <li>  {props.currentUser && props.currentUser.email}</li>
        </ul>
        
      </div>
      <hr />
      
    </header>
  )
}