import React, { useCallback } from "react";

const AuthContext = React.createContext({
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const userIsLoggedIn = localStorage.getItem("isLoggedIn");

  const logoutHandler = useCallback(() => {
    localStorage.removeItem("isLoggedIn");
  }, []);
  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", true);
  };

  const contextValue = {
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
