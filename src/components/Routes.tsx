import React from "react";
import { Switch } from "react-router-dom";
import Home from "./Home";
import { Login } from './Login';
import { AnonRoute } from './AnonRoute';
import { AuthRoute } from './AuthRoute';
import { TestingLogin } from './TestingLogin';

interface Props {
  // appProps: AppProps
}
const isTesting = process.env.REACT_APP_STAGE === 'TEST';

export const Routes: React.FC<Props> = () => {
  
  return (
    <Switch>
      <AuthRoute path="/" exact component={Home} />
      <AnonRoute path="/login" exact component={Login} />
      {isTesting && <AnonRoute path="/testing-login/:email/:password" exact component={TestingLogin} />}
    </Switch>
  );
}