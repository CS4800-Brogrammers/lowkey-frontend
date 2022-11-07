import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(JSON.parse(localStorage.getItem("authTokens")).access)
      : null
  );

  let registerUser = () => {
    axios
      .post("http://127.0.0.1:8000/api/v1/users/auth/register/", {
        username: "",
        email: "",
        password1: "",
        password2: "",
      })
      .then((response) => {
        const authTokenResponse = {
          access: response.data.access_token,
          refresh: response.data.refresh_token,
        };
        setAuthTokens(authTokenResponse);
        setUser(jwt_decode(response.data.access_token));
        localStorage.setItem("authTokens", JSON.stringify(authTokenResponse));

        navigate("/");
      });
  };

  let loginUser = () => {
    axios
      .post("http://127.0.0.1:8000/api/v1/users/auth/login/", {
        email: "",
        password: "",
      })
      .then((response) => {
        const authTokenResponse = {
          access: response.data.access_token,
          refresh: response.data.refresh_token,
        };
        setAuthTokens(authTokenResponse);
        setUser(jwt_decode(response.data.access_token));
        localStorage.setItem("authTokens", JSON.stringify(authTokenResponse));

        navigate("/");
      });
  };

  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
  };

  let contextData = {
    user: user,
    authTokens: authTokens,
    registerUser: registerUser,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
