import React, { useContext } from "react";
// import styled from "styled-components";
import { AuthContext } from "../../providers";
import { useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";

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

export const UserNav = () => {
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
      history.push("/login");
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
      ) : (
        <div>Login link</div>
      )}
    </>
  );
};
