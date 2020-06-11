import React, { useContext } from "react";
import { Auth0Context } from "../../providers";
import styled from "styled-components";

const ButtonLink = styled.button`
  background: none !important;
  border: none;
  padding: 0 !important;
  /*optional*/
  font-family: arial, sans-serif;
  /*input has OS specific font-family*/
  color: #069;
  text-decoration: underline;
  cursor: pointer;
`;

export const UserNav = () => {
  const { logout } = useContext(Auth0Context);
  return (
    <div>
      <ButtonLink onClick={logout}>Sign Out</ButtonLink>
    </div>
  );
};
