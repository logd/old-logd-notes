import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { AppProps } from '../models';

interface Props extends RouteProps {
    appProps: AppProps;
}

export const AuthRoute: React.FC<Props> = ({ component: C, appProps, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        appProps.currentUser
          ? (C ? <C {...props} {...appProps} /> : null)
          : <Redirect
              to={`/login?redirect=${props.location.pathname}${props.location
                .search}`}
            />}
    />
  );
}