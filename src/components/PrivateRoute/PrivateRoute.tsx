import React, { useEffect, useContext } from "react";
import { Route, withRouter, RouteComponentProps } from "react-router-dom";
import { Auth0Context } from "../../providers";

interface Props extends RouteComponentProps {
  component: React.ElementType;
  path: string | string[];
}

const PrivateRouteComponent: React.FC<Props> = ({
  component: Component,
  path,
  ...rest
}) => {
  const { loading, isAuthenticated, loginWithRedirect } = useContext(
    Auth0Context
  );

  useEffect(() => {
    if (loading || isAuthenticated) {
      return;
    }
    const fn = async () => {
      await loginWithRedirect({
        appState: { targetUrl: path },
      });
    };
    fn();
  }, [loading, isAuthenticated, loginWithRedirect, path]);

  const render = (props: any) =>
    isAuthenticated === true ? <Component {...props} /> : null;

  return <Route path={path} render={render} {...rest} />;
};

export const PrivateRoute = withRouter(PrivateRouteComponent);
