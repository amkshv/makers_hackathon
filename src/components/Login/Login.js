import React, { Component } from "react";
import AuthService from "./AuthService";
import { Formik, Form, Field } from "formik";
import BasicFormSchema from "./BasicFormSchema";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Auth = new AuthService();
  }
  componentWillMount() {
    if (this.Auth.loggedIn()) this.props.history.replace("/");
  }
  render() {
    return (
      <Formik
        initialValues={{
          password: "",
          email: ""
        }}
        validationSchema={BasicFormSchema}
        onSubmit={values => {
          this.handleFormSubmit(values);
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
                    this.props.history.push({ pathname: "/reg" });
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

  handleFormSubmit = values => {
    const password = values.password;
    const email = values.email;

    this.Auth.login(email, password)
      .then(res => {
        const role = res.userRole[0].name;

        if (role === "ROLE_USER") {
          this.props.history.replace("/profile");
        } else {
          this.props.history.replace("/admin");
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  handleChange(values) {
    this.setState({
      [values.target.name]: values.target.value
    });
  }
}

export default Login;
