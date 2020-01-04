import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { Link, withRouter } from "react-router-dom";
import {Routes} from "./Routes";
import { Auth } from "aws-amplify";

// document.title = "Logd Note-Taking App";
const App: React.FC<any> = (props) => {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);
  
  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    setIsAuthenticating(false);
  }

  async function handleLogout(e: any) {
    e.preventDefault();
    await Auth.signOut();
  
    userHasAuthenticated(false);
    props.history.push("/login");
  }
  return (
    <div className="App container">
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1}}><Link to="/">Logd</Link></div>{isAuthenticated ?
        <div><a href="#" onClick={handleLogout}>Logout</a></div>
        :
        <div>
        <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link>
      </div>
        }
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
      <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
    </div>
  );

}

export default withRouter(App);
