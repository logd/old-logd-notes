import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/styles.css";
import registerServiceWorker from "./registerServiceWorker";
import Amplify from 'aws-amplify';
import { BrowserRouter as Router } from 'react-router-dom';

const stage = process.env.REACT_APP_STAGE ? process.env.REACT_APP_STAGE : 'DEV';

const config: any = {
  DEV: {
    cognito: {
      userPoolId: process.env.REACT_APP_USER_POOL_ID_DEV,
      identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID_DEV,
      userPoolWebClientId: process.env.REACT_APP_USER_POOL_APP_CLIENT_ID_DEV
    },
    api: {
      endpoint: process.env.REACT_APP_API_GATEWAY_URL_DEV,
    }
  },
  PROD: {
    userPoolId: process.env.REACT_APP_USER_POOL_ID_PROD,
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID_PROD,
    userPoolWebClientId: process.env.REACT_APP_USER_POOL_APP_CLIENT_ID_PROD
  },
  api: {
    endpoint: process.env.REACT_APP_API_GATEWAY_URL_PROD,
  }
}

Amplify.configure({
    Auth: {
      mandatorySignIn: true,
      region: process.env.REACT_APP_AWS_REGION,
      ...config[stage].cognito,
    },
    API: {
      endpoints: [
        {
          name: process.env.REACT_APP_API_NAME,
          endpoint: config[stage].api.endpoint,
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
