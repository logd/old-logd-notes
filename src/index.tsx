import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/styles.css";
import registerServiceWorker from "./registerServiceWorker";
import Amplify from 'aws-amplify';
import { BrowserRouter as Router } from 'react-router-dom';

const stage = process.env.REACT_APP_STAGE ? process.env.REACT_APP_STAGE : 'DEV';

Amplify.configure({
    Auth: {
      mandatorySignIn: true,
      region: process.env.REACT_APP_AWS_REGION,
      userPoolId: `process.env.REACT_APP_USER_POOL_ID_${stage}`,
      identityPoolId: `process.env.REACT_APP_IDENTITY_POOL_ID_${stage}`,
      userPoolWebClientId: `process.env.REACT_APP_USER_POOL_APP_CLIENT_ID_${stage}`
    },
    API: {
      endpoints: [
        {
          name: process.env.REACT_APP_API_NAME,
          endpoint: `process.env.REACT_APP_API_GATEWAY_URL_${stage}`,
          region: process.env.REACT_APP_AWS_REGION
        },
      ]
    }
  });

ReactDOM.render(
    <Router>
    <App />
  </Router>,
document.getElementById("root") as HTMLElement);
registerServiceWorker();
