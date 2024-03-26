import React, { useState, useEffect, createContext } from 'react';

const AuthContext = createContext();

const Authentication = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check session storage on component mount
  useEffect(() => {
    const storedLoginStatus = sessionStorage.getItem('isLoggedIn');
    setIsLoggedIn(storedLoginStatus === 'true');
  }, []);

  // Simulated login function
  const login = () => {
    sessionStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  // Simulated logout function
  const logout = () => {
    sessionStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { Authentication, AuthContext };