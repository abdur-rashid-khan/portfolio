import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className='navbar bg-slate-600'>
      <div className="container mx-auto">
        <div className="navbar-start md:w-0">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to>Home</Link></li>
              <li><a>Item 3</a></li>
              
            </ul>
          </div>
        </div>
        <div class="navbar-end text-right md:text-start">
          <a href="/" className="btn btn-ghost normal-case text-xl text-right text-white">Rashid Khan</a>
        </div>
        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal p-0">
            <li><a>Item 1</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Header;