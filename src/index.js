import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { todos, visibilityFilter } from './reducers';
import {loadState, saveState} from './localStorage';
import throttle from 'lodash/throttle';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const persistedStore = loadState();
const store = createStore(todoApp, persistedStore);

store.subscribe(throttle(() => {
  //store just todos, filter is not desirable to store
  saveState({
    todos: store.getState().todos
  });
},1000));

ReactDOM.render(
<Provider store = {store}>
  <App/>
</Provider>, 

document.getElementById('app'));



