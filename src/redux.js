//import {createStore} from 'redux';

var Redux = require('redux');

var reducer = function(state, action) {
    if (action.type == 'new_user') {
      return {
        user: 'pepik'
      };
    } else {
        return state;
    }
};

var store = Redux.createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

var action = {
  type: 'new_user',
  username: 'Pepicka'
}

store.dispatch(action);
