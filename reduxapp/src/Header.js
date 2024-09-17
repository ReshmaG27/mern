import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <NavLink to="/Home.js">Home</NavLink>
      <NavLink to="/About.js">About</NavLink>
      <NavLink to="/Contact.js">Contact</NavLink>
      {/* <ul>

        <li><a href="/Home.js">Home</a></li>
        <li><a href="/About.js">About</a></li>
        <li><a href="/Contact.js">Contact</a></li>
      </ul> */}
    </div>
  );
};

export default Header;