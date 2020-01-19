import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/styles.css";
import registerServiceWorker from "./registerServiceWorker";
import Amplify from 'aws-amplify';
import { BrowserRouter as Router } from 'react-router-dom';

Amplify.configure({
    Auth: {
      mandatorySignIn: true,
      region: process.env.REACT_APP_AWS_REGION,
      userPoolId: process.env.REACT_APP_USER_POOL_ID,
      identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
      userPoolWebClientId: process.env.REACT_APP_USER_POOL_APP_CLIENT_ID
    },
    API: {
      endpoints: [
        {
          name: process.env.REACT_APP_API_NAME,
          endpoint: process.env.REACT_APP_API_GATEWAY_URL,
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
