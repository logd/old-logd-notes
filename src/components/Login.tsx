import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
// import "./Login.css";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event: any) {
    event.preventDefault();
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