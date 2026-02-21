import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);

  const login = (data) => {
    // backend se jo response aayega wo yaha set hoga
    setUser(data.user);
    setToken(data.token);
     setRole(data.user.role); // NEW
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, role, login, logout }}>
      {children}
      
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
