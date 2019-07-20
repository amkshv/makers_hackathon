import decode from "jwt-decode";
import { URL } from "../../api.js";

export default class AuthService {
  constructor(domain) {
    this.domain = domain || URL;
    this.fetch = this.fetch.bind(this);
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login(email, password) {
    return this.fetch(`${this.domain}/api/auth/signin`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then(res => {
      this.setToken(res.accessToken);

      this.setRole(res.userRole[0].name);

      return Promise.resolve(res);
    });
  }

  loggedIn() {
    const token = this.getToken();
    return !token;
  }

  setToken(accessToken) {
    localStorage.setItem("accessToken", accessToken);
  }

  setRole(tokenType) {
    localStorage.setItem("Role", tokenType);
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem("accessToken");
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("accessToken");
  }

  getProfile() {
    return decode(this.getToken());
  }

  fetch(url, options) {
    // performs api calls sending the required authentication headers
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    if (this.loggedIn()) {
      headers["Authorization"] = "Bearer " + this.getToken();
    }

    return fetch(url, {
      headers,
      ...options
    })
      .then(this._checkStatus)
      .then(response => response.json());
  }

  _checkStatus(response) {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
}
