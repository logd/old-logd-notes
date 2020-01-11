import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Routes } from "./Routes";
import { Auth } from "aws-amplify";

interface Props extends RouteComponentProps {

}

const App: React.FC<Props> = ({ location, history }) => {
  const [isAuth, setIsAuth] = useState(false);
  const {pathname} = location;

  async function handleLogout(e: any) {
    e.preventDefault();
    try {
      await Auth.signOut();
      setIsAuth(false);
      history.push("/login");
      
    } catch (error) {
      console.error(`Logout: ${error}`);
    }
  }

  return (
    <div className="App container">
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}><Link to="/">Logd</Link></div>
        <div style={{ flexBasis: '20%', alignContent: 'space-between' }}>
          {isAuth ?
            <a href="#" onClick={(e) => handleLogout(e)}>Sign out</a>
            :
            pathname === '/login' ?
            null
            :
            <>
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
            </>
          }
        </div>
      </div>
      <Routes isAuth={isAuth} setIsAuth={setIsAuth} />
    </div>
  );

}

export default withRouter(App);
