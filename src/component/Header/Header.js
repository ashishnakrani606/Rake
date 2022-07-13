import React from 'react';
import "./header.css";
import Logo from "../../Asset/img/rake.svg";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <Link to=''>
        <img src={Logo} alt='' />
      </Link>
    </div>
  )
}

export default Header