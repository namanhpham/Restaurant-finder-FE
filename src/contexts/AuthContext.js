// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const updateUser = (user) => {
    setCurrentUser(user);
  };

  const getcurrentUser = async () => {
    try {
      const response = await axios.get('http://localhost:8000//api/user', {withCredentials: true});
      setCurrentUser(response.data);
    } catch (err) {
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    getcurrentUser();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
