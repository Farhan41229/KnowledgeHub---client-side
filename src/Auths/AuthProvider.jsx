import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {
  const [UserLoading, setUserLoading] = useState(true);
  const [user, setUser] = useState(null);

  const CreateUser = (email, password) => {
    setUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SignInUser = (email, password) => {
    setUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   On Auth State Change

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setUserLoading(false);
      console.log('User in the OnAuth: ', currentUser);
    });

    return () => {
      unsubscribe;
    };
  }, []);

  const authInfo = {
    UserLoading,
    setUserLoading,
    SignInUser,
    user,
    CreateUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
