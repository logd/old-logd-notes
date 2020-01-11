import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { AppProps } from '../models';

interface Props extends RouteProps {
    appProps: AppProps;
}

export function AnonRoute({ component: C, appProps, ...rest }: Props) {
  return (
    <Route
      {...rest}
      render={props =>
        !appProps.isAuth
          ? (C ? <C {...props} {...appProps} /> : null)
          : <Redirect to="/" />}
    />
  );
}