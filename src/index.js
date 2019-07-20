import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Forgot from './components/Forgot/Forgot';

ReactDOM.render(
<Router>
  <Route exact path="/" component={Login} />
  <Route exact path="/forgot" component={Forgot} />
</Router>, 
document.getElementById('root'));

serviceWorker.unregister();
