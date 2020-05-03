import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { App } from "./components/App/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { amplifyConfig } from "./config/awsAmplify";
import { AuthProvider } from "./providers/AuthProvider/AuthProvider";
console.log("amplifyConfig: ", amplifyConfig);

console.log(
  "process.env.REACT_APP_AWS_REGION: ",
  process.env.REACT_APP_AWS_REGION
);
Amplify.configure({
  Auth: {
    mandatorySignIn: false,
    region: process.env.REACT_APP_AWS_REGION,
    userPoolId: amplifyConfig.cognito.USER_POOL_ID,
    identityPoolId: amplifyConfig.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: amplifyConfig.cognito.APP_CLIENT_ID,
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
// serviceWorker.unregister(); ??
registerServiceWorker();
