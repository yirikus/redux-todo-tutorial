import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import {todos, visibilityFilter} from './reducers'

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

class Provider extends React.Component {
  getChildContext() {
    return {
      store: this.props.store
    }
  }
  
  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: React.PropTypes.object
}


ReactDOM.render(
<Provider store = {createStore(todoApp)}>
  <App/>
</Provider>, 

document.getElementById('app'));



