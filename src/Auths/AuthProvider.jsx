import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {
  const [UserLoading, setUserLoading] = useState(true);
  const [DBuser, setDBuser] = useState(null);
  const [user, setUser] = useState(null);

  const CreateUser = (email, password) => {
    setUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SignInUser = (email, password) => {
    setUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignOutUser = () => {
    setUserLoading(true);
    return signOut(auth);
  };

  //   On Auth State Change

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      const url = `http://localhost:3000/users/${currentUser?.email}`;
      console.log(`The url is: ${url}`);
      setUser(currentUser);
      if (currentUser != null) {
        try {
          // Fetch the MongoDB user using the Firebase user email
          const response = await fetch(url);
          const currentDBuser = await response.json();
          setDBuser(currentDBuser); // Set the MongoDB user data
          console.log('User in the OnAuth MongoDB: ', currentDBuser);
          // console.log(currentDBuser); // You can remove this after testing
        } catch (error) {
          console.error('Error fetching MongoDB user:', error);
        }
      }
      setUserLoading(false);
      console.log('User in the OnAuth: ', currentUser);
    });

    return () => {
      unsubscribe;
    };
  }, []);

  const authInfo = {
    DBuser,
    UserLoading,
    setUserLoading,
    SignInUser,
    user,
    CreateUser,
    SignOutUser,
    setUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
