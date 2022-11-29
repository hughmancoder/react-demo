import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";



/*
steps to use clas form
1) set state for form
2) define the schema for that form

*/

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  // schema specific to login
  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
