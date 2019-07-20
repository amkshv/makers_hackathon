import React, { Component } from "react";
import "../Login/Login.css";
import { Formik, Form, Field } from "formik";
import BasicFormSchema from "./BasicFormSchema";

export default class Register extends Component {
  state = {
    inputlastName: "",
    inputPassword: "",
    inputFirst: "",
    inputLast: ""
  };

  render() {
    return (
      <Formik
        initialValues={{
          lastname: "",
          firstname: "",
          password: "",
          confirmpassword: "",
          email: ""
        }}
        validationSchema={BasicFormSchema}
        onSubmit={values => {
          this.handleJson(values);
        }}
        render={({
          errors,
          touched,
          handleChange,
          handleBlur
        }) => (
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
                {errors.email && touched.firstname && (
                  <div className="error-field">{errors.email}</div>
                )}
              </div>

              <div className="div">
                <label htmlFor="lastname">
                  <span>Last name</span>
                </label>
                <Field
                  name="lastname"
                  className="login-input transition"
                  type="lastname"
                />
                {errors.lastname && touched.lastname && (
                  <div className="error-field">{errors.lastname}</div>
                )}
              </div>

              <div className="div">
                <label htmlFor="lastname">
                  <span>First name</span>
                </label>
                <Field
                  name="firstname"
                  className="login-input transition"
                  type="firstname"
                />
                {errors.firstname && touched.firstname && (
                  <div className="error-field">{errors.firstname}</div>
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
                  <div className="error-field">{errors.password}</div>
                )}
              </div>
              <div className="div">
                <label htmlFor="confirmpassword">
                  <span>Confim password</span>
                </label>
                <Field
                  name="confirmpassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="login-input transition"
                  type="password"
                />
                {errors.password && touched.password && (
                  <div className="error-field">{errors.confirmpassword}</div>
                )}
              </div>

              <button
                type="submit"
                onClick={this.onSubmit}
                className="login-button"
              >
                Sign Up
              </button>
              <div>
                <span
                  onClick={() => {
                    this.props.history.push("/");
                  }}
                  className="create-account"
                >
                  Already have an account?
                </span>
              </div>
            </div>
          </Form>
        )}
      />
    );
  }
}