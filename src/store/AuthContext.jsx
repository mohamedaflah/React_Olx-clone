/* eslint-disable react/prop-types */
import  { createContext, useState } from "react";

const AuthenticationContext = createContext(null);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticationContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthContext;
export {AuthenticationContext}