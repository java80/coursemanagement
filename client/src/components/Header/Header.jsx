import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
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
          <li>
            <Link to='/signup'>Home</Link>
          </li>
          <li>
            <Link to='/signup'>Tech Here</Link>
          </li>
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
          <li>
            <Link to='/login'>Log In</Link>
          </li>
          <li>  {props.currentUser && props.currentUser.email}</li>
        </ul>
        
      </div>
      <hr />
      
    </header>
  )
}