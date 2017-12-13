import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions'

let AddTodo = ({dispatch}) => {
    let input;
  
    const onAddClick = (text) => {
      dispatch(addTodo(input.value));
      input.value = '';
    };
  
    return (
      <div>
        <input ref={node => { input = node; }} />
        <button onClick={onAddClick}>add</button>
      </div>
    );
  }

  /**
   * Default behavior of connect is 
   *  - do not subscribe to store (store = null)
   *  - inject dispatch function
   */
  AddTodo = connect ()(AddTodo);

  export default AddTodo;