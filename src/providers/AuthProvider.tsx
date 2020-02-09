import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { CognitoUser  } from 'amazon-cognito-identity-js';


interface Props {
    email?: string;
    password?: string;
}

interface AuthContextProps {
    currentUser?: CognitoUser;
    isAuthenticating: boolean;
    handleLogin: (email: string, password: string) => Promise<string | null>;
    handleLogout: () => void;
}

export const AuthContext = React.createContext<AuthContextProps>({
    currentUser: undefined,
    isAuthenticating: false,
    handleLogin: () => new Promise(() => null),
    handleLogout: () => null,
})

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  useEffect(() => {
    const updateCurrentUser = async () => {
      try {
        let user = await Auth.currentAuthenticatedUser();
        setCurrentUser({...user});
      } catch {
        setCurrentUser(null);
      }
    }
    updateCurrentUser();
  }, [])

  async function handleLogin(email: string, password: string) {
    setIsAuthenticating(true);
    // const email = process.env.REACT_APP_CYPRESS_TEST_USER_EMAIL;
    // const password = process.env.REACT_APP_CYPRESS_TEST_USER_PASSWORD;
    try {
        // TODO: switch to throw error if either is undefined
      if (email && password) {        
        const user = await Auth.signIn(email, password);
        // if !user throw new Error?
        setCurrentUser(user);
        return null;
      }
    } catch (e) {
    //   alert(e.message);
      return e.message;
    } finally {
        setIsAuthenticating(false);
    }
  }

//   useEffect(() => {
//     const updateCurrentUser = async () => {
//       try {
//         let user = await Auth.currentAuthenticatedUser();
//         setCurrentUser({...user});
//       } catch {
//         setCurrentUser(null);
//       }
//     }
//     updateCurrentUser();
//   }, [])

  async function handleLogout() {
    // e.preventDefault();
    try {
      await Auth.signOut();
      setCurrentUser(null);
    //   history.push("/login");
      
    } catch (error) {
      console.error(`Logout: ${error}`);
    }
  }

  return (
    <AuthContext.Provider value={{
        currentUser,
        isAuthenticating,
        handleLogin,
        handleLogout
    }}>
{children}
    </AuthContext.Provider>
  );

}
