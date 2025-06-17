import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import AuthContext from '../Auths/AuthContext';
const links = (
  <>
    <li>
      <NavLink to={'/'} className={'text-xl btn btn-ghost'}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to={'/lisitngs'} className={'text-xl btn btn-ghost'}>
        All
      </NavLink>
    </li>
  </>
);
const Navbar = () => {
  const { user, SignOutUser } = useContext(AuthContext);
  const Handlesignout = () => {
    SignOutUser()
      .then()
      .catch((err) => console.log(err));
  };
  // console.log(user);
  return (
    <div className="navbar bg-base-100 shadow-sm px-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <p className="btn btn-ghost text-2xl font-bold">
          <span className="text-orange-500">Knowledge</span>
          <span>Hub</span>
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user == null ? (
          <Link to={'/register'} className="btn">
            Register
          </Link>
        ) : (
          <Link onClick={Handlesignout} className="btn">
            SignOut
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
