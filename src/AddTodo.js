import React from 'react';
import { connect } from 'react-redux';

let nextId = 0;

let AddTodo = ({dispatch}) => {
    let input;
  
    const onAddClick = (text) => {
      dispatch({
        type: 'ADD_TODO',
        text: input.value,
        id: nextId++
      });
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