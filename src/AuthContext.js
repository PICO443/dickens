import React, { useContext, useEffect, useState } from "react";
import { AxiosInstance } from "./AxiosInstance";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export function ProvideAuth({ children }) {
  const authProperties = GetAuthProperties();
  return (
    <AuthContext.Provider value={authProperties}>
      {children}
    </AuthContext.Provider>
  );
}

function GetAuthProperties() {
  const [user, setUser] = useState({});

  const login = async (username, password) => {
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);
    return AxiosInstance.post('/login', params, { headers: { 'content-type': 'application/x-www-form-urlencoded' } })
        .then((response) => {
            console.log(response);
            fetchUser()
        })
        .catch((error) => {
            console.error('There was an error!', error);
        });
    // const response = await AxiosInstance.post("/login", { username, password });
    // if (response.status === 200) {
    //   // We get the user information immediately after login.
    //   fetchUser();
    // }
    // return response;
  };

  const fetchUser = async () => {
    const response = await AxiosInstance.get("/api/user/me");
    if (response.status === 200) {
      setUser(response.data);
    } else {
        console.log(response)
    }
    return response;
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    fetchUser,
    user,
    login,
    // logout,
  };
}
