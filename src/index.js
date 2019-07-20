import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login/Login';

ReactDOM.render(
<Router>
  <Route exact path="/" component={Login} />
</Router>, 
document.getElementById('root'));

serviceWorker.unregister();
