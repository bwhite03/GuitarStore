import React, { Component } from "react";
import "./sign-up.styles.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebase";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="displayName"
            label="Display Name"
            onChange={this.handleChange}
            value={this.state.displayName}
            placeholder="Display Name"
            required
          />
          <input
            type="email"
            name="email"
            label="email"
            onChange={this.handleChange}
            value={this.state.email}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            label="password"
            onChange={this.handleChange}
            value={this.state.password}
            placeholder="Password"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            label="confirmPassword"
            onChange={this.handleChange}
            value={this.state.confirmPassword}
            placeholder="confirmPassword"
            required
          />
          <div className="buttons">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
