import * as React from "react";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import Routes from "./Routes";

// document.title = "Logd Note-Taking App";
const App: React.FC = () => {

  return (
    <div className="App container">
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1}}><Link to="/">Logd</Link></div>
        <div style={{flexBasis: '20%', alignContent: 'space-between'}}>
        <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      </div>
      </div>
      {/* <Navbar collapseOnSelect>
        <Navbar.Brand>
          <Link to="/">Logd</Link>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="justify-content-center">
            <Nav.Item>
              <Link to="/signup">Signup</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/login">Login</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
      <Routes />
    </div>
  );

}

export default App;
