import React, { Component } from "react";
import logo from "../../assets/img/logo.svg";
import icon_search from "../../assets/img/outline-search-24px.svg";
import icon_basket from "../../assets/img/outline-shopping_cart-24px.svg";
import icon_user from "../../assets/img/outline-account_circle-24px.svg";
import icon_dehaze from "../../assets/img/outline-dehaze-24px.svg";
import "./Main.css";
import { Link } from "react-router-dom";
import MOCK_DATA from "../../assets/generated.js";

export default class Main extends Component {
  handleSearch = () => {
    console.log('Search');
  }

  render() {
    return (
      <>
        <header>
          <div className="header-container">
            <form inline className="search-form">
              <input
                className="search-field"
                type="email"
                key="email"
                placeholder="Search for food"
              />
              <Link>
                <img
                  className="search-button"
                  src={icon_search}
                  alt="search"
                  onClick={this.handleSearch}
                />
              </Link>
            </form>
            <Link to="/">
              <img src={logo} alt="home" />
            </Link>
            <Link className="categories">
              <img src={icon_dehaze} alt="categories" />
            </Link>
            <Link className="basket">
              <img src={icon_basket} alt="basket" />
            </Link>
            <Link className="user">
              <img src={icon_user} alt="user" />
            </Link>
          </div>
        </header>
        <section className="content">
          {MOCK_DATA.map(item => (
              <div className="item">
                <div className="item-description">
                  <img 
                    className="item-image"
                    src={item.picture} 
                    alt={`${item.name} image`} 
                  />
                  <h3 className="item-title">{item.name}</h3>
                  <span className="item-about">{item.about}</span>
                </div>
                <div className="item-choose"></div>
              </div>
            ))}
        </section>
      </>
    );
  }
}
