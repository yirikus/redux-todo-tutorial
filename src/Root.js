import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';

const Root = ({store}) => (
<Provider store = {store}>
  <Router history={browserHistory}>
	  <Route path='/(:filter)' component={App}/>
  </Router>
</Provider>
);

export default Root;