import React, { useContext } from "react";
import "react-quill/dist/quill.snow.css";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Routes } from "./Routes";
// import { Auth } from "aws-amplify";
import { AuthContext } from '../providers';

interface Props extends RouteComponentProps {
// isTesting?: boolean;
}

const AppComponent: React.FC<Props> = ({ location, history }) => {
  const { currentUser, handleLogout } = useContext(AuthContext)

  const {pathname} = location;

  // async function handleLogin() {  
  //   const email = process.env.REACT_APP_CYPRESS_TEST_USER_EMAIL;
  //   const password = process.env.REACT_APP_CYPRESS_TEST_USER_PASSWORD;
  //   try {
  //     if (email && password) {        
  //       const user = await Auth.signIn(email, password);
  //       setCurrentUser(user);
  //     }
  //   } catch (e) {
  //     alert(e.message);
  //   }
  // }

  // useEffect(() => {
  //   if (isTesting) {
  //     handleLogin()
  //   }
  // }, [isTesting])

  // useEffect(() => {
  //   const updateCurrentUser = async () => {
  //     try {
  //       let user = await Auth.currentAuthenticatedUser();
  //       setCurrentUser({...user});
  //     } catch {
  //       setCurrentUser(null);
  //     }
  //   }
  //   updateCurrentUser();
  // }, [])

  async function handleLogoutClick(e: React.MouseEvent<any>) {
    e.preventDefault();
    try {
      await handleLogout();
      // await Auth.signOut();
      // setCurrentUser(null);
      history.push("/login");
      
    } catch (error) {
      console.error(`Logout: ${error}`);
    }
  }

  return (
    <div>
      <div style={{
        padding: '10px 20px',
        display: 'flex' }}>
        <div style={{ flex: 1 }}><Link to="/">Logd</Link></div>
        <div style={{ flexBasis: '20%', textAlign: 'right' }}>
          {currentUser ?
            <button style={{
              // TODO: turn into LinkButton - https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'underline',
              display: 'inline',
              margin: 0,
              padding: 0,
            }} 
            onClick={handleLogoutClick}>Sign out</button>
            :
            pathname === '/login' ?
            null
            :
            <Link to="/login">Login</Link>
          }
        </div>
      </div>
      <Routes />
    </div>
  );

}

export const App = withRouter(AppComponent);
