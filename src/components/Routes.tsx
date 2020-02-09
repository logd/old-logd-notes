import React from "react";
import { Switch } from "react-router-dom";
import Home from "./Home";
import { Login } from './Login';
import { AnonRoute } from './AnonRoute';
import { AuthRoute } from './AuthRoute';
// import { AppProps } from '../models';
// import { AuthContext } from '../providers';

interface Props {
  // appProps: AppProps
}

export const Routes: React.FC<Props> = () => {
  // const { currentUser, handleLogout } = useContext(AuthContext)

  return (
    <Switch>
      <AuthRoute path="/" exact component={Home} />
      <AnonRoute path="/login" exact component={Login} />
    </Switch>
  );
}