import React, { useState, useEffect } from "react";
import createAuth0Client from "@auth0/auth0-spa-js";
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';

interface AuthContext {
    authLoading: boolean;
    isAuthenticated: boolean;
    handleRedirectCallback: () => Promise<void>;
    loginWithPopup: (params?: any) => Promise<void>;
    popupOpen: boolean;
    user: any;
    getIdTokenClaims: (params?: any) => Promise<string>;
    loginWithRedirect: (params?: any) => Promise<void>;
    getTokenSilently: (params?: any) => Promise<void>;
    getTokenWithPopup: (params?: any) => Promise<void>;
    logout: (params?: any) => Promise<void>;
}

interface AuthProviderProps {
}

const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

export const AuthContext = React.createContext<AuthContext>({
    authLoading: false,
    isAuthenticated: false,
    handleRedirectCallback: () => new Promise(() => null),
    loginWithPopup: () => new Promise(() => null),
    popupOpen: false,
    user: undefined,
    getIdTokenClaims: () => new Promise(() => null),
    loginWithRedirect: () => new Promise(() => null),
    getTokenSilently: () => new Promise(() => null),
    getTokenWithPopup:() => new Promise(() => null),
    logout:() => new Promise(() => null),
});

export const AuthProvider: React.FC<AuthProviderProps & Auth0ClientOptions> = ({
    children,
    onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
    ...initOptions
 }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState();
    const [auth0Client, setAuth0] = useState<Auth0Client>();
    const [loading, setLoading] = useState(true);
    const [popupOpen, setPopupOpen] = useState(false);

    useEffect(() => {
        const initAuth0 = async () => {
            try {
                const auth0FromHook: Auth0Client = await createAuth0Client(initOptions);
                setAuth0(auth0FromHook);
                if (
                    window.location.search.includes("code=") &&
                    window.location.search.includes("state=")
                  ) {
                    const { appState } = await auth0FromHook.handleRedirectCallback();
                    onRedirectCallback(appState);
                  }

                  const isAuthenticated = await auth0FromHook.isAuthenticated();
                  setIsAuthenticated(isAuthenticated);

                  if (isAuthenticated) {
                    const user = await auth0FromHook.getUser();
                    setUser(user);
                  }
                
            } catch (error) {
                console.error('initAuth0 error: ', error);
            } finally {
                setLoading(false);
            }    
        };

        initAuth0();
        // eslint-disable-next-line
      }, []);

    const loginWithPopup = async (params = {}) => {
        try {
            if (!auth0Client) {
                throw new Error('no auth0Client')  
            }
            setPopupOpen(true);
            await auth0Client.loginWithPopup(params);
            const user = await auth0Client.getUser();
            setUser(user);
            setIsAuthenticated(true);
        } catch (error) {
            console.error(error);
        } finally {
            setPopupOpen(false);
        }
    };
    const handleRedirectCallback = async () => {
        try {
            if (!auth0Client) {
                throw new Error('no auth0Client')  
            }
            setLoading(true);
            await auth0Client.handleRedirectCallback();
            const user = await auth0Client.getUser();
            setLoading(false);
            setIsAuthenticated(true);
            setUser(user);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
      };

    return (
        <AuthContext.Provider
          value={{
            isAuthenticated,
            user,
            authLoading: loading,
            popupOpen,
            loginWithPopup,
            handleRedirectCallback,
            getIdTokenClaims: (...p) => (auth0Client as any).getIdTokenClaims(...p),
            loginWithRedirect: (...p) => (auth0Client as any).loginWithRedirect(...p),
            getTokenSilently: (...p) => (auth0Client as any).getTokenSilently(...p),
            getTokenWithPopup: (...p) => (auth0Client as any).getTokenWithPopup(...p),
            logout: (...p) => (auth0Client as any).logout(...p)
          }}
        >
          {children}
        </AuthContext.Provider>
      );
}