import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router';
import AuthContext from './Auths/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user, UserLoading } = useContext(AuthContext);
  const location = useLocation();
  if (user && user.email) {
    return children;
  }
  if (UserLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }
  return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivateRoute;
