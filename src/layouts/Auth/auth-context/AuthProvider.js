import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthConfig } from "./useAuthConfig";

export const AuthContext = createContext("");

export const AuthProvider = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const { deleteToken, getToken, setToken: configToken } = useAuthConfig();

  const [token, setToken] = useState(getToken("token"));

  const setAuthToken = (newToken) => {
    setToken(newToken);
    configToken(newToken);
  };

  const resetAuthToken = () => {
    setToken(null);
    deleteToken();
  };

  useEffect(() => {
    if (!token && window.location.pathname !== "/auth/login") {
      navigate("/auth/login");
    }

    if (token && window.location.pathname === "/auth/login") {
      navigate("/admin/dashboard");
    }
  }, [navigate, token]);

  // useEffect(() => {}, [navigate, token]);

  // window.addEventListener("storage", function (event) {
  //   if (
  //     event.storageArea === sessionStorage &&
  //     event.key === "token" &&
  //     event.newValue === null
  //   ) {
  //     // Key "token" has been cleared from sessionStorage
  //     console.log("The 'token' key has been cleared from sessionStorage!");
  //     // Add your code to execute when the "token" key is cleared
  //   }
  // });

  return (
    <AuthContext.Provider value={{ token, setAuthToken, resetAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};
