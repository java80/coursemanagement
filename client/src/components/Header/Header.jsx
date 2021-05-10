import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <Link to='/'>
        <h1>You Teach App</h1>
      </Link>
      <hr />
      <div className='nav-links'>
        <ul>
          <li>
          <Link to='/courses'>Courses</Link>
          </li>
          <li>
          <Link to='/lessons'>lessons</Link>
          </li>
          <li> {props.currentUser && props.currentUser.email}</li>
        </ul>
        
       
      </div>
    </header>
  )
}