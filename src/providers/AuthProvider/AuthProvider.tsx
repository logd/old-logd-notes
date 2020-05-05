import React, { createContext, useEffect, useState } from "react";
import { Auth } from "aws-amplify";

interface AuthContext {
  authLoading: boolean;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContext>({
  authLoading: true,
  isAuthenticated: false,
});

export const AuthProvider: React.FC = ({ children }) => {
  const [authLoading, setAuthLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    loadAuth();
  }, []);

  async function loadAuth() {
    try {
      await Auth.currentSession();
      setIsAuthenticated(true);
    } catch (error) {
      if (error !== "No current user") {
        console.log("error: ", error);
      }
    } finally {
      setAuthLoading(false);
    }
  }
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
