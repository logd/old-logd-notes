import React, { useContext } from "react";
// import styled from "styled-components";
import { AuthContext } from "../../providers";
import { useHistory, useLocation, Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import { ROUTES } from "../../routes";

// const theme = `
//     font-size: .9em;
//     font-weight: 100;
//     color: #c9d6df;
//     font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
// `;

// const Wrapper = styled.div`
//   display: flex;
//   padding: 1em;
//   ${theme};
// `;

interface Props {
  // isHome?: boolean;
}

export const UserNav: React.FC<Props> = () => {
  const location = useLocation();
  const isLogin = location.pathname === `/${ROUTES.LOGIN}`; // TODO: define routes as consts, turn this into a util
  const history = useHistory();
  const {
    authLoading,
    isAuthenticated,
    currentUser,
    setIsAuthenticated,
  } = useContext(AuthContext);

  async function handleLogout() {
    try {
      await Auth.signOut();
      setIsAuthenticated(false);
      history.push(`/${ROUTES.LOGIN}`);
    } catch (error) {
      console.log("error: ", error);
    }
  }
  return (
    <>
      {authLoading ? (
        <div />
      ) : isAuthenticated ? (
        <div>
          {currentUser && currentUser.email} |{" "}
          <button onClick={handleLogout}>Sign Out</button>
        </div>
      ) : isLogin ? null : (
        <Link to={`/${ROUTES.LOGIN}`}>Login</Link>
      )}
    </>
  );
};
