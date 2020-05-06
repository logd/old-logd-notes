import React, { useContext } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { AuthContext } from "../../providers";
// import { useAppContext } from "../libs/contextLib";

function getQueryString(name: string, url = window.location.href) {
  name = name.replace(/[[]]/g, "\\$&");

  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
  const results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export const AnonOnlyRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const redirect = getQueryString("redirect");
  return (
    <Route {...rest}>
      {!isAuthenticated ? (
        children
      ) : (
        <Redirect to={redirect === "" || redirect === null ? "/" : redirect} />
      )}
    </Route>
  );
};
