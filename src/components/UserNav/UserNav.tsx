import React, { useContext } from "react";
// import styled from "styled-components";
import { AuthContext } from "../../providers";

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
  const { isAuthenticated } = useContext(AuthContext);

  return <>{isAuthenticated ? <div>User Info</div> : <div>Login link</div>}</>;
};
