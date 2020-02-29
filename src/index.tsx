import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import Home from './components/Home';

ReactDOM.render(
    <Home />,
document.getElementById("root") as HTMLElement);
registerServiceWorker();
