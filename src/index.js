import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { todos, visibilityFilter } from './reducers'

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

ReactDOM.render(
<Provider store = {createStore(todoApp)}>
  <App/>
</Provider>, 

document.getElementById('app'));



