import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // State
  const [isAuthenticated, setAuthentication] = useState(false);

  // Function to login
  const toggleAuth = () =>{
    setAuthentication(!isAuthenticated)
  }

  // Context data
  const authContextData = {
    isAuthenticated,
    toggleAuth
  }

  // Return provider
  return (<AuthContext.Provider value={authContextData}>
    {children}
  </AuthContext.Provider>)
};

export default AuthContextProvider
