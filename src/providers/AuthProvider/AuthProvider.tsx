import React, { createContext, useEffect, useState } from "react";
import { Auth } from "aws-amplify";

interface User {
  id: string;
  email: string;
}
interface AuthContext {
  authLoading: boolean;
  currentUser?: User;
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const AuthContext = createContext<AuthContext>({
  authLoading: true,
  isAuthenticated: false,
  setIsAuthenticated: () => null,
});

export const AuthProvider: React.FC = ({ children }) => {
  const [authLoading, setAuthLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | undefined>();

  useEffect(() => {
    loadAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      setUser();
    } else {
      setCurrentUser(undefined);
    }
  }, [isAuthenticated]);

  async function loadAuth() {
    try {
      await Auth.currentSession();
      setIsAuthenticated(true);
    } catch (error) {
      if (error && error !== "No current user") {
        console.log("error: ", error);
      }
    } finally {
      setAuthLoading(false);
    }
  }

  async function setUser() {
    try {
      const result: any = await Auth.currentAuthenticatedUser();
      if (!result) {
        throw new Error("Could not set current user");
      }

      const email = result.attributes.email;
      if (!email) {
        throw new Error("No user email found");
      }

      const id = result.attributes.sub;
      if (!id) {
        throw new Error("No user id found");
      }

      setCurrentUser({
        email,
        id,
      });
    } catch (error) {
      console.log("error: ", error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        authLoading,
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
