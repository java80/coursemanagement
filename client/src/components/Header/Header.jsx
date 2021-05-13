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
        <li>
            <Link to='/'> Home</Link>
          </li>
          <li>
            <Link to='/signup'>Teach Here</Link>
          </li>
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
          <li>
            <Link to='/login'>Log In</Link>
          </li>
          <li>
           
            <Link onClick = {handleLogout} >logout</Link>
          </li>
          <li>  {props.currentUser && props.currentUser.email}</li>
        </ul>
        
      </div>
      <hr />
      
    </header>
  )
}