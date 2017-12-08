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
const store = createStore(todoApp);

const render = () => {
  ReactDOM.render(<App store={store}
  />, document.getElementById('app'));
}

store.subscribe(render);
render();

