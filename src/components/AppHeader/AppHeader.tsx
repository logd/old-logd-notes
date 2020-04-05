import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const theme = `
    font-size: .9em;
    font-weight: 100;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 1em;
  ${theme};
`;

const Smaller = styled.div`
  font-size: smaller;
`;

const Main = styled.div`
  flex: 1;
`;
export const AppHeader = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { user, isAuthenticated, loginWithPopup, logout } = useContext(
    AuthContext
  );

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <Wrapper>
      <Main>{isHome ? <>logd</> : <Link to="/">logd</Link>}</Main>
      <Smaller>Quick personal notes, saved locally only.</Smaller>
      <div>
        {isAuthenticated ? (
          <div>
            user info: {user.name}{" "}
            <button onClick={() => logoutWithRedirect()}>Log out</button>
          </div>
        ) : (
          <button onClick={() => loginWithPopup()}>Login</button>
        )}
      </div>
    </Wrapper>
  );
};
