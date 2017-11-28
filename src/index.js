import React from 'react';
import {render} from 'react-dom';
import App from './app';
import Form from './form';
import RemindList from './remindList';
//import {createStore} from 'redux';
//import reducer from './reducer';

//import {provider} from 'react-redux';

import {Router, Route, browserHistory, IndexRoute} from 'react-router';

//const store = createStore();

render(
//<Provider store={store}>
  <Router history={browserHistory}>

          <Route path="/" component={App}  >
            <IndexRoute component={RemindList}/>
            <Route path="new" component={Form}/>
          </Route>

       </Router>
//</Provider>
       , document.getElementById('app'));
