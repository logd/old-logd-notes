import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import "./styles/styles.css";
import registerServiceWorker from "./registerServiceWorker";
import Amplify from 'aws-amplify';
import { BrowserRouter } from 'react-router-dom';
import config from "./config";
import { AuthProvider } from './providers';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: process.env.REACT_APP_AWS_REGION,
    userPoolId: config.cognito.userPoolId,
    identityPoolId: config.cognito.identityPoolId,
    userPoolWebClientId: config.cognito.userPoolWebClientId,
  },
  API: {
    endpoints: [
      {
        name: process.env.REACT_APP_API_NAME,
        endpoint: config.api.endpoint,
        region: process.env.REACT_APP_AWS_REGION
      },
    ]
  }
});

// const isTesting = process.env.REACT_APP_STAGE === 'TEST';
// console.log('isTesting: ', isTesting);

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
  ,
  document.getElementById("root") as HTMLElement);
registerServiceWorker();
