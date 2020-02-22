import React, { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Auth } from "aws-amplify";
import queryString from 'query-string';
interface Props extends RouteComponentProps {
  setCurrentUser: (user: any) => void;
  currentUser: any;
}

const TestingLoginComponent: React.FC<Props> = ({ location, setCurrentUser, currentUser, history }) => {

    async function login(email: string, password: string) {
  
        try {
          const user = await Auth.signIn(email, password);
          setCurrentUser(user);
        } catch (e) {
          alert(e.message);
        }
    }

    useEffect(() => {
        if (currentUser) {
            history.push("/");
        }
    }, [currentUser, history])

  useEffect(() => {
      if (process.env.REACT_APP_STAGE !== 'TEST') {
          return;
      }
    const parsed = queryString.parse(location.search);
    const email = parsed.email;
    const password = parsed.password;

    if (email && password) {
        login(email as string, password as string);
    }
  }, [location, login])

  return (
    null
  );
}

export const TestingLogin = withRouter(TestingLoginComponent);