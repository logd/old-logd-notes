import React from "react";
import { Redirect, Route } from "react-router-dom";
import { Auth } from "aws-amplify";

interface Props {
  isAuthenticated?: boolean;
}

export const PrivateRoute: React.FC<Props> = ({
  isAuthenticated,
  children,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
