import React, { Component } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase";
import "./sign-in.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            label="email"
            onChange={this.handleChange}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            label="password"
            onChange={this.handleChange}
            placeholder="Password"
            required
          />
          <div className="buttons">
            <button type="submit">Sign In</button>
            <button onClick={signInWithGoogle}>Sign In with Google</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
