import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  //   validate = () => {
  //     return { username: "Username is required."};
  //   };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  //   const errors = this.validate();
  //   this.setState({ errors});
  //   if (errors) return;

  handleChenge = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name].username = input.value;
    this.setState({ account });
  };

  //   console.log("Submitted");

  render() {
    const { account } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              value={this.state.account.username}
              onChange={this.handleChenge}
              ref={this.username}
              id="username"
              name="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              onChange={this.state.account.password}
              onChange={this.handleChange}
              name="password"
              id="password"
              type="text"
              className="form-control"
            />
          </div>

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
