import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { App } from "./components/App/App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./components/AuthProvider/AuthProvider";
import config from "./auth_config.json";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const onRedirectCallback = (appState: any) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <AuthProvider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <Router>
      <App />
    </Router>
    ,
  </AuthProvider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
