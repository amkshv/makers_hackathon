import React, { Component } from "react";
import logo from "../../assets/img/logo.svg";
import "./Main.css";

export default class Main extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="search" />
        <div className="categories" />
        <div className="user" />
      </header>
    );
  }
}
