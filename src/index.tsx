import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { App } from "./components/App/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "./providers/";
import auth0config from "./config/auth0.json";
import history from "./utils/history";

const onRedirectCallback = (appState: any) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Router>
    <Auth0Provider
      domain={auth0config.domain}
      client_id={auth0config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <App />
    </Auth0Provider>
  </Router>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
