import React, { useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Auth } from "aws-amplify";
interface Props extends RouteComponentProps {
  setIsAuth: (isAuth: boolean) => void;
}


const LoginComponent: React.FC<Props> = ({ setIsAuth, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    try {
      await Auth.signIn(email, password);
      setIsAuth(true);
      // TODO: redirect to the originally requested page
      history.push("/");
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
          <div>
          <label>Email</label>
          <input
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          </div>
          <div>
          <label>Password</label>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          </div>
        <button disabled={!validateForm()} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export const Login = withRouter(LoginComponent);