import React, { useState, useRef, useContext } from "react";
import { Page } from "../../components";
import { Auth } from "aws-amplify";
import { AuthContext } from "../../providers";

export const Login = () => {
  const { setIsAuthenticated } = useContext(AuthContext);

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loading, setLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const isValid = () => {
    return formRef && formRef.current && formRef.current.reportValidity();
  };

  const handleSubmit = async () => {
    if (!isValid()) {
      return;
    }

    setLoading(true);
    try {
      await Auth.signIn(emailInput, passwordInput);
      setIsAuthenticated(true);
    } catch (error) {
      console.log("error: ", error);
      setLoading(false);
    }
  };

  return (
    <Page>
      <h1>Login</h1>
      <form onSubmit={(e) => e.preventDefault()} ref={formRef}>
        <div>
          <input
            required
            type="email"
            placeholder="Email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>
        <div>
          <input
            required
            type="password"
            placeholder="Password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" disabled={loading} onClick={handleSubmit}>
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </div>
      </form>
    </Page>
  );
};
