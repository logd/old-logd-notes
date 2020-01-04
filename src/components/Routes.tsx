import React from "react";
import { Switch } from "react-router-dom";
import Home from "./Home";
import { Login } from './Login';
import AppliedRoute from './AppliedRoute'; 

export const Routes: React.FC<{ appProps: any }> = ({  appProps }) => {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
    </Switch>
  );
}