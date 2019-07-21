import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import Forgot from './pages/Forgot/Forgot';
import SignIn from './pages/SignIn/SignIn';
import Main from './pages/Main/Main';

ReactDOM.render(
<Router>
  <Route exact path="/login" component={Login} />
  <Route exact path="/forgot" component={Forgot} />
  <Route exact path="/sign-in" component={SignIn} />
  <Route exact path="/" component={Main} />
</Router>, 
document.getElementById('root'));

serviceWorker.unregister();
