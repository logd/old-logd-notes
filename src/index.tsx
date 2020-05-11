import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./registerServiceWorker";
import { App } from "./components/App/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { AuthProvider } from "./providers/";

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: process.env.REACT_APP_AWS_REGION,
    userPoolId: process.env.REACT_APP_LOGD_DEV_AUTH_POOL_ID,
    identityPoolId: process.env.REACT_APP_LOGD_DEV_IDENTITY_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_LOGD_DEV_AUTH_POOL_CLIENT_ID,
  },
  API: {
    endpoints: [
      {
        name: "notes",
        endpoint: process.env.REACT_APP_API_GATEWAY_URL,
        region: process.env.REACT_APP_AWS_REGION,
      },
    ],
  },
});

ReactDOM.render(
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>,
  document.getElementById("root") as HTMLElement
);
serviceWorker.unregister();
