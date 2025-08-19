import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import AuthContext from '../Auths/AuthContext';
import Swal from 'sweetalert2';

const links = (
  <>
    <li>
      <NavLink
        to={'/'}
        className={
          'text-xl text-orange-900 hover:bg-orange-600 hover:text-white border border-4 border-orange-500 rounded-3xl'
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to={`/Categories/All`}
        className={
          'text-xl text-orange-900 hover:bg-orange-600 hover:text-white border border-4 border-orange-500 rounded-3xl'
        }
      >
        All Articles
      </NavLink>
    </li>
    <li>
      <NavLink
        to={`/postarticle`}
        className={
          'text-xl text-orange-900 hover:bg-orange-600 hover:text-white border border-4 border-orange-500 rounded-3xl'
        }
      >
        Post Article
      </NavLink>
    </li>
    <li>
      <NavLink
        to={`/myarticles`}
        className={
          'text-xl text-orange-900 hover:bg-orange-600 hover:text-white border border-4 border-orange-500 rounded-3xl'
        }
      >
        My Articles
      </NavLink>
    </li>
    <li>
      <NavLink
        to={`/404`}
        className={
          'text-xl text-orange-900 hover:bg-orange-600 hover:text-white border border-4 border-orange-500 rounded-3xl'
        }
      >
        About Us
      </NavLink>
    </li>
  </>
);

const Navbar = () => {
  const { user, SignOutUser } = useContext(AuthContext);

  const Handlesignout = () => {
    SignOutUser()
      .then(() => {
        Swal.fire({
          title: 'Successfully Logged Out',
          icon: 'success',
          draggable: true,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="navbar bg-white shadow-lg py-4 px-6 lg:px-14 sticky top-0 z-50">
      <div className="navbar-start flex items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-lg z-10 mt-3 w-52 p-3 shadow-lg space-x-5"
          >
            {links}
          </ul>
        </div>
        <p className="btn btn-ghost text-xl lg:text-2xl font-bold text-gray-800">
          <span className="text-orange-500">Knowledge</span>
          <span>Hub</span>
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-10">{links}</ul>
      </div>
      <div className="navbar-end">
        {user == null ? (
          <Link
            to={'/login'}
            className="btn bg-orange-500 hover:bg-orange-700 text-white w-[25%] rounded-full text-xl"
          >
            Login
          </Link>
        ) : (
          <Link
            onClick={Handlesignout}
            className="btn bg-red-500 hover:bg-orange-700 text-white w-[25%] rounded-full text-xl"
          >
            Logout
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
