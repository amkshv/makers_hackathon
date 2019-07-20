import React, { Component } from "react";
import AuthService from "./AuthService";
import { Formik, Form, Field } from "formik";
import BasicFormSchema from "./BasicFormSchema";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  componentWillMount() {
    if (this.Auth.loggedIn()) this.props.history.replace("/");
  }

  handleFormSubmit = () => {
    this.props.history.replace("/main");
  };
  render() {
    return (
      <Formik
        initialValues={{
          password: "",
          email: ""
        }}
        validationSchema={BasicFormSchema}
        onSubmit={values => {
          this.handleFormSubmit();
        }}
        render={({ errors, touched }) => (
          <Form className="login">
            <div className="signup-form">
              <div className="div">
                <label htmlFor="lastname">
                  <span>Email</span>
                </label>
                <Field
                  name="email"
                  className="login-input transition"
                  type="email"
                />
                {errors.email && (
                  <span className="error-field">{errors.email}</span>
                )}
              </div>

              <div className="div">
                <label htmlFor="password">
                  <span>Password</span>
                </label>
                <Field
                  name="password"
                  className="login-input transition"
                  type="password"
                />
                {touched.password && (
                  <span className="error-field">{errors.password}</span>
                )}
              </div>
              <div className="div">
                <span
                  onClick={() => {
                    this.props.history.push("/forgot");
                  }}
                  className="forgot-password"
                >
                  Forgot password?
                </span>
              </div>
              <button
                type="submit"
                onClick={this.onSubmit}
                className="login-button"
              >
                Login
              </button>
              <div>
                <span
                  onClick={() => {
                    this.props.history.push({ pathname: "/register" });
                  }}
                  className="create-account"
                >
                  Create account
                </span>
              </div>
            </div>
          </Form>
        )}
      />
    );
  }
}

export default Login;
