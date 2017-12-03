import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {combineReducers} from 'redux';
import {createStore} from 'redux';

const todo = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
          ...state,
          completed: !state.completed
        }
    default:
      return state;
  }
}

const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
}

const visibilityFilter = (
  state = 'SHOW_ALL', 
  action
  ) => {
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return action.filter;
      default: 
        return state;  
    }
  } 

const todoApp = combineReducers({
  todos, 
  visibilityFilter});
const store = createStore(todoApp);

const render = () => {
    ReactDOM.render(<App todos= {store.getState().todos}
                         store={store}/>, document.getElementById('app'));    
}

store.subscribe(render);
render();

