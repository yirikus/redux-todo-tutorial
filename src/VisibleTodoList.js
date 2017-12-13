import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import {toggle} from './actions'


const getVisibleTodos = (
    todos,
    filter
  ) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed);
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed);
    }
  }

const TodoList = ({
    todos,
    onTodoClick
  }) => (
      <ul>
        {todos.map(todo =>
          <Todo key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)} />
        )}
      </ul>
);

const mapStateToProps = (state) => {
    return {
      todos: getVisibleTodos(
        state.todos,
        state.visibilityFilter)
    };
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
      onTodoClick:  (id) => {dispatch(toggle(id))}
    };
  }

  /**
   * Note that connect is order dependant!!!!
   * State = first argument
   * Dispatch = second argument
   */
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList);

  export default VisibleTodoList;