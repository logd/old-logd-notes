import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";
const LoginComponent: React.FC<any> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event: any) {
    event.preventDefault();
  
    try {
      await Auth.signIn(email, password);
      props.userHasAuthenticated(true);
      props.history.push("/");
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