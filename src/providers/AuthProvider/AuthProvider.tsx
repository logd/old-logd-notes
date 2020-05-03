import React, { createContext, useEffect, useState } from "react";
import { Auth } from "aws-amplify";

export const AuthContext = createContext({
  currentUser: null,
});

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await Auth.currentUserInfo();
        console.log("user: ", user);
        if (user) {
          setCurrentUser(user);
        }
      } catch (error) {}
    };

    getUser();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
