import React, { useState, useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Auth } from "aws-amplify";
interface Props extends RouteComponentProps {
  setCurrentUser: (user: any) => void;
  currentUser: any;
}


const LoginComponent: React.FC<Props> = ({ setCurrentUser, history, currentUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  }, [currentUser, history])

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    try {
      const user = await Auth.signIn(email, password);
      setCurrentUser(user);
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div data-cy="login"  style={{
      padding: '10px 20px'
      }}>
      <form onSubmit={handleSubmit}>
          <div style={{ paddingBottom: '20px'}}>
          <label style={{ display: 'block'}}>Email</label>
          <input
            autoFocus
            type="email"
            value={email}
            placeholder={'Email'}
            onChange={e => setEmail(e.target.value)}
          />
          </div>
          <div style={{ paddingBottom: '20px'}}>
          <label style={{ display: 'block'}}>Password</label>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder={'Password'}
          />
          </div>
        <button style={{
          WebkitAppearance: 'none',
          color: '#212529',
          backgroundColor: '#f8f9fa',
          borderColor: '#f8f9fa'
          }} disabled={!validateForm()} type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

export const Login = withRouter(LoginComponent);