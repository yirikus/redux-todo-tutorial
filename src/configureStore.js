import React from 'react';
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { todos, visibilityFilter } from './reducers';
import {loadState, saveState} from './localStorage';
import throttle from 'lodash/throttle';


const configureStore = () => { 
    const todoApp = combineReducers({
        todos,
    });

    const persistedStore = loadState();
    const store = createStore(todoApp, persistedStore);

    store.subscribe(throttle(() => {
    //store just todos, filter is not desirable to store
    saveState({
        todos: store.getState().todos
    });
    },1000));

    return store;
};

export default configureStore;