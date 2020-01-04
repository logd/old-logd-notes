import * as React from "react";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Routes from "./Routes";

// document.title = "Logd Note-Taking App";
const App: React.FC = () => {

  return (
    <div className="App container">
      <Navbar collapseOnSelect>
        <Navbar.Brand>
          <Link to="/">Logd</Link>
        </Navbar.Brand>
    </Navbar>
    <Routes />
    </div>
  );

}

export default App;
