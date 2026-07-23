import React, { Component } from "react";
import Guest from "./Guest";
import User from "./User";

class LoginControl extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    };
  }

  login = () => {
    this.setState({ isLoggedIn: true });
  };

  logout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    if (this.state.isLoggedIn) {
      return (
        <div style={{ textAlign: "center" }}>
          <button onClick={this.logout}>Logout</button>
          <User />
        </div>
      );
    }

    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={this.login}>Login</button>
        <Guest />
      </div>
    );
  }
}

export default LoginControl;