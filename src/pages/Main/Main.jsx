import React, { Component } from "react";
import logo from "../../assets/img/logo.svg";
import "./Main.css";
import { Form, Input, Button } from 'reactstrap';

export default class Main extends Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <div className="nav logo">
            <img src={logo} alt="" />
          </div>
          <Form inline>
            <Input
              type="email"
              key="email"
              placeholder="Search for food"
            />
            <Button>Search</Button>
          </Form>
          <div className="nav search-button" />
          <div className="nav categories" />
          <div className="nav basket" />
          <div className="nav user" />
        </div>
      </header>
    );
  }
}
