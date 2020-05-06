import React from "react";
import ReactDOM from "react-dom";
import * as registerServiceWorker from "./registerServiceWorker";
import { App } from "./components/App/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Amplify } from "aws-amplify";
// import { amplifyConfig } from "./config/awsAmplify";
import { AuthProvider } from "./providers/AuthProvider/AuthProvider";

Amplify.configure({
  Auth: {
    // mandatorySignIn: true,
    region: "us-east-1",
    userPoolId: process.env.REACT_APP_LOGD_DEV_AUTH_POOL_ID,
    identityPoolId: process.env.REACT_APP_LOGD_DEV_IDENTITY_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_LOGD_DEV_AUTH_POOL_CLIENT_ID,
  },
});

ReactDOM.render(
  <AuthProvider>
    <Router>
      <App />
    </Router>
  </AuthProvider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker.unregister();
