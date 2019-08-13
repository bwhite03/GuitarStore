import React, { useState } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase";
import "./sign-in.styles.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          label="email"
          onChange={handleEmail}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          label="password"
          onChange={handlePassword}
          placeholder="Password"
        />
        <div className="buttons">
          <button type="submit">Sign In</button>
          <button onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
