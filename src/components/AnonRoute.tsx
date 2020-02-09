import React, { useContext } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
// import { AppProps } from '../models';
import { AuthContext } from '../providers';

interface Props extends RouteProps {
    // appProps: AppProps;
}

export function AnonRoute({ component: C, ...rest }: Props) {
  const { currentUser } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={props =>
        !currentUser
          ? (C ? <C {...props} /> : null)
          : <Redirect to="/" />}
    />
  );
}