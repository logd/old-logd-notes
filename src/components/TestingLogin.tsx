import React, { useEffect, useContext } from "react";
import { withRouter, RouteComponentProps, useParams } from "react-router-dom";
import { AuthContext } from '../providers';

interface Props extends RouteComponentProps {
  setCurrentUser: (user: any) => void;
  currentUser: any;
}


const TestingLoginComponent: React.FC<Props> = () => {
  const { handleLogin } = useContext(AuthContext)

  const { email, password } = useParams();

  useEffect(() => {
    if (email && password) {
        handleLogin(email, password);
    }
  }, [email, password, handleLogin])

  return null;
}

export const TestingLogin = withRouter(TestingLoginComponent);