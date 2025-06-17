import React, { useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {
  const [UserLoading, setUserLoading] = useState(true);

  const CreateUser = (email, password) => {
    setUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    setUserLoading,
    CreateUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
