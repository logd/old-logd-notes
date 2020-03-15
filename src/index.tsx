import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Editor } from './components/Editor';

ReactDOM.render(
    <Editor />,
document.getElementById("root") as HTMLElement);
registerServiceWorker();
